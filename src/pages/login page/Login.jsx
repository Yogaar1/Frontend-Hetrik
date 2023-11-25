// src/Login.js
import React, {useState} from 'react';
import image from '../../assets/bglr.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login clicked');
    };

    return (
        <div className="flex flex-col-reverse sm:flex-row h-screen bg-gray-100">
            <div className="sm:w-1/2 flex justify-center items-center">
                <div className="text-center">
                    <h3 className="text-3xl font-bold mb-4 text-blue-500">welcome back to the Hetrik website</h3>
                    <p className="text-gray-600 mb-4">Enter your credentials to access your account !!</p>
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full border rounded-md py-2 px-3 mb-8 mt-16"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border rounded-md py-2 px-3 mb-16"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <button
                        className="bg-blue-500 text-white py-2 px-10 mb-4 rounded-md hover:bg-blue-600"
                        onClick={handleLogin}>
                        Login
                    </button>
                    <p className="text-gray-600 mb-4">you don’t have an account?</p>
                </div>
            </div>

            <div className="sm:w-1/2">
                <img
                    src={image}
                    alt="Illustration"
                    className="object-cover w-full h-64 sm:h-full"/>
            </div>
        </div>
    );
};

export default Login;
