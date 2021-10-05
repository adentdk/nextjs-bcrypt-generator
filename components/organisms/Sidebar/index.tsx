import NextLink from 'next/link';
import { useState, useEffect } from 'react';
import { classNames } from '../../../utils/style';
import Paper from '../../atoms/Paper';

export default function SideBar() {
  const [_showSide, _setShowSide] = useState(false);
  const toggleSideBar = () => _setShowSide((prevState) => !prevState);

  useEffect(() => {
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    sidebarOverlay?.addEventListener('click', toggleSideBar);
    return () => {
      sidebarOverlay?.removeEventListener('click', toggleSideBar);
    };
  }, []);

  return (
    <div>
      <Paper className="flex justify-between items-center md:hidden">
        <button onClick={toggleSideBar} type="button" className="p-4 focus:outline-none hover:bg-gray-50 focus:bg-gray-100 dark:hover:bg-gray-500 dark:focus:bg-gray-400">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <button onClick={toggleSideBar} type="button" className="p-4 focus:outline-none hover:bg-gray-50 focus:bg-gray-100 dark:hover:bg-gray-500 dark:focus:bg-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </Paper>

      <aside className={classNames('w-64 min-h-screen space-y-6 py-7 px-1 absolute inset-y-0 z-20 left-0 transform shadow-md md:relative md:translate-x-0 transition duration-200 ease-in-out bg-white dark:bg-gray-800 text-gray-800 dark:text-white', _showSide ? '' : '-translate-x-full')}>
        <div className="flex justify-between">
          <NextLink href="#">
            <span className="flex items-center space-x-2 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 32 32"><path d="M25.5 14h-2a3 3 0 0 0-3-3H6.5a3 3 0 0 0-3 3v9a7 7 0 0 0 7 7h6a7 7 0 0 0 6.31-4H25.5a3 3 0 0 0 3-3V17A3 3 0 0 0 25.5 14zm-20 4.5h16v3H5.5zm1-5.5h14a1 1 0 0 1 1 1v2.5H5.5V14A1 1 0 0 1 6.5 13zm10 15h-6a5 5 0 0 1-4.95-4.5h15.9A5 5 0 0 1 16.5 28zm10-5a1 1 0 0 1-1 1H23.42a7 7 0 0 0 .08-1V16h2a1 1 0 0 1 1 1zM12.5 9a1 1 0 0 0 1-1 2.58 2.58 0 0 1 .78-1.87A4.53 4.53 0 0 0 15.5 3a1 1 0 0 0-2 0 2.58 2.58 0 0 1-.78 1.88A4.53 4.53 0 0 0 11.5 8 1 1 0 0 0 12.5 9zM17.7 9a1 1 0 0 0 1-1 1.89 1.89 0 0 1 .58-1.37A3.84 3.84 0 0 0 20.3 4a1 1 0 0 0-2 0 1.89 1.89 0 0 1-.58 1.38A3.84 3.84 0 0 0 16.7 8 1 1 0 0 0 17.7 9zM7.7 9a1 1 0 0 0 1-1 1.89 1.89 0 0 1 .58-1.37A3.84 3.84 0 0 0 10.3 4a1 1 0 0 0-2 0 1.89 1.89 0 0 1-.58 1.38A3.84 3.84 0 0 0 6.7 8 1 1 0 0 0 7.7 9z" /></svg>
              <span className="text-2xl font-extrabold">Brand</span>
            </span>
          </NextLink>
          <button onClick={toggleSideBar} type="button" className="p-4 focus:outline-none hover:bg-gray-50 focus:bg-gray-100 dark:hover:bg-gray-500 dark:focus:bg-gray-400 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav>
          <ul>
            <li>
              <NextLink href="#home">
                <div className="block p-2 rounded-md cursor-pointer text-sm font-medium hover:bg-gray-100 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:bg-gray-600 dark:hover:text-indigo-200 md:mx-4 md:my-0">
                  <span>Home</span>
                </div>
              </NextLink>
            </li>
          </ul>
        </nav>
      </aside>

      <div id="sidebar-overlay" className={classNames('absolute z-10 transform inset-0 bg-gray-700 bg-opacity-50 transition-all duration-1000 ease-in-out', _showSide ? 'block' : 'hidden')} />

    </div>
  );
}
