import { Link, NavLink } from "@remix-run/react";
import cn from 'classnames';
import { Theme, Themed, useTheme } from "~/utils/theme-provider";

export default function Header() {
    const [, setTheme] = useTheme();

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        );
    };

  return (      
    <div className="flex flex-col justify-center px-8">
        <nav className="flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 dark:text-gray-100">
            <a href="#skip" className="skip-nav">
                Skip to content
            </a>
            <div className="ml-[-0.60rem] flex space-x-4">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => cn(
                        isActive ? 'font-bold text-blue-400 dark:text-gray-400' : 'text-gray-500 dark:text-gray-200',
                        'px-3 py-2 font-medium text-sm'
                    )}
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/blog" 
                    className={({ isActive }) => cn(
                        isActive ? 'font-bold text-blue-400 dark:text-gray-400' : 'text-gray-500 dark:text-gray-200',
                        'px-3 py-2 font-medium text-sm'
                    )}
                >
                    Blog
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => cn(
                        isActive ? 'font-bold text-blue-400 dark:text-gray-400' : 'text-gray-500 dark:text-gray-200',
                        'px-3 py-2 font-medium text-sm'
                    )}
                >
                    About
                </NavLink>
            </div>
            <aside className="flex justify-end w-full">
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="mr-5 w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-800 dark:text-gray-200"
                    >
                        <Themed
                            dark={<path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />}
                            light={<path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />}
                        />
                    </svg>
                </button>
            </aside>
        </nav>
    </div>
  );
}