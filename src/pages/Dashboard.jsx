import Sidebar from "../layouts/Sidebar";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <div className="flex min-h-screen min-w-full items-start bg-slate-100">
        <Sidebar />
        {/* Topbar */}
        <main className="flex-1 p-5">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
