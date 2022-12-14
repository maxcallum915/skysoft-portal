import logo from "../assets/logo.png";
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import {
  Sidebar,
  Menu,
  MenuItem,
  sidebarClasses,
  useProSidebar,
} from "react-pro-sidebar";
import { Link, useMatch } from "react-router-dom";

const styles = {
  sidebarWrapper: `h-full min-h-screen bg-white p-3 !border-r !border-r-slate-100`,
  logo: `mb-8 flex items-center gap-2.5`,
  logoImg: `w-14`,
  logoText: `text-xl font-semibold text-slate-900`,
  link: `font-medium text-slate-400`,
  linkIcon: `text-2xl`,
};

const SidebarLayout = () => {
  const { collapsed } = useProSidebar();
  return (
    <Sidebar
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
        <img src={logo} alt="logo" className={styles.logoImg} />
        <p className={styles.logoText}>Skysofttech</p>
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
        {/* <MenuItem
          active={useMatch({ path: "/users", end: true })}
          icon={<HiOutlineUsers className={styles.linkIcon} />}
          className={styles.link}
          routerLink={<Link to="/users/1" />}
        >
          Users
        </MenuItem> */}
        {/* <MenuItem
          active={useMatch({ path: "/teams", end: true })}
          icon={<HiOutlineUserGroup className={styles.linkIcon} />}
          className={styles.link}
          routerLink={<Link to="/teams" />}
        >
          Teams
        </MenuItem> */}
        <MenuItem
          active={useMatch({ path: "/orders", end: true })}
          icon={<HiOutlineClipboardDocumentList className={styles.linkIcon} />}
          className={styles.link}
          routerLink={<Link to="/orders" />}
        >
          Orders
        </MenuItem>
        {/* <MenuItem
          active={useMatch({ path: "/brands", end: true })}
          icon={<HiOutlineCurrencyDollar className={styles.linkIcon} />}
          className={styles.link}
        >
          Brands
        </MenuItem> */}
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
