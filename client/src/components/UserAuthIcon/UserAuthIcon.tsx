import { User } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";

export const UserAuthIcon = () => {
  const { isAuthenticated } = useAuth();
  const [isActive, setActive] = useState(false);

  const handleIsActive = () => {
    setActive(!isActive);
  };

  return (
    <>
      <button onClick={handleIsActive}>
        <User className="w-6 h-6 hover:text-zinc-500 cursor-pointer" />
      </button>

      {!isAuthenticated || isActive && (
        <div className="flex flex-col gap-2 absolute top-20 right-0 p-4 bg-zinc-900">
          <Link to={"/login"} className="hover:underline">Ingresar</Link>
          <Link to={"/registro"} className="hover:underline">Registrarse</Link>
        </div>
      )}
    </>
  );
};
