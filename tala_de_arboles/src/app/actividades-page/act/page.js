"use client";
import React, {useState} from 'react';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link';

const ActividadesPage = () => {
    const [formData, setFormData] = useState({
        tipo_actividad: '',
        nombre: '',
        email: '',
        telefono: ''
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
            const response = await fetch('https://crud-py-production.up.railway.app/inscripcion_actividad/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usuario_id: usuario_id,
                    tipo_actividad: formData.tipo_actividad,
                    nombre: formData.nombre,
                    email: formData.email,
                    telefono: formData.telefono
                }),
            });

            if (!response.ok) {
                throw new Error('Error al enviar la inscripción');
            }

            const data = await response.json();
            alert(data.mensaje);  
            setFormData({ tipo_actividad: '',nombre: '', email: '', telefono: '' });

        } catch (error) {
            console.error(error);
            alert('Error al enviar la inscripción');
        }
    }
    //--------------------//
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    return(
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrORTv4YERlqVvEDRZWKu12fNVmZ4WF9CeWg&s" alt="blog"></img>
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">ACTIVIDAD</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Siembra de arboles</h1>
                    <p className="leading-relaxed mb-3">Únete a nuestro equipo para la siembra de árboles.</p>
                    <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:underline" onClick={openModal}>Inscríbete</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://daniperezmalaga.es/wp-content/uploads/productos-sostenibles-y-responsables.jpg" alt="blog"></img>
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">INFORMACIÓN</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Productos sostenibles</h1>
                    <p className="leading-relaxed mb-3">Aprende todo lo esencial acerca de los productos sostenibles.</p>
                    <div className="flex items-center flex-wrap">
                    <Link href="../../actividades-page/sostenible" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:underline" >Haz clic aquí</Link>
                    </div>
                </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://definicion.de/wp-content/uploads/2009/08/ecoturismo-1.jpg" alt="blog"></img>
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">ACTIVIDAD</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Ecoturismo</h1>
                    <p className="leading-relaxed mb-3">Inscríbete para acompañarnos a explorar y a respetar el medio ambiente natural y sus comunidades locales.</p>
                    <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:underline" onClick={openModal}>Inscríbete</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i0.wp.com/resilientemagazine.com/wp-content/uploads/2023/06/Agricultura-Sostenible-Cultivando-un-Futuro-Resiliente.jpg?fit=600%2C600&ssl=1" alt="blog"></img>
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">INFORMACIÓN</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Agricultura Sostenible</h1>
                    <p className="leading-relaxed mb-3">Conoce como funciona la agricultura sostenible.</p>
                    <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:underline" href="https://proyectos.idiap.gob.pa/proyectos/innovacion_productiva_sostenible_sistemas_produccion_agricultura_familiar_panama/es">Haz clic aquí</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5faEVOI2vVguggPhgMzZjfxs93pcm0NeCPg&s" alt="blog"></img>
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">ACTIVIDAD</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Conservación de habitas</h1>
                    <p className="leading-relaxed mb-3">Acompáñanos a la conservación de habitats. Inscríbete haciendo clic abajo.</p>
                    <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:underline" onClick={openModal}>Inscríbete</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://cdn0.ecologiaverde.com/es/posts/6/9/9/cuales_son_las_leyes_que_protegen_el_medio_ambiente_2996_600.jpg" alt="blog"></img>
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">INFORMACIÓN</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Conoce las leyes</h1>
                    <p className="leading-relaxed mb-3">Conoce las leyes acerca de los derechos de la naturaleza.</p>
                    <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:underline" href="http://www.mdgfund.org/sites/default/files/ENV_GUIA_Panama_Legislacion%20ambiental.pdf">Haz clic aquí</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg w-1/3">
                    <h2 className="text-xl font-bold mb-4">Formulario de Registro</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Tipo Actividad</label>
                                <select
                                        name="tipo_actividad"
                                        required
                                        onChange={handleChange}
                                        value={formData.tipo_actividad}
                                        className="w-full p-2 border border-gray-300 rounded focus:border-blue-600 px-2 py-3 outline-none"
                                    >
                                        <option value="Siembra de Arboles">Siembra de Arboles</option>
                                        <option value="Ecoturismo">Ecoturismo</option>
                                        <option value="Conservacion de habitas">Conservación de habitas</option>
                                    </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Nombre</label>
                                <input name="nombre" onChange={handleChange} value={formData.nombre} type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Ingresa tu nombre" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Correo Electrónico</label>
                                <input name="email" onChange={handleChange} value={formData.email} type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Ingresa tu correo" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Teléfono</label>
                                <input name="telefono" onChange={handleChange} value={formData.telefono} type="tel" className="w-full p-2 border border-gray-300 rounded" placeholder="Ingresa tu teléfono" />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={closeModal} className="px-4 py-2 mr-2 bg-gray-300 rounded">Cancelar</button>
                                <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ActividadesPage;