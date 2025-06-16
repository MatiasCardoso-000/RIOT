export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 mt-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-zinc-100 mb-4">RIOT Indumentaria</h3>
            <p className="text-sm">
              La mejor selección de remeras para hombre. Calidad, estilo y comodidad en cada prenda.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-100 mb-4">Productos</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Remeras Básicas</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Remeras Over Size</a></li>
             
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-100 mb-4">Ayuda</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Guía de Talles</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Envíos</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Devoluciones</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-100 mb-4">Síguenos</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-zinc-100 transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800">
          <p className="text-sm text-center">
            © 2025 RIOT Indumentaria. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}