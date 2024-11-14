import Link from 'next/link'
import { ArrowLeft, Leaf, Recycle, Sun, Zap } from 'lucide-react'

export default function ProductosSostenibles() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Productos Sostenibles</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué son los productos sostenibles?</h2>
        <p className="text-gray-600">
          Los productos sostenibles son aquellos que se diseñan, fabrican y utilizan de manera que minimizan el impacto negativo en el medio ambiente y maximizan la eficiencia de los recursos naturales. Estos productos consideran todo su ciclo de vida, desde la obtención de materias primas hasta su disposición final.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <Leaf className="w-8 h-8 text-green-500 mb-2" />
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Características</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Fabricados con materiales reciclados o de origen sostenible</li>
            <li>Diseñados para ser duraderos y reparables</li>
            <li>Eficientes en el uso de energía y recursos</li>
            <li>Embalaje mínimo y ecológico</li>
            <li>Producidos bajo condiciones éticas y justas</li>
            <li>Reciclables o biodegradables al final de su vida útil</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <Sun className="w-8 h-8 text-yellow-500 mb-2" />
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Beneficios</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Reducción de la huella de carbono</li>
            <li>Conservación de recursos naturales</li>
            <li>Disminución de la contaminación</li>
            <li>Apoyo a prácticas empresariales éticas</li>
            <li>Mejora de la calidad de vida a largo plazo</li>
          </ul>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <Recycle className="w-8 h-8 text-blue-500 mb-2" />
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Ejemplos de productos sostenibles</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
          <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-indigo-500" /> Bolsas reutilizables de materiales reciclados</li>
          <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-indigo-500" /> Productos de limpieza biodegradables</li>
          <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-indigo-500" /> Ropa de fibras orgánicas o recicladas</li>
          <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-indigo-500" /> Muebles de madera certificada FSC</li>
          <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-indigo-500" /> Electrodomésticos de bajo consumo</li>
          <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-indigo-500" /> Paneles solares y dispositivos renovables</li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Cómo identificar productos sostenibles</h2>
        <p className="text-gray-600 mb-2">Busca estas características al comprar:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Certificaciones ecológicas (ENERGY STAR, FSC, USDA Organic)</li>
          <li>Etiquetas que indiquen el uso de materiales reciclados</li>
          <li>Información sobre prácticas de fabricación sostenible</li>
          <li>Ausencia de embalaje excesivo</li>
          <li>Garantías extendidas que indiquen durabilidad</li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <Link href="../../actividades-page/act" className="inline-flex items-center text-indigo-500 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a la página de actividades
        </Link>
      </div>
    </div>
  )
}