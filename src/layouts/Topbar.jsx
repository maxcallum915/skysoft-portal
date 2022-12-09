import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  HiOutlineArchiveBox,
  HiOutlinePencilSquare,
  HiOutlineTrash,
  HiBars3CenterLeft,
} from "react-icons/hi2";
import Avatar from "../components/Avatar";

const styles = {
  menu: `relative`,
  menuButton: `flex items-center gap-2 rounded-full font-medium capitalize text-slate-700 outline-blue-700 hover:bg-secondary hover:text-white ml-auto`,
  menuItems: `absolute right-0 mt-1 w-36 min-w-max rounded-md bg-white p-1 shadow-xl outline-blue-700`,
  menuItem: `flex w-full gap-2 rounded-md py-1.5 px-2 text-sm font-medium capitalize`,
};

const Topbar = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center gap-3 bg-white p-3">
      {/* <button>
        <HiBars3CenterLeft className="h-10 w-10 rounded-md bg-slate-100 p-1 text-slate-900" />
      </button> */}
      <h5 className="mr-auto text-xl font-medium capitalize text-slate-900">
        Hi John Doe! 👋
      </h5>
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
                <button
                  className={`${styles.menuItem} ${
                    active && "bg-secondary text-white"
                  }`}
                >
                  <HiOutlinePencilSquare className="h-5 w-5" />
                  edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${styles.menuItem} ${
                    active && "bg-secondary text-white"
                  }`}
                >
                  <HiOutlineArchiveBox className="h-5 w-5" />
                  archive
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${styles.menuItem} ${
                    active && "bg-secondary text-white"
                  }`}
                >
                  <HiOutlineTrash className="h-5 w-5" />
                  delete
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Topbar;
