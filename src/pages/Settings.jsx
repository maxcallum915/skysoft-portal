import { Routes, Link, Route, useLocation } from "react-router-dom";
import Companies from "./admin-settings/Companies";
import Brands from "./admin-settings/Brands";
import Categories from "./admin-settings/Categories";
import Statuses from "./admin-settings/Statuses";
import Stages from "./admin-settings/Stages";
import OrderHealth from "./admin-settings/OrderHealth";
import OrderTypes from "./admin-settings/OrderTypes";
import Users from "./admin-settings/Users";

const styles = {
  tabs: {
    tabList: `mb-3 flex gap-2 rounded-xl bg-white p-1.5 border border-slate-200`,
    tab: `rounded-lg py-2 px-3 font-medium ring-white ring-opacity-20 ring-offset-2 ring-offset-blue-300 focus:outline-none focus:ring-2`,
    tabDefault: `text-slate-700 hover:bg-slate-100 hover:text-slate-900`,
    tabSelected: `bg-gradient-to-l from-primary to-secondary text-white shadow-md`,
  },
};
const { tabs } = styles;

const Settings = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className={tabs.tabList}>
        <Link
          to={"companies"}
          className={`${tabs.tab} ${
            pathname.includes("companies") ? tabs.tabSelected : tabs.tabDefault
          }`}
        >
          Companies
        </Link>
        <Link
          to={"brands"}
          className={`${tabs.tab} ${
            pathname.includes("brands") ? tabs.tabSelected : tabs.tabDefault
          }`}
        >
          Brands
        </Link>
        <Link
          to={"categories"}
          className={`${tabs.tab} ${
            pathname.includes("categories") ? tabs.tabSelected : tabs.tabDefault
          }`}
        >
          Categories
        </Link>
        <Link
          to={"statuses"}
          className={`${tabs.tab} ${
            pathname.includes("statuses") ? tabs.tabSelected : tabs.tabDefault
          }`}
        >
          Statuses
        </Link>
        <Link
          to={"stages"}
          className={`${tabs.tab} ${
            pathname.includes("stages") ? tabs.tabSelected : tabs.tabDefault
          }`}
        >
          Stages
        </Link>
        <Link
          to={"order-health"}
          className={`${tabs.tab} ${
            pathname.includes("order-health")
              ? tabs.tabSelected
              : tabs.tabDefault
          }`}
        >
          Order Health
        </Link>
        <Link
          to={"order-types"}
          className={`${tabs.tab} ${
            pathname.includes("order-types")
              ? tabs.tabSelected
              : tabs.tabDefault
          }`}
        >
          Order Types
        </Link>
        <Link
          to={"users"}
          className={`${tabs.tab} ${
            pathname.includes("users") ? tabs.tabSelected : tabs.tabDefault
          }`}
        >
          Users
        </Link>
      </div>
      <Routes>
        <Route path="order-health" element={<OrderHealth />} />
        <Route path="order-types" element={<OrderTypes />} />
        <Route path="stages" element={<Stages />} />
        <Route path="statuses" element={<Statuses />} />
        <Route path="categories" element={<Categories />} />
        <Route path="brands" element={<Brands />} />
        <Route path="companies" element={<Companies />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </>
  );
};

export default Settings;
