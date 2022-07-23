import { bundleMDX } from 'mdx-bundler'
import calculateReadingTime from 'reading-time'
import type TPQueue from 'p-queue'

export type MdxFile = { path: string; content: string }

async function compileMdx<FrontmatterType extends Record<string, unknown>>(
	slug: string,
	githubFiles: Array<MdxFile>,
) {
	const [rehypeCodeTitles, rehypePrism, remarkToc, remarkGfm, rehypeSlug, rehypeAutolinkHeadings] = await Promise.all([
		import('rehype-code-titles').then((mod) => mod.default),
		import("rehype-prism-plus").then((mod) => mod.default),
		import("remark-toc").then((mod) => mod.default),
		import("remark-gfm").then((mod) => mod.default),
		import('rehype-slug').then((mod) => mod.default),
		import('rehype-autolink-headings').then((mod) => mod.default),	
	]);

	const indexRegex = new RegExp(`${slug}\\/index.mdx?$`)
	const indexFile = githubFiles.find(({ path }) => indexRegex.test(path))
	if (!indexFile) return null

	const rootDir = indexFile.path.replace(/index.mdx?$/, '')
	const relativeFiles: Array<MdxFile> = githubFiles.map(
		({ path, content }) => ({
			path: path.replace(rootDir, './'),
			content,
		}),
	)
	const files = arrayToObj(relativeFiles, {
		keyName: 'path',
		valueName: 'content',
	})

	try {
		const { frontmatter, code } = await bundleMDX({
			source: indexFile.content,
			files,
			mdxOptions(options) {
				options.remarkPlugins = [
					...(options.remarkPlugins ?? []),
					remarkGfm,
					remarkToc
				]
				options.rehypePlugins = [
					...(options.rehypePlugins ?? []),
					rehypeCodeTitles,
					rehypePrism,
					[
						rehypeAutolinkHeadings,
						{
							properties: {
							className: ['anchor']
							}
						}
					]			
				]
				return options
			},
		})
		const readTime = calculateReadingTime(indexFile.content)

		return {
			code,
			readTime,
			frontmatter: frontmatter as FrontmatterType,
		}
	} catch (error: unknown) {
		console.error(`Compilation error for slug: `, slug)
		throw error
	}
}

function arrayToObj<ItemType extends Record<string, unknown>>(
	array: Array<ItemType>,
	{ keyName, valueName }: { keyName: keyof ItemType; valueName: keyof ItemType },
) {
	const obj: Record<string, ItemType[keyof ItemType]> = {}
	for (const item of array) {
		const key = item[keyName]
		if (typeof key !== 'string') {
			throw new Error(`${keyName.toString()} of item must be a string`)
		}
		const value = item[valueName]
		obj[key] = value
	}
	return obj
}

let _queue: TPQueue | null = null
async function getQueue() {
	const { default: PQueue } = await import('p-queue')
	if (_queue) return _queue

	_queue = new PQueue({ concurrency: 1 })
	return _queue
}

// We have to use a queue because we can't run more than one of these at a time
// or we'll hit an out of memory error because esbuild uses a lot of memory...
async function queuedCompileMdx<
	FrontmatterType extends Record<string, unknown>,
	>(...args: Parameters<typeof compileMdx>) {
	const queue = await getQueue()
	const result = await queue.add(() => compileMdx<FrontmatterType>(...args))
	return result
}

export { 
	queuedCompileMdx as compileMdx}