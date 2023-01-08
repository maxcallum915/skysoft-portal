import { Link, useMatch } from "react-router-dom";
import admin from "../assets/admin.png";
import {
  HiOutlineHome,
  HiOutlineBriefcase,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import {
  Sidebar,
  Menu,
  MenuItem,
  sidebarClasses,
  useProSidebar,
} from "react-pro-sidebar";
import useAuth from "../hooks/useAuth";

const styles = {
  sidebarWrapper: `h-full min-h-screen bg-white p-3 !border-r !border-r-slate-100`,
  logo: `mb-8 flex items-center gap-2.5`,
  logoImg: `w-14`,
  logoText: `text-xl font-semibold text-slate-900 capitalize`,
  link: `font-medium text-slate-400`,
  linkIcon: `text-2xl`,
};

const SidebarLayout = () => {
  const { collapsed } = useProSidebar();
  const { auth } = useAuth();
  return (
    <Sidebar
      defaultCollapsed
      className={styles.sidebarWrapper}
      backgroundColor="white"
      rootStyles={{
        position: "sticky",
        top: 0,
        [`.${sidebarClasses.container} .ps-menuitem-root`]: {
          marginBottom: "0.5rem",
        },
        [`.${sidebarClasses.container} .ps-menuitem-root:not(.ps-active):hover .ps-menu-button`]:
          {
            background: "#f1f5f9",
            color: "#0f172a",
          },
      }}
    >
      <div className={styles.logo}>
        <img
          src={
            auth?.role === "admin"
              ? admin
              : `http://localhost:8000/${auth?.company?.imgUrl}`
          }
          alt="logo"
          className={styles.logoImg}
        />
        <p className={styles.logoText}>
          {auth?.role === "admin" ? "Admin" : auth?.company?.title}
        </p>
      </div>
      <Menu
        menuItemStyles={{
          button: ({ active }) => {
            return {
              color: active && `#fff`,
              background: active && `linear-gradient(45deg,#3862e1,#019dff)`,
              borderRadius: `0.75rem`,
              paddingLeft: collapsed && `0.65rem`,
              transition: `padding-left 300ms ease-in-out`,
            };
          },
        }}
      >
        <MenuItem
          active={useMatch({ path: "/", end: true })}
          icon={<HiOutlineHome className={styles.linkIcon} />}
          className={styles.link}
          routerLink={<Link to="/" />}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          active={useMatch({ path: "/orders", end: true })}
          icon={<HiOutlineClipboardDocumentList className={styles.linkIcon} />}
          className={styles.link}
          routerLink={<Link to="/orders" />}
        >
          Orders
        </MenuItem>
        <MenuItem
          active={useMatch({ path: "/clients", end: true })}
          icon={<HiOutlineBriefcase className={styles.linkIcon} />}
          className={styles.link}
          routerLink={<Link to="/clients" />}
        >
          Clients
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarLayout;
