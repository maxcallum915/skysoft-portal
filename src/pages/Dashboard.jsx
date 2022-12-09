import Sidebar from "../layouts/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../layouts/Topbar";
const Dashboard = () => {
  return (
    <>
      <div className="flex min-h-screen min-w-full bg-slate-100">
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
