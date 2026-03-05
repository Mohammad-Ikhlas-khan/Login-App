import React from 'react'
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }
  const { username } = localStorage.getItem("token") ? JSON.parse(atob(localStorage.getItem("token").split('.')[1])) : {};
  return (
    <div className='flex flex-col gap-10'>
    <p className="text-lg font-semibold text-gray-500">Welcome to our application {username || "Guest"}!</p>
    <button onClick={handleLogout} className=" bg-blue-500 text-gray-900 py-2 rounded hover:bg-blue-600 cursor-pointer">Logout</button>
    </div>
  )
}

export default Welcome