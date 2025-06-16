import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CartProvider } from "./context/Cart/CartProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/Products/ProductsProvider.tsx";
import { SearchProvider } from "./context/Search/SearchProvider.tsx";
import { AppRouter } from "./AppRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <CartProvider>
          <ProductsProvider>
            <AppRouter />
          </ProductsProvider>
        </CartProvider>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>
);
