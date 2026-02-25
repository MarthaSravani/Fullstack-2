import { useTheme } from './context/ThemeContext'
import './App.css'

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <div className="container">
        <h1>Dark Mode Toggle</h1>
        <p>Simple dark mode using Context API</p>
        <button onClick={toggleTheme}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  )
}

export default App
