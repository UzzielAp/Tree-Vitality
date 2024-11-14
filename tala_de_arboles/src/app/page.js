import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.background}>
    <div className="flex flex-col min-h-screen">
      {/* Sección de bienvenida */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-8 mt-8">
        <h2 className="text-6xl font-bold text-blue-600">Bienvenido a Tree Vitality</h2><br></br>
        <p className="mt-4 text-4xl text-white font-bold">Ofrecemos las herramientas para hacer de nuestra naturaleza un paisaje mas bonito</p>
      </main>

      {/* Sección de servicios */}
      <section id="services" className="bg-white py-6">
        <div className="px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-600">Nuestros Servicios</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-200 rounded-lg shadow-lg">
              <h4 className="text-blue-600 text-xl font-semibold">Hacer Reportes</h4>
              <p className="mt-2 text-gray-600">Si ves que alguien esta infrigiendo alguna de las leyes y esta atentando contra la naturaleza, reportalo!.</p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg shadow-lg">
              <h4 className="text-blue-600 text-xl font-semibold">Actividades</h4>
              <p className="mt-2 text-gray-600">Un espacio creado para que las personas se puedan inscribir en las actividades para cuidar nuestro medio ambiente.</p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg shadow-lg">
              <h4 className="text-blue-600 text-xl font-semibold">Prácticas sostenibles</h4>
              <p className="mt-2 text-gray-600">Ofrecemos orientación y guías para que todos puedan aprender de las mejores prácticas sostenibles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Tree Vitality. Todos los derechos reservados. Uzziel Aparicio, Javier Hernandez, Richard Zhang</p>
        </div>
      </footer>
    </div>
    </div>
  );
}
