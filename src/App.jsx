import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Home from "./pages/Home/Home";
import Api from "./pages/Api/Api";
import Menu from "./pages/Menu/Menu";
import Recomendado from "./pages/Recomendado/Recomendado";
import Blog from "./pages/Blog/Blog";
import Nosotros from "./pages/Nosotros/Nosotros";
import { useLogin } from "./context/LoginContext";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { CartPopup } from "./components/layout/OrderPopUp/CartPopup";
import AdminProducts from "./pages/Admin/AdminProducts";
import LoginModal from "./components/modals/CreationModals/LoginModal";
import { ProtectedRoute } from "./routesControl/routes";
import { useAuth } from "./context/AuthContext";
import { useEffect } from "react";
import { setupAxiosResponseInterceptors } from "./api/axios.instance";

function App() {
  const { logout } = useAuth();
  const { showLoginOrRegisterModal, mode, closeModal, openRefresh } = useLogin();

  useEffect(() => {
    setupAxiosResponseInterceptors(openRefresh, logout);
  }, [openRefresh, logout]);

  return (
    <Router>
      <Navbar />
      <CartPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/suggest" element={<Recomendado />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<Nosotros />} />
        <Route element={<ProtectedRoute requiredRoles={["ADMIN"]} />}>
          <Route path="/admin/products" element={<AdminProducts />} />
        </Route>
      </Routes>
      <Footer />
      <LoginModal
        isOpen={showLoginOrRegisterModal}
        mode={mode}
        onClose={closeModal}
      />
    </Router>
  );
}

export default App;
