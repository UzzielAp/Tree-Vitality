"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link';
import styles from './ReportePage.module.css';

const ReportePage = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email_rep: '',
        direccion: '',
        actividad: '',
        tipo_reporte: '',
        detalles: ''
    });
    
    const router = useRouter();  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const usuario_id = localStorage.getItem('usuario_id');
        
        if (!usuario_id) {
            alert('Debes iniciar sesión para enviar un reporte.');
            router.push('/auth-page/login'); 
            return;  
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/reportes/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usuario_id: usuario_id,
                    nombre: formData.nombre,
                    email_rep: formData.email_rep,
                    ubicacion: formData.direccion,
                    tipo_reporte: formData.tipo_reporte,
                    descripcion: formData.detalles
                }),
            });

            if (!response.ok) {
                throw new Error('Error al enviar el reporte');
            }

            const data = await response.json();
            alert(data.mensaje);  
            setFormData({ nombre: '', email: '', direccion: '', tipo_reporte: '', detalles: '' });

        } catch (error) {
            console.error(error);
            alert('Error al enviar el reporte');
        }
    };

    return (
        <div className={styles.background}>
            <div className="font-[sans-serif]">
                <div className="min-h-screen flex flex-col items-center justify-center mt-12">
                    <div className="bg-white grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg">
                        <div className="md:max-w-md w-full px-4 py-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-12">
                                    <h3 className="text-black text-3xl font-extrabold">Llene los campos</h3>
                                </div>

                                <div className="mb-8">
                                    <label className="text-black text-xs block mb-2">Nombre completo</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="nombre"
                                            type="text"
                                            required
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                            placeholder="Ingresa tu nombre completo"
                                        />
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <label className="text-black text-xs block mb-2">Correo Electrónico</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="email_rep"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                            placeholder="Ingresa tu correo"
                                        />
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <label className="text-black text-xs block mb-2">Dirección</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="direccion"
                                            type="text"
                                            required
                                            value={formData.direccion}
                                            onChange={handleChange}
                                            className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                            placeholder="Ubicación donde ocurrieron los hechos"
                                        />
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <label className="text-black text-xs block mb-2">Tipo de actividad</label>
                                    <select
                                        name="tipo_reporte"
                                        required
                                        value={formData.tipo_reporte}
                                        onChange={handleChange}
                                        className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                    >
                                        <option value="">¿Qué actividad deseas reportar?</option>
                                        <option value="Tala ilegal">Tala ilegal</option>
                                        <option value="Tráfico de especies">Tráfico de especies</option>
                                        <option value="Contaminación">Contaminación</option>
                                        <option value="Deforestación urbana">Deforestación urbana</option>
                                        <option value="Deforestación por agricultura no sostenible">Deforestación por agricultura no sostenible</option>
                                        <option value="Quema de tierras">Quema de tierras</option>
                                        <option value="Minería ilegal">Minería ilegal</option>
                                        <option value="Ocupación de áreas protegidas">Ocupación de áreas protegidas</option>
                                    </select>
                                </div>

                                <div className="mb-8">
                                    <label className="text-black text-xs block mb-2">Detalles</label>
                                    <textarea
                                        name="detalles"
                                        required
                                        rows="5"
                                        value={formData.detalles}
                                        onChange={handleChange}
                                        className="w-full text-gray-800 text-sm border border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                        placeholder="Cuéntanos qué pasó..."
                                    ></textarea>
                                </div>

                                <div className="mt-12">
                                    <button
                                        type="submit"
                                        className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                                    >
                                        Enviar reporte
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="md:h-full bg-white rounded-xl lg:p-12 p-8">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/010/927/270/non_2x/do-not-cut-down-trees-sign-on-white-background-cut-trees-forbidden-save-forest-icon-stop-cutting-down-live-trees-for-flat-style-vector.jpg"
                                className="w-full h-full object-contain rounded-md"
                                alt="Registro de Usuario"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportePage;
