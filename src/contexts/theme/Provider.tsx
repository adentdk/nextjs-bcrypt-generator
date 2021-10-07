import { useState, useEffect } from "react"
import {useCookie} from 'next-cookie'
import { NextPageContext } from "next"
import { IThemeProviderProps } from "./interfaces"
import ThemeContext from "./index"

export default function ThemeProvider ({cookie: propsCookie = '', children}: IThemeProviderProps) {
  const cookie = useCookie(propsCookie)

  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleHtmlDarkClass = () => document.querySelector('html')?.classList.toggle('dark')
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      cookie.set('theme', 'dark')
    } else {
      setTheme('light')
      cookie.set('theme', 'light')
    }

    toggleHtmlDarkClass()
  }



  useEffect(() => {
    const isDarkEnabled = cookie.get('theme')
  
    if (isDarkEnabled) {
      setTheme('dark')

      toggleHtmlDarkClass()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export function getServerSideProps(context: NextPageContext) {
  // const cookie = useCookie(context)

  // cookie.set('getServerSideProps', 'This value is set by getServerSideProps.')

  return {
    props: {
      cookie: context.req?.headers.cookie || ''
    }
  }
}