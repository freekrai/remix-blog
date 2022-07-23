import { Link, useLoaderData } from "@remix-run/react";
import cn from 'classnames';

export default function BlogPost({
  title,
  excerpt,
  slug,
  views=0,
}){
  return (
    <Link prefetch="intent" to={slug} className="w-full my-2 no-underline	">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="w-full mb-2 text-lg font-medium text-blue-600 md:text-xl dark:text-gray-100">
            {title}
          </h4>
          <p className="w-32 mb-4 text-left text-gray-500 dark:text-white md:text-right md:mb-0">
{/*}              
            {`${views ? new Number(views).toLocaleString() : '–––'} views`}
*/}              
          </p>
        </div>
        {excerpt && <p className="text-gray-600 dark:text-gray-300">{excerpt}...</p>}
    </Link>
  );
}