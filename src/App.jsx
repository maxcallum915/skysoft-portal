import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Orders from "./pages/orders/Orders";
import NewOrder from "./pages/orders/NewOrder";
import OrderDetails from "./pages/orders/OrderDetails";
import Clients from "./pages/clients/Clients";
import NewClient from "./pages/clients/NewClient";
import ClientDetails from "./pages/clients/ClientDetails";
import Settings from "./pages/Settings";
import UserProfile from "./pages/UserProfile";
import ByBrand from "./pages/summary/ByBrand";
import ByCategory from "./pages/summary/ByCategory";
import ByClient from "./pages/summary/ByClient";
import useAuth from "./hooks/useAuth";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const toastOptions = {
  position: "bottom-center",
  duration: 5000,
  success: {
    style: { backgroundColor: "#4ade80", color: "#fff" },
    iconTheme: {
      primary: "#fff",
      secondary: "#4ade80",
    },
  },
  error: {
    style: { backgroundColor: "#ef4444", color: "#fff" },
    iconTheme: {
      primary: "#fff",
      secondary: "#ef4444",
    },
  },
};

const App = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token) {
      navigate("/login");
    }
  }, [auth, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Main />} />
          <Route path="orders">
            <Route index element={<Orders />} />
            <Route path="new" element={<NewOrder />} />
            <Route path=":id" element={<OrderDetails />} />
          </Route>
          <Route path="clients">
            <Route index element={<Clients />} />
            <Route path="new" element={<NewClient />} />
            <Route path=":id" element={<ClientDetails />} />
          </Route>
          <Route path="users">
            <Route path=":id" element={<UserProfile />} />
          </Route>
          <Route path="summary">
            <Route path="byBrand" element={<ByBrand />} />
            <Route path="byCategory" element={<ByCategory />} />
            <Route path="byClient" element={<ByClient />} />
          </Route>
          <Route path="admin-settings/*" element={<Settings />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster toastOptions={toastOptions} />
    </>
  );
};

export default App;
