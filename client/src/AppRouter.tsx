import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { HomePage } from "./pages/HomePage/HomePage";

export const AppRouter = () => {
  return (
    <main className="h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos/descripcion/:name" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </main>
  );
};
