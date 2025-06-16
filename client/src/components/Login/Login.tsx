import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <section className="flex items-center justify-between overflow-hidden">
      <div className="bg-zinc-900 h-screen w-1/2 flex justify-end items-end p-4">
        <h1 className="text-9xl text-zinc-50  font-bold">RIOT</h1>
      </div>
      <div className="w-full flex flex-col gap-10">
        <h1 className="text-5xl text-center w-1/2 text-zinc-900 font-bold ">
          Ingreso
        </h1>

        <form className="w-full flex flex-col  gap-6 items-center">
          <input
            type="email"
            id="email"
            placeholder="Correo Electrónico"
            className="w-1/2 border p-2"
          />
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            className="w-1/2 border p-2"
          />
          <button className="w-1/2 bg-zinc-900 text-zinc-50 p-2 cursor-pointer hover:bg-zinc-700">
            Ingresar
          </button>
        </form>

        <p className="text-right w-3/4">
          ¿No estás registrado? Hacelo acá {" "}
          <Link to="/registro">
            <span className="font-bold cursor-pointer hover:underline">
              Registrarme
            </span>{" "}
          </Link>
        </p>
      </div>
    </section>
  );
};
