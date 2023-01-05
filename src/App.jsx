import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Orders from "./pages/orders/Orders";
import NewOrder from "./pages/orders/NewOrder";
import OrderDetails from "./pages/orders/OrderDetails";
import Clients from "./pages/clients/Clients";
import NewClient from "./pages/clients/NewClient";
import ClientDetails from "./pages/clients/ClientDetails";
import BrandDetails from "./pages/brands/BrandDetails";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import Teams from "./pages/Teams";
import { Toaster } from "react-hot-toast";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import useAuth from "./hooks/useAuth";
import Summary from "./pages/Summary";

const toastOptions = {
  position: "bottom-center",
  duration: 5000,
  success: {
    className: "bg-green-400 text-white",
    iconTheme: {
      primary: "#fff",
      secondary: "#4ade80",
    },
  },
  error: {
    className: "bg-red-500 text-white",
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
    console.log();
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
            <Route index element={<Users />} />
            <Route path=":id" element={<UserProfile />} />
          </Route>
          <Route path="summary" element={<Summary />}>
            <Route path=":id" element={<Summary />} />
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
