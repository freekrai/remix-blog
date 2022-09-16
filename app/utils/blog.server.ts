import { BlogPost } from "~/types";
import { GitHubFile, MdxFile } from '~/utils/mdx.server';
import { envSchema } from "~/env.server";

import { getLocalFile, getLocalContent } from "./fs.server";
import { downloadFile, downloadMdxFileOrDirectory } from "./github.server";

let env = envSchema.parse(process.env);

const contentPath = 'content'

export const getPosts = async (): Promise<BlogPost[]> => {
	if( env.USE_FILESYSTEM_OR_GITHUB === 'fs' ) {
		return JSON.parse(await getLocalFile('blog-cache.json'));
	}
	const data = await JSON.parse(await downloadFile('content/blog-cache.json'));
	return data || [];	
}

export const getPages = async (): Promise<BlogPost[]> => {
	if( env.USE_FILESYSTEM_OR_GITHUB === 'fs' ) {
		return JSON.parse(await getLocalFile('page-cache.json'));
	}
	const data = await JSON.parse(await downloadFile('content/page-cache.json'));
	return data || [];	
}

export const getFile = async (path: string): Promise<string> => {
	if( env.USE_FILESYSTEM_OR_GITHUB === 'fs' ) {
		return getLocalFile(path);
	} else if( env.USE_FILESYSTEM_OR_GITHUB === 'gh' ) {
		return downloadFile(path)
	}
	return '';
}

export const getContent = async (path: string) => {
	try {
		if( env.USE_FILESYSTEM_OR_GITHUB === 'fs' ) {
			return getLocalContent(path);
		} else if( env.USE_FILESYSTEM_OR_GITHUB === 'gh' ) {
			const files = await downloadMdxFileOrDirectory(path).then((post) => post.files);
			return files;
		}
		return [];
	} catch (error: any) {
		if (error.code?.includes('ENOENT')) {
			throw new Error('Not found')
		}
		throw error;
	}	
}