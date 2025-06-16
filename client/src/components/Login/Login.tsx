import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import type { User } from "../../types/user.interface";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {

 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const { signIn} = useAuth();

  const onSubmit = handleSubmit(async (data: User) => {
    await signIn(data);
  });

  return (
    <section className="flex items-center justify-between overflow-hidden">
      <div className="bg-zinc-900 h-screen w-1/2 flex justify-end items-end p-4">
        <h1 className="text-9xl text-zinc-50  font-bold">RIOT</h1>
      </div>
      <div className="w-full flex flex-col gap-10">
        <h1 className="text-5xl text-center w-1/2 text-zinc-900 font-bold ">
          Ingreso
        </h1>

        <form className="w-full flex flex-col  gap-6 items-center" onSubmit={onSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Correo Electrónico"
            className="w-1/2 border p-2"
             {...register("email", { required: true })}
          />
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            className="w-1/2 border p-2"
            {...register("password", { required: true })}
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
