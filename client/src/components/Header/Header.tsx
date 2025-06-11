import { Menu, Search} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const {searchQuery,handleSearchChange} = useSearch()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full bg-zinc-900 text-zinc-100 shadow-lg p-2">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <Link to={"/"} className="flex-shrink-0 flex items-center">
          <h1 className="text-2xl font-bold text-zinc-100">RIOT</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8"></nav>

        {/* Desktop User Actions */}
        <div className="hidden md:flex items-center space-x-4"></div>

        {/* Mobile Navigation */}

        <div className="md:hidden">
          <Menu onClick={toggleMobileMenu} />
        </div>
        <div
          className={` ${
            mobileMenuOpen ? "flex" : "hidden"
          } justify-end absolute top-16 right-0 md:flex items-center space-x-4 bg-zinc-900 text-zinc-100 w-full md:w-auto md:static md:bg-transparent md:space-x-8`}
        >
          <div className="flex  md:bg-transparent gap-4 px-2 pt-2 pb-3 ">
            <Link to="/catalogo" className="hover:text-zinc-500 cursor-pointer">
              Catálogo
            </Link>
            {/* <Link
              to="/favoritos"
              className="hover:text-zinc-500 cursor-pointer"
            >
              <Heart className="w-6 h-6 hover:text-zinc-500 cursor-pointer" />
            </Link> */}
            <div className="flex items-center ">
              {showInput && (
                <input
                  type="text"
                  name="search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Buscar..."
                  className="bg-zinc-800 text-zinc-100 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
              )}  
            <Search className="w-6 h-6 hover:text-zinc-500 cursor-pointer" onClick={() => setShowInput(!showInput)}/>
            </div>
            {/* <User className="w-6 h-6 hover:text-zinc-500 cursor-pointer" /> */}
          </div>
        </div>
      </div>
    </header>
  );
};
