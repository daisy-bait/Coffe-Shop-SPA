import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/LoginContext";
import { ProductProvider } from "./context/ProductsContext";
import { OrdersProvider } from "./context/OrdersContext";
import App from "./App.jsx";
import "./assets/styles/global/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <AuthProvider>
        <ProductProvider>
          <OrdersProvider>
            <App />
          </OrdersProvider>
        </ProductProvider>
      </AuthProvider>
    </ModalProvider>
  </StrictMode>
);
