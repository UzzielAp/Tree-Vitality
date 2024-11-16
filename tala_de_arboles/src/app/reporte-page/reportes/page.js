"use client";

import React, { useEffect, useState } from 'react';

const ReportesPage = () => {
    const [reportes, setReportes] = useState([]);

    useEffect(() => {
        // Función para obtener los reportes desde el backend
        const fetchReportes = async () => {
            try {
                const response = await fetch('https://crud-py-production.up.railway.app/reporte');
                const data = await response.json();
                if (data.reportes) {
                    setReportes(data.reportes);
                } else {
                    console.log("No se encontraron reportes");
                }
            } catch (error) {
                console.error("Error al obtener los reportes:", error);
            }
        };

        fetchReportes();
    }, []);

    return (
        <div className="max-w-[720px] mx-auto mt-32">
            <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">
                <div>
                    <h3 className="text-lg font-semibold text-slate-800">Reportes</h3>
                    <p className="text-slate-500">Listado de todos los reportes</p>
                </div>
                <div className="ml-3">
                    <div className="w-full max-w-sm min-w-[200px] relative">
                        <div className="relative">
                            <input
                                className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                                placeholder="Buscar # de reporte"
                            />
                            <button
                                className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded"
                                type="button"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-8 h-8 text-slate-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-slate-200 bg-slate-50"># Reporte</th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">Usuario</th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">Tipo de actividad</th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">Fecha</th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">Ubicación</th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportes.length > 0 ? (
                            reportes.map((reporte) => (
                                <tr key={reporte.id} className="hover:bg-slate-50 border-b border-slate-200">
                                    <td className="p-4 py-5">
                                        <p className="block font-semibold text-sm text-slate-800">{reporte.id}</p>
                                    </td>
                                    <td className="p-4 py-5">
                                        <p className="text-sm text-slate-500">{reporte.usuario}</p>
                                    </td>
                                    <td className="p-4 py-5">
                                        <p className="text-sm text-slate-500">{reporte.tipo_reporte}</p>
                                    </td>
                                    <td className="p-4 py-5">
                                        <p className="text-sm text-slate-500">{new Date(reporte.fecha_reporte).toLocaleDateString()}</p>
                                    </td>
                                    <td className="p-4 py-5">
                                        <p className="text-sm text-slate-500">{reporte.ubicacion}</p>
                                    </td>
                                    <td className="p-4 py-5">
                                        <p className="text-sm text-slate-500">{reporte.descripcion}</p>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="p-4 text-center text-sm text-slate-500">
                                    No hay reportes disponibles
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="flex justify-between items-center px-4 py-3">
                    <div className="text-sm text-slate-500">
                        Showing <b>1-5</b> of {reportes.length}
                    </div>
                    <div className="flex space-x-1">
                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            Prev
                        </button>
                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
                            1
                        </button>
                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            2
                        </button>
                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            3
                        </button>
                        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportesPage;
