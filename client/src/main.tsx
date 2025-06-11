import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { CartProvider } from "./context/Cart/CartProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/Products/ProductsProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
