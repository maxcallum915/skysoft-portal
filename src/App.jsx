import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Teams from "./pages/Teams";
import Orders from "./pages/Orders";
import Main from "./pages/Main";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import Clients from "./pages/Clients";
import BrandDetail from "./pages/BrandDetail";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Main />} />
          {/* <Route path="teams" element={<Teams />} /> */}
          <Route path="orders" element={<Orders />} />
          <Route path="clients" element={<Clients />} />
          <Route path="users/">
            <Route index element={<Users />} />
            <Route path=":id" element={<UserProfile />} />
          </Route>
          <Route path="brandDetails" element={<BrandDetail />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};

export default App;
