import type {LoaderFunction} from '@remix-run/node'
import * as dateFns from 'date-fns'
import {getDomainUrl} from '~/utils'
import { getPosts, getPages } from '~/utils/blog.server';
import { createSitemap } from '~/utils/sitemap.server';
import { CacheControl } from "~/utils/cache-control.server";

export const loader = async ({request}) => {
    const blogUrl = `${getDomainUrl(request)}`
    let [pageUrls, pages, posts] = await Promise.all([
        [
            '/',
            '/blog',
        ].map((url) => ({ url: `${blogUrl}${url}` })),
        getPages(),
        getPosts(),
    ]);    

    const postUrls = [...pages, ...posts].map( post => {
        return {url: `${blogUrl}${post.url}`}
    }) || []

    const urls = [...pageUrls, ...postUrls];
    const sitemap = createSitemap(urls);
    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            "Cache-Control": new CacheControl("swr").toString() 
        },
    });
};