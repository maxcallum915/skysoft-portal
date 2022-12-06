import Sidebar from "../layouts/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../layouts/Topbar";
const Dashboard = () => {
  return (
    <>
      <div className="flex min-h-screen min-w-full items-start bg-slate-100">
        <Sidebar />
        <main className="flex-1 p-5">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
