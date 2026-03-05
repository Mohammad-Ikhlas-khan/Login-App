import { useState } from 'react' 
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Welcome from './components/Welcome'
import ProtectedRoute from './ProtectedRoute'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen flex items-center justify-center  bg-gray-900">
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/welcome" 
              element={<ProtectedRoute><Welcome /></ProtectedRoute>} />
         </Routes>
    </div>
  )
}

export default App
