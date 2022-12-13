import Box from "../components/Box";
import brandImg from "../assets/brand-logo-1.png";
import brand1 from "../assets/brand-logo-1.png";
import brand2 from "../assets/brand-logo-2.png";
import brand3 from "../assets/brand-logo-3.png";
import bronzeIcon from "../assets/package-icon-1.png";
import silverIcon from "../assets/package-icon-2.png";
import goldIcon from "../assets/package-icon-3.png";
import platinumIcon from "../assets/package-icon-4.png";
import diamondIcon from "../assets/package-icon-5.png";
import { useLocation } from "react-router-dom";

const BrandDetail = (props) => {
  const { state } = useLocation();
  console.log(location);
  return (
    <>
      <Box>
        <div className="flex items-center gap-3">
          <img
            src={state.brandIcon}
            alt="brand logo"
            className="h-20 w-20 rounded-md bg-slate-50 object-contain p-1"
          />
          <div>
            <h3 className="text-xl font-semibold capitalize text-slate-900">
              {state.brandName}
            </h3>
            <h4 className="text-sm text-slate-400">Created on 01-01-2023</h4>
          </div>
        </div>
        <div className="mb-4 ml-2 grid grid-cols-5 items-end gap-8">
          <div>
            <h5 className="mb-1 text-lg font-semibold capitalize">Category</h5>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="mb-1 text-lg font-semibold capitalize text-emerald-500">
              Delivered
            </h5>
            <ul className="flex w-full items-center justify-between gap-2.5 rounded-md bg-emerald-50 py-1 px-2 text-center font-medium capitalize text-emerald-700">
              <li className="flex-1 text-sm capitalize">projects</li>
              <li className="flex-1 text-sm capitalize">Percentage</li>
              <li className="flex-1 text-sm capitalize">Worth</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="mb-1 text-lg font-semibold capitalize text-amber-500">
              In Process
            </h5>
            <ul className="flex w-full items-center justify-between gap-2.5 rounded-md bg-amber-50 py-1 px-2 text-center font-medium capitalize text-amber-700">
              <li className="flex-1 text-sm capitalize">projects</li>
              <li className="flex-1 text-sm capitalize">Percentage</li>
              <li className="flex-1 text-sm capitalize">Worth</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="mb-1 text-lg font-semibold capitalize text-red-500">
              Refund
            </h5>
            <ul className="flex w-full items-center justify-between gap-2.5 rounded-md bg-red-50 py-1 px-2 text-center font-medium capitalize text-red-700">
              <li className="flex-1 text-sm capitalize">projects</li>
              <li className="flex-1 text-sm capitalize">Percentage</li>
              <li className="flex-1 text-sm capitalize">Worth</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="mb-1 text-lg font-semibold capitalize text-red-700">
              Chargeback
            </h5>
            <ul className="flex w-full items-center justify-between gap-2.5 rounded-md bg-red-50 py-1 px-2 text-center font-medium capitalize text-red-800">
              <li className="flex-1 text-sm capitalize">projects</li>
              <li className="flex-1 text-sm capitalize">Percentage</li>
              <li className="flex-1 text-sm capitalize">Worth</li>
            </ul>
          </div>
        </div>
        <div className="mb-2 grid grid-cols-5 items-center gap-8 rounded-md bg-slate-50 p-2">
          <div className="flex items-center gap-2">
            <img
              src={bronzeIcon}
              alt="brand icon"
              className="h-8 w-8 rounded-md bg-white object-contain p-0.5"
            />
            <h5 className="mb-1 font-medium capitalize">Bronze</h5>
          </div>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
        </div>
        <div className="mb-2 grid grid-cols-5 items-center gap-8 rounded-md bg-slate-50 p-2">
          <div className="flex items-center gap-2">
            <img
              src={silverIcon}
              alt="brand icon"
              className="h-8 w-8 rounded-md bg-white object-contain p-0.5"
            />
            <h5 className="mb-1 font-medium capitalize">Silver</h5>
          </div>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
        </div>
        <div className="grid grid-cols-5 items-center gap-8 rounded-md bg-slate-50 p-2">
          <div className="flex items-center gap-2">
            <img
              src={goldIcon}
              alt="brand icon"
              className="h-8 w-8 rounded-md bg-white object-contain p-0.5"
            />
            <h5 className="mb-1 font-medium capitalize">Gold</h5>
          </div>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
        </div>
        <div className="grid grid-cols-5 items-center gap-8 rounded-md bg-slate-50 p-2">
          <div className="flex items-center gap-2">
            <img
              src={platinumIcon}
              alt="brand icon"
              className="h-8 w-8 rounded-md bg-white object-contain p-0.5"
            />
            <h5 className="mb-1 font-medium capitalize">Platinum</h5>
          </div>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
        </div>
        <div className="grid grid-cols-5 items-center gap-8 rounded-md bg-slate-50 p-2">
          <div className="flex items-center gap-2">
            <img
              src={diamondIcon}
              alt="brand icon"
              className="h-8 w-8 rounded-md bg-white object-contain p-0.5"
            />
            <h5 className="mb-1 font-medium capitalize">Diamond</h5>
          </div>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
          <ul className="flex w-full items-center justify-between gap-2.5 rounded-md py-1 px-2 text-center font-medium">
            <li className="flex-1 text-sm capitalize">110</li>
            <li className="flex-1 text-sm capitalize">25%</li>
            <li className="flex-1 text-sm capitalize">$45.5k</li>
          </ul>
        </div>
      </Box>
    </>
  );
};

export default BrandDetail;
