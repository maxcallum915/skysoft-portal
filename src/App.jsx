import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Teams from "./pages/Teams";
import Projects from "./pages/Projects";
import Main from "./pages/Main";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Main />} />
          <Route path="teams" element={<Teams />} />
          <Route path="projects" element={<Projects />} />
          <Route path="users/">
            <Route index element={<Users />} />
            <Route path=":id" element={<UserProfile />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};

export default App;
