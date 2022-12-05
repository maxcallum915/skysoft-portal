import logo from "../assets/logo.png";
import logoFull from "../assets/logo-full.png";
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineInboxStack,
  HiOutlineCube,
} from "react-icons/hi2";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

// const Sidebar = (props) => {
//   console.log(props);
//   return (
//     <aside className="fixed top-0 left-0 h-full max-h-screen w-72 bg-white p-4">
//       <div className="mb-5 flex items-center gap-2.5">
//         <img src={logo} alt="logo" className="w-12" />
//         <p className="text-xl font-semibold text-slate-700">Skysofttech</p>
//       </div>
//       <ul>
//         <li className="mb-3 flex cursor-pointer items-center gap-3 rounded-md py-2.5 px-3 font-semibold text-slate-700 hover:bg-slate-100">
//           <HiOutlineHome className="text-2xl" />
//           <span>Dashboard</span>
//         </li>
//         <li className="mb-3 flex cursor-pointer items-center gap-3 rounded-md py-2.5 px-3 font-semibold text-slate-700 hover:bg-slate-100">
//           <HiOutlineHome className="text-2xl" />
//           <span>Users</span>
//         </li>
//       </ul>
//     </aside>
//   );
// };

const SidebarLayout = () => {
  return (
    <Sidebar
      className="h-full min-h-screen p-3"
      backgroundColor="transparent"
      // rootStyles={{
      //   [`.${sidebarClasses.container}`]: {
      //     borderRight: "none",
      //   },
      // }}
    >
      <div className="mb-4 flex items-center gap-2.5">
        <img src={logo} alt="logo" className="w-12" />
        <p className="text-xl font-semibold text-slate-700">Skysofttech</p>
      </div>
      <Menu>
        <MenuItem
          active
          icon={<HiOutlineHome className="text-2xl" />}
          className="font-medium text-slate-700"
          routerLink={<Link to="/" />}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          icon={<HiOutlineUsers className="text-2xl" />}
          className="font-medium text-slate-700"
        >
          Users
        </MenuItem>
        <MenuItem
          icon={<HiOutlineUsers className="text-2xl" />}
          className="font-medium text-slate-700"
          routerLink={<Link to="/teams" />}
        >
          Teams
        </MenuItem>
        <MenuItem
          icon={<HiOutlineInboxStack className="text-2xl" />}
          className="font-medium text-slate-700"
          routerLink={<Link to="/projects" />}
        >
          Projects
        </MenuItem>
        <MenuItem
          icon={<HiOutlineCube className="text-2xl" />}
          className="font-medium text-slate-700"
        >
          Brands
        </MenuItem>
        {/* <SubMenu label="Users">
          <MenuItem>Production</MenuItem>
          <MenuItem>Line charts</MenuItem>
        </SubMenu> */}
      </Menu>
    </Sidebar>
  );
};

export default SidebarLayout;
