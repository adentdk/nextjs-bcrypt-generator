import { createContext, useContext } from "react"

const ThemeContext = createContext<[string, () => void]>(['light', () => {} ])

export const useTheme = () => useContext(ThemeContext)

export default ThemeContext