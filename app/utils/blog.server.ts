import { BlogPost } from "~/types";
import path from "path";
import fs from 'fs/promises';
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { MdxFile } from '~/utils/mdx.server';

import { get, cachified, lruCache} from '~/utils/cache.server'

export const getPosts = async (): Promise<BlogPost[]> => {
	return JSON.parse(await getFile('blog-cache.json'));
}

const contentPath = 'content'

export const getFile = async (path: string): Promise<string> => {
	const jsonDirectory = __dirname + "/../" + contentPath;
	const data = await fs.readFile(`${jsonDirectory}/${path}`, "utf8");
	return data.toString();
}

export const getContent = async (path: string): Promise<Array<MdxFile>> => {
	try {
		const mdxPath = __dirname + "/../" + contentPath;
		const results = await fs.readdir(`${mdxPath}/${path}`);
		
		const files: Array<MdxFile> = await Promise.all(results.map(async (fileOrDirectory) => {
			const data = await fs.readFile(`${mdxPath}/${path}/${fileOrDirectory}`, 'utf-8');

			return {
				path: `${path}/${fileOrDirectory}`,
				content: data.toString(),
			}
		}));

		return files;
	} catch (error: any) {
		if (error.code?.includes('ENOENT')) {
			throw new Error('Not found')
		}

		throw error;
	}
}