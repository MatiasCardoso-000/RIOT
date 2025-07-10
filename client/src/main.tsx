import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CartProvider } from "./context/Cart/CartProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/Products/ProductsProvider.tsx";
import { SearchProvider } from "./context/Search/SearchProvider.tsx";
import { AppRouter } from "./AppRouter.tsx";
import { AuthProvider } from "./context/Auth/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <SearchProvider>
            <ProductsProvider>
              <AppRouter />
            </ProductsProvider>
          </SearchProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  // {/* </StrictMode> */}
);
