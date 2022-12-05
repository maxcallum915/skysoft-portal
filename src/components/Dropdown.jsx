import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  HiOutlinePencilSquare,
  HiOutlineArchiveBox,
  HiOutlineTrash,
} from "react-icons/hi2";

const styles = {
  menu: `relative`,
  menuButton: `flex items-center gap-2 rounded-md bg-slate-50 p-1.5 font-medium capitalize text-slate-700 outline-blue-700 hover:bg-secondary hover:text-white`,
  menuItems: `absolute right-0 z-50 mt-2 w-36 min-w-max rounded-md bg-white p-1 shadow-xl outline-blue-700`,
  menuItem: `flex w-full gap-2 rounded-md py-1.5 px-2 text-sm font-medium capitalize`,
};

// @param {string} [dropdownLabel] - Set dropdown label
// @param {React Component/Node} [dropdownIcon=<HiOutlineDotsVertical className="h-5 w-5" />] - Set dropdown icon
const Dropdown = ({ dropdownLabel, dropdownIcon }) => {
  return (
    <Menu as="div" className={styles.menu}>
      <Menu.Button
        className={`${styles.menuButton} ${dropdownLabel && "pl-3"}`}
      >
        {dropdownLabel && dropdownLabel}
        {dropdownIcon ? (
          dropdownIcon
        ) : (
          <HiOutlineDotsVertical className="h-5 w-5" />
        )}
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
  );
};

export default Dropdown;
