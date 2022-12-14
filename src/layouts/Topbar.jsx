import {
  HiArrowRightOnRectangle,
  HiOutlineBars3BottomLeft,
  HiOutlineCog8Tooth,
} from "react-icons/hi2";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useProSidebar } from "react-pro-sidebar";
import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";

const styles = {
  topbar: `sticky top-0 z-50 flex items-center gap-3 border-b border-b-slate-100 bg-white p-3`,
  hamburger: `h-10 w-10 rounded-md bg-slate-100 p-1`,
  hamburgerActive: `bg-gradient-to-l from-primary to-secondary text-white`,
  title: `mr-auto text-xl font-semibold capitalize text-slate-900`,
  menu: `relative`,
  menuButton: `flex items-center gap-2 rounded-full font-medium capitalize text-slate-700 outline-blue-700 hover:bg-secondary hover:text-white ml-auto`,
  menuItems: `absolute right-0 mt-1 w-36 min-w-max rounded-md bg-white p-1 shadow-xl outline-blue-700`,
  menuItem: `flex w-full gap-2 rounded-md py-1.5 px-2 text-sm font-medium capitalize`,
};

const Topbar = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  return (
    <div className={styles.topbar}>
      <button
        onClick={() => collapseSidebar()}
        className={`${styles.hamburger} ${collapsed && styles.hamburgerActive}`}
      >
        <HiOutlineBars3BottomLeft className="h-full w-full" />
      </button>
      <h5 className={styles.title}>Hi John Doe! 👋</h5>
      <Menu as="div" className={styles.menu}>
        <Menu.Button className={styles.menuButton}>
          <Avatar
            icon="https://xsgames.co/randomusers/avatar.php?g=male"
            rounded
          />
          {/* {dropdownLabel && dropdownLabel} */}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={styles.menuItems}>
            <Menu.Item>
              {({ active }) => (
                <Link to="settings">
                  <button
                    className={`${styles.menuItem} ${
                      active && "bg-secondary text-white"
                    }`}
                  >
                    <HiOutlineCog8Tooth className="h-5 w-5" />
                    Settings
                  </button>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to="login">
                  <button
                    className={`${styles.menuItem} ${
                      active && "bg-secondary text-white"
                    }`}
                  >
                    <HiArrowRightOnRectangle className="h-5 w-5" />
                    Logout
                  </button>
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Topbar;
