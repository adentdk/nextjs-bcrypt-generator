import TextInputWithIcon from '../../molecules/TextInputWithIcon';

export default function Navbar() {
  return (
    <nav className="bg-white md:shadow-md py-2 dark:bg-gray-800">
      <div className="container px-6 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex flex-1 justify-between">
          <div className="w-full md:mr-4">
            <TextInputWithIcon
              icon={(
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )}
              placeholder="Search"
              htmlFor="search"
              fullWidth
            />
          </div>
          <div className="hidden md:flex">
            <button type="button" className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
