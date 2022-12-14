import { Outlet } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";
import Topbar from "../layouts/Topbar";

const Dashboard = () => {
  return (
    <>
      <div className="flex min-h-screen min-w-full bg-slate-50">
        <Sidebar />
        <div className="flex-1">
          <Topbar />
          <main className="p-5">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
