import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <main className='w-screen h-screen text-black'>
      <Outlet />
    </main>
  )
}

export default App
