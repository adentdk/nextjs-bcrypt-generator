import { useTheme } from 'src/contexts/theme'
import Button from '../../atoms/Button'

export default function Navbar() {
  const [theme, toggleDarkTheme] = useTheme()


  const buttonIcon = theme === 'dark' ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )

  return (
    <nav className="bg-primary-600 dark:bg-gray-800 dark:border-gray-600 text-gray-800 dark:text-gray-300 shadow-md border-b-1 border-inset py-4">
      <div className="container px-6 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex flex-1 justify-between">
          <h2 className="font-bold text-xl">NextJS Bcrypt Generator</h2>
          <Button className="w-8 p-0.5 h-8" variant="text" color="white" onClick={toggleDarkTheme}>
            {buttonIcon}
          </Button>
        </div>
      </div>
    </nav>
  )
}
