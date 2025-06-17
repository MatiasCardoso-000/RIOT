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

      {!isAuthenticated && isActive && (
        <div>
          <Link to={"/login"}>Ingresar</Link>
          <Link to={"/registro"}>Registrarse</Link>
        </div>
      )}
    </>
  );
};
