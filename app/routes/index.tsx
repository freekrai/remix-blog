import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
      <h1>Welcome to Remix Blog</h1>
      <ul>
        <li>
          <Link
            to="/blog"
            className="text-blue-600 dark:text-gray-100"
          >
            Read The Blog
          </Link>
        </li>
        <li>
          <a 
            target="_blank" 
            href="https://github.com/freekrai/remix-blog"
            className="text-blue-600 dark:text-gray-100"
          >
            Fork the repo
          </a>
        </li>
      </ul>
    </div>
  );
}
