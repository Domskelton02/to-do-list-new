import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' // Ensure this imports Tailwind CSS

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <div className="m-6">
        <a href="https://vitejs.dev" target="_blank" className="inline-block">
          <img src={viteLogo} className="h-32 mx-auto" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="inline-block">
          <img src={reactLogo} className="h-32 mx-auto" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Vite + React</h1>
      <div className="mt-6 bg-gray-100 p-4 rounded shadow-lg inline-block">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code>src/App.tsx</code> and save to test HMR updates.
        </p>
      </div>
      <p className="mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
