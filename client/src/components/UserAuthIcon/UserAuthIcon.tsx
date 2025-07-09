import { User } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const UserAuthIcon = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isActive, setActive] = useState(false);

  const handleIsActive = () => {
    setActive(!isActive);
  };
  useEffect(() => {
    console.log(isActive);
  }, [isActive]);
  return (
    <div className="relative">
      <button onClick={handleIsActive}>
        <User className="w-6 h-6 hover:text-zinc-500 cursor-pointer" />
      </button>

      {isAuthenticated ? (
        <div className={`${isActive ? "block absolute top-14 right-[-16px] bg-zinc-900 px-10 py-2 rounded-bl-xl" : "hidden"}`}>
          <button onClick={logout} className="hover:underline cursor-pointer">
            Cerrar sesión
          </button>
        </div>
      ) : (
        <div className={`${isActive ? "block absolute top-14 right-[-16px] bg-zinc-900 px-6 py-2 rounded-bl-xl" : "hidden"}`}>
          <Link to={"/login"} className="hover:underline cursor-pointer">
            Ingresar
          </Link>
        </div>
      )}
    </div>
  );
};
