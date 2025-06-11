import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { CartProvider } from "./context/Cart/CartProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/Products/ProductsProvider.tsx";
import { SearchProvider } from "./context/Search/SearchProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <CartProvider>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </CartProvider>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>
);
