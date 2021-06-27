import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <header className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-xl text-white">
        <img
          src={logo}
          className="animate-logo h-[40vmin] pointer-events-none"
          alt="logo"
        />
        <p>Hello React + Tailwind + TypeScript + Vite!</p>
        <p>
          <button
            type="button"
            className="text-xl"
            onClick={() => setCount(count => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-blue-300"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-blue-300"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}
