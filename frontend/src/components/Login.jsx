import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
 const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://login-app-1-sc55.onrender.com/login', {
                username,
                password
            });
            localStorage.setItem('token', response.data.token);
            toast.success(response.data.message);
            navigate('/welcome');
        } catch (error) {
            console.error('Error logging in:', error);
            const msg=error.response?.data?.error || 'An error occurred during login. Please try again later.';
            toast.error(msg);
        }
    }

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Login</h2>
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <label htmlFor="username" className='block mb-2 text-sm font-medium text-gray-700'>Username:</label>
                <input
                    type="text"
                    placeholder="Username"
                    id='username'
                    name='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='w-full p-2 border border-gray-300 rounded mb-4'
                />
                <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-700'>Password:</label>
                <input
                    type="password"
                    placeholder="Password"
                    id='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full p-2 border border-gray-300 rounded mb-4'
                />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login