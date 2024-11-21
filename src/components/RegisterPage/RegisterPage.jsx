import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setError('All fields are required');
            return;
        }

        navigate('/login');
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex justify-center items-center min-h-screen" style={{ backgroundColor: 'rgba(0, 0, 0, 0.767)', color: '#fff' }}>
            <div className="p-8 rounded-lg shadow-lg w-96" style={{ backgroundColor: '#1a1a1a' }}>
                <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
                {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="w-full p-3 mt-1 bg-gray-800 text-white border border-gray-700 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full p-3 mt-1 bg-gray-800 text-white border border-gray-700 rounded-md"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create a password"
                            className="w-full p-3 mt-1 bg-gray-800 text-white border border-gray-700 rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-md"
                        style={{ backgroundColor: '#007bff', color: '#fff', hover: { backgroundColor: '#0056b3' } }}
                    >
                        Register
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <span>Already have an account? </span>
                    <a href="/login" className="text-blue-500 hover:underline">Login</a>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
