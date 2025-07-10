import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Login } from "./components/Login/Login";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Cart } from "./components/Cart/Cart";
import { Admin } from "./components/Admin/Admin";
import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";
import { useAuth } from "./hooks/useAuth";

export const AppRouter = () => {
  const { isAuthenticated, isLoading } = useAuth();
  console.log("authenticated", isAuthenticated);
  console.log("loading", isLoading);

  return (
    <main className="h-screen">
      <Routes>
        <Route
          element={
            <ProtectedRoutes
              requiredRole={1}
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
              redirectTo="/"
            />
          }
        >
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          {!isLoading && <Route index element={<Home />} />}
          <Route
            path="/productos/descripcion/:name"
            element={<ProductPage />}
          />
          <Route path="carrito" element={<Cart />} />
        </Route>
      </Routes>
    </main>
  );
};
