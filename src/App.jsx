import { createContext, useState } from 'react'
import './App.css'
import RoutesApp from './Routes'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('dark')
  const toogleTheme = ()=>{
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
  }
  return (
    <ThemeContext.Provider value={{theme, toogleTheme}}>
  <div id={theme}>
    <RoutesApp/>
  </div>
    </ThemeContext.Provider>
     

  )
  
}

export default App
