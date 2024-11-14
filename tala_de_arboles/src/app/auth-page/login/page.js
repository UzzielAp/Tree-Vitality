"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (email, password) => {
        try {
            const response = await fetch('http://localhost:8000/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('usuario_id', data.usuario_id); 
                setMessage(data.mensaje);
                alert(data.mensaje); 
                router.push('/')
            } else {
                setMessage(data.detail);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Error al iniciar sesión.'); 
        } finally {
            setLoading(false); 
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); 
        setLoading(true); 

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(formData.email)) {
            alert('Por favor ingresa un correo electrónico válido.');
            setLoading(false); 
            return;
        }

        console.log("Datos del formulario:", formData); 
        await handleLogin(formData.email, formData.password); 
    };

    return (
        <div className={styles.background}>
            <div className="font-[sans-serif]">
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <div className="bg-white grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg">
                        <div className="md:max-w-md w-full px-4 py-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-12">
                                    <h3 className="text-gray-800 text-3xl font-extrabold">Inicie Sesión</h3>
                                    <p className="text-sm mt-4 text-gray-800">
                                        ¿No tienes una cuenta?
                                        <Link href="../../auth-page/signup" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Regístrate aquí</Link>
                                    </p>
                                </div>

                                <div>
                                    <label className="text-gray-800 text-xs block mb-2">Correo Electrónico</label>
                                    <div className="relative flex items-center">
                                        <input 
                                            name="email" 
                                            type="text" 
                                            required 
                                            value={formData.email} 
                                            onChange={handleChange} 
                                            className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" 
                                            placeholder="Introduce tu correo electrónico" 
                                        />
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <label className="text-gray-800 text-xs block mb-2">Contraseña</label>
                                    <div className="relative flex items-center">
                                        <input 
                                            name="password" 
                                            type="password" 
                                            required 
                                            value={formData.password} 
                                            onChange={handleChange} 
                                            className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" 
                                            placeholder="Introduce tu contraseña" 
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                        <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                                            Recordar dispositivo
                                        </label>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <button 
                                        type="submit" 
                                        className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                                    >
                                        {loading ? 'Iniciando...' : 'Iniciar Sesión'}
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="md:h-full bg-white rounded-xl lg:p-12 p-8">
                            <img 
                                src="https://adwimages.co.uk/wp-content/uploads/2021/06/Green-Iguana-head-shot-e1624643395717-485x485.jpg" 
                                className="w-full h-full object-contain rounded-md" 
                                alt="login-image" 
                            />
                        </div>
                    </div>

                    {error && <p className="text-red-500 mt-4">{error}</p>}
                    {message && <p className="text-green-500 mt-4">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

