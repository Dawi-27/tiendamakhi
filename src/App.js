import React, { useState } from "react";

const products = [
  { category: "Arte y Pintura", img: "arte.jpg", desc: "Pinceles, acuarelas y más." },
  { category: "Oficina", img: "oficina.jpg", desc: "Sillas, escritorios y útiles." },
  { category: "Escolar", img: "escolar.jpg", desc: "Cuadernos, mochilas y más." },
  { category: "Tela y Costura", img: "costura.jpg", desc: "Hilos, telas y accesorios." }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">LIBRERIA MHAKI</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 bg-blue-500 rounded">☰ Menú</button>
      </header>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-1/2 h-full bg-white shadow-lg p-6 transition-transform transform translate-x-0 z-50">
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-lg">✖</button>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li><a href="index.html" className="block p-2 text-lg hover:bg-gray-200">Inicio</a></li>
              <li><a href="MUJER1.html" className="block p-2 text-lg hover:bg-gray-200">Damas</a></li>
              <li><a href="HOMBRE1.html" className="block p-2 text-lg hover:bg-gray-200">Varones</a></li>
              <li><a href="INFANTIL.html" className="block p-2 text-lg hover:bg-gray-200">Niños</a></li>
            </ul>
          </nav>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {products.map((item, index) => (
          <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
            <img src={item.img} alt={item.category} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-lg font-bold mt-2">{item.category}</h2>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <aside className="mt-4 p-4 bg-gray-200 rounded-lg">
        <h2 className="text-lg font-bold">Buscador</h2>
        <form className="flex gap-2 mt-2">
          <input type="text" placeholder="Buscar..." className="p-2 border rounded w-full" />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">🔍</button>
        </form>
      </aside>

      <footer className="text-center bg-blue-700 text-white p-4 mt-4 rounded-lg">
        <h4>LIBRERIA MHAKI 2025 - Todos los derechos reservados</h4>
      </footer>
    </div>
  );
}
