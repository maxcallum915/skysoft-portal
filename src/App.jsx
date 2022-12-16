import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Orders from "./pages/orders/Orders";
import NewOrder from "./pages/orders/NewOrder";
import Clients from "./pages/clients/Clients";
import BrandDetail from "./pages/BrandDetail";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import OrderDetails from "./pages/orders/OrderDetails";
import ClientDetails from "./pages/clients/ClientDetails";
import NewClient from "./pages/clients/NewClient";
import Teams from "./pages/Teams";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Main />} />
          {/* <Route path="teams" element={<Teams />} /> */}
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
          <Route path="brandDetails" element={<BrandDetail />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};

export default App;
