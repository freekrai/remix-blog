import { HeadersFunction, json, LoaderFunction, MetaFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { MDXPage } from "~/components/MdxPage";
import { BlogPostAttributes } from "~/types";
import { getContent } from "~/utils/blog.server";
import { compileMdx } from "~/utils/mdx.server";
import { CacheControl } from "~/utils/cache-control.server";
import { getSeoMeta, getSeoLinks } from "~/seo";



type LoaderData = {
	post: {
		code: string
		frontmatter: BlogPostAttributes
	}
}

export const loader: LoaderFunction = async ({params}) => {
	const postTitle = params.post;

	invariant(postTitle, "BlogPost: postTitle is required");

	const getPost = async () => {
		const files = await getContent(`posts/${postTitle}`);
		return compileMdx(postTitle, files);
	}

	let post = await getPost();

	invariant(post, "Not found");

	return json({post}, {
		headers: {
			"Cache-Control": new CacheControl("swr").toString(),
		}
	})
}

export const headers: HeadersFunction = ({loaderHeaders}) => {
	return {
		'Cache-Control': loaderHeaders.get('Cache-Control')!
	}
}

/*
export let links = ({ context }) => {
	let seoLinks = getSeoLinks({
		title: `Welcome ${context.name}`
	});
	return [...seoLinks];
};
*/

export const meta: MetaFunction = ({data}: {data: LoaderData}) => {
	if (!data || !data.post) {
		return {};
	}
	let seoMeta = getSeoMeta({
		title: data.post.frontmatter.meta.title,
		description: data.post.frontmatter.meta.description,
	});
	return {
		...seoMeta,
	};
}

export default function BlogPost() {
	const {post} = useLoaderData<LoaderData>();

	return (
		<article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
			<h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">{post.frontmatter.meta.title}</h1>
			<div className="w-full mt-4 prose dark:prose-dark max-w-none">
				<MDXPage code={post.code} />
			</div>
		</article>
	)
}
