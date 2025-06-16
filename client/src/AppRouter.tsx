import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { Footer } from "./components/Footer/Footer";

export const AppRouter = () => {
  return (
    <main className="h-screen">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos/descripcion/:name" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
      <Footer/>
    </main>
  );
};
