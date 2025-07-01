import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Cart } from "./components/Cart/Cart";

export const AppRouter = () => {
  return (
    <main className="h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/productos/descripcion/:name"
            element={<ProductPage />}
          />
           <Route
            path="carrito"
            element={<Cart />}
          />
        </Route>

        {/* <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} /> */}
      </Routes>
    </main>
  );
};
