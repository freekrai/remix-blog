import { Link } from "@remix-run/react";
import cn from 'classnames';

export default function BlogPostCard({ title="", slug="#", gradient="" }) {
//           //'flex flex-col rounded-lg shadow-lg overflow-hidden',
  return (
    <Link to={`/blog/${slug}`} 
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full md:w-full bg-gradient-to-r p-1  shadow-lg',
        gradient
      )}

    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-5 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
      </div>
  </Link>
);
}

/*
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    <Link 
      to={`/blog/${slug}`} 
      className="border border-4 border-gray-600 p-6 rounded-xl shadow-lg bg-white dark:bg-gray-900"
    >
      <h2 className="text-lg text-gray-900 dark:text-gray-100 tracking-tight font-medium title-font mb-2">{title}</h2>
      <p className="leading-relaxed text-base"></p>
  </Link>

    <Link to={`/blog/${slug}`} 
        className={cn(
          'transform hover:scale-[1.01] transition-all',
          'rounded-xl w-full md:w-full bg-gradient-to-r p-1  shadow-lg',
          gradient
        )}

      >
        <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-5 w-full text-gray-900 dark:text-gray-100 tracking-tight">
              {title}
            </h4>
          </div>
        </div>
    </Link>
*/

/*
1:

<div className="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
  <a className="block p-6 bg-white sm:p-8 rounded-xl" href="">
    <div className="mt-16 sm:pr-8">
      <h5 className="text-xl font-bold text-gray-900">Science of Chemistry</h5>

      <p className="mt-2 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
      </p>
    </div>
  </a>
</div>

2:

<a
  className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
  href=""
>
  <img
    className="object-cover w-full h-56"
    src="https://www.hyperui.dev/photos/team-1.jpeg"
    alt=""
  />

  <div className="p-6">
    <h5 className="text-xl font-bold">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </h5>

    <p className="mt-2 text-sm text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <div
      className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 "
    >
      Find out more
      <span aria-hidden="true">&rarr;</span>
    </div>
  </div>
</a>

3: 

<a
  className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg"
  href=""
>
  <span
    className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="justify-between sm:flex">
    <div>
      <h5 className="text-xl font-bold text-gray-900">
        Building a SaaS product as a software developer
      </h5>
      <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
    </div>

    <div className="flex-shrink-0 hidden ml-3 sm:block">
      <img
        className="object-cover w-16 h-16 rounded-lg shadow-sm"
        src="https://www.hyperui.dev/photos/man-5.jpeg"
        alt=""
      />
    </div>
  </div>

  <div className="mt-4 sm:pr-8">
    <p className="text-sm text-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
      provident a, ipsa maiores deleniti consectetur nobis et eaque.
    </p>
  </div>

  <dl className="flex mt-6">
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">Published</dt>
      <dd className="text-xs text-gray-500">31st June, 2021</dd>
    </div>

    <div className="flex flex-col-reverse ml-3 sm:ml-6">
      <dt className="text-sm font-medium text-gray-600">Reading time</dt>
      <dd className="text-xs text-gray-500">3 minute</dd>
    </div>
  </dl>
</a>

4:

<a href="/blog" className="relative flex items-end h-48 transition bg-white border-4 border-black rounded-3xl group hover:bg-yellow-50">
  <span className="absolute inset-0 -translate-x-2 -translate-y-2 bg-white ring-4 ring-black rounded-3xl -z-10"></span>
  <span className="absolute inset-0 -translate-x-4 -translate-y-4 bg-white ring-4 ring-black rounded-3xl -z-20"></span>

  <div className="p-8 lg:group-hover:opacity-0 lg:group-hover:absolute">
    <p className="text-lg font-bold">Alert Components</p>

    <p className="mt-1 font-mono text-xs">7 Components</p>
  </div>

  <div className="absolute p-8 opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
    <p className="text-lg font-bold">Alert Components</p>

    <p className="mt-1 text-xs">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo officiis impedit deleniti odio, totam dolorem odit quia neque debitis corporis, hic quam, aspernatur libero excepturi tenetur. Enim suscipit molestias culpa.
    </p>
  </div>
</a>

5:

<article className="p-6 bg-white sm:p-8 rounded-xl ring ring-indigo-50">
  <div className="flex items-start">
    <div
      className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
      aria-hidden="true"
    >
      <div className="flex items-center gap-1">
        <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
        <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
        <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
        <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
        <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
      </div>
    </div>

    <div className="sm:ml-8">
      <strong
        className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
      >
        Episode #101
      </strong>

      <h2 className="mt-4 text-lg font-medium sm:text-xl">
        <a href="" className="hover:underline"> Some Interesting Podcast Title </a>
      </h2>

      <p className="mt-1 text-sm text-gray-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nulla
        amet voluptatum sit rerum, atque, quo culpa ut necessitatibus eius
        suscipit eum accusamus, aperiam voluptas exercitationem facere aliquid
        fuga. Sint.
      </p>

      <div className="mt-4 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center text-gray-500">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <p className="ml-1 text-xs font-medium">48:32 minutes</p>
        </div>

        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

        <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
          Featuring <a href="" className="underline hover:text-gray-700">Barry</a>,
          <a href="" className="underline hover:text-gray-700">Sandra</a> and
          <a href="" className="underline hover:text-gray-700">August</a>
        </p>
      </div>
    </div>
  </div>
</article>


*/