import { ErrorBoundaryComponent, json, LoaderFunction, } from '@remix-run/node';
import { Link,  useLoaderData } from "@remix-run/react";
import { BlogPost as BlogPostType } from '~/types';
import { getPosts } from '~/utils/blog.server';
import BlogPost from '~/components/BlogPost';
import { CacheControl } from "~/utils/cache-control.server";
import { getSeoMeta } from "~/seo";
import type {Handle}  from '~/types'

export let meta = ({ context }) => {
	let seoMeta = getSeoMeta({
		title: `Blog`
	});
	return {
		...seoMeta,
	};
};

export let loader: LoaderFunction = async function() {
  return json({
    blogPosts: await getPosts(),
  }, {
    headers: {
      "Cache-Control": new CacheControl("swr").toString(),
    }
  });
}

type LoaderType = {
  blogPosts: BlogPostType[]
};

const handleId = 'blog-post'
export const handle : Handle = {
  id: handleId,
  getSitemapEntries: async request => {
    try {
      const data = await getPosts();
      return data.map(page => {
        return {route: `${page.url}`, priority: 0.7}
      })
    } catch(e) {
      // just in case strapi is down...
      return { route: '/blog', priority: 0.7 }
    }
  },
}

export default function Index() {
  const data = useLoaderData<LoaderType>();

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Blog
      </h1>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
      </p>
        {data.blogPosts.slice(0, 10).map(post => (
          <BlogPost key={post.url}
            title={post.attributes.meta.title}
            slug={post.url}
            excerpt={post.attributes.excerpt}
          />
        ))}
    </>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({error}) => {
  return (
    <main>
      <h1>Unable to fetch list of blog posts. Please check back later</h1>
    </main>
  )
}
