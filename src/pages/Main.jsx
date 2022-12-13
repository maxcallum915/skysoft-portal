import brand1 from "../assets/brand-logo-1.png";
import brand2 from "../assets/brand-logo-2.png";
import brand3 from "../assets/brand-logo-3.png";
import bronzeIcon from "../assets/package-icon-1.png";
import silverIcon from "../assets/package-icon-2.png";
import goldIcon from "../assets/package-icon-3.png";
import platinumIcon from "../assets/package-icon-4.png";
import diamondIcon from "../assets/package-icon-5.png";
import {
  HiCheck,
  HiChevronDown,
  HiXMark,
  HiOutlineArrowPath,
} from "react-icons/hi2";
import Box from "../components/Box";
import LineChart from "../components/LineChart";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

const Main = () => {
  const styles = {
    orderSummary: {
      wrapper: `mb-5 flex items-center gap-3`,
      icon: `h-12 w-12 shrink-0 rounded-lg p-2`,
      title: `text-xl font-semibold capitalize text-slate-900`,
      body: `flex flex-col justify-between gap-4 2xl:flex-row 2xl:items-end 2xl:gap-5`,
      textInfo: `mb-1 flex items-end gap-1.5`,
      projects: `text-3xl font-bold leading-none text-slate-900`,
      percentage: `font-medium text-slate-400`,
      amount: `text-lg font-semibold leading-none`,
      chart: `2xl:w-2/3`,
    },
    categoryCard: {
      wrapper: `mb-4 rounded-lg bg-white p-1.5 shadow-md`,
      accordionButton: {
        wrapper: `flex cursor-pointer select-none flex-col items-center gap-3 rounded-lg p-2 hover:bg-slate-100 2xl:flex-row`,
        titleWrapper: `flex w-full items-center gap-2 2xl:w-40`,
        icon: `h-14 w-14 shrink-0 object-contain`,
        title: `text-lg font-bold leading-tight capitalize text-slate-900`,
        subtitle: `font-semibold text-slate-400`,
        infoWrapper: `flex w-full flex-1 items-center justify-around gap-4 rounded-md text-center 2xl:justify-end`,
        infoTitle: `mb-1 text-xl font-bold leading-none text-secondary`,
        infoSubtitle: `text-xs font-medium capitalize text-slate-900`,
        chevron: `ml-auto transition-transform duration-300 2xl:ml-0`,
      },
      accordionPanel: {
        wrapper: `mt-5`,
        brandRow: `flex items-center gap-2`,
        brandIcon: `h-10 w-10 rounded-md bg-slate-100 p-0.5`,
        brandTitle: `font-semibold capitalize text-slate-900`,
        brandInfo: `ml-auto flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1 text-sm font-bold`,
        brandProjects: `text-slate-900 after:ml-2 after:content-['/']`,
        brandAmount: `text-secondary`,
      },
    },
  };
  const {
    orderSummary,
    categoryCard,
    categoryCard: { wrapper, accordionButton, accordionPanel },
  } = styles;

  return (
    <>
      <div className="flex flex-col items-start gap-5 xl:flex-row">
        <div className="w-full xl:w-2/3">
          <h4 className="mb-3 text-xl font-semibold capitalize text-slate-900">
            Orders Overview
          </h4>
          <div className="grid grid-cols-2 gap-5">
            <Box>
              <div className={orderSummary.wrapper}>
                <div
                  className={`${orderSummary.icon} bg-emerald-50 text-emerald-500`}
                >
                  <HiCheck className="h-full w-full" />
                </div>
                <span className={orderSummary.title}>Orders delivered</span>
              </div>
              <div className={orderSummary.body}>
                <div>
                  <div className={orderSummary.textInfo}>
                    <h5 className={orderSummary.projects}>58</h5>
                    <h6 className={orderSummary.percentage}>25%</h6>
                  </div>
                  <h6 className={`${orderSummary.amount} text-emerald-400`}>
                    $45.8k
                  </h6>
                </div>
                <div className={orderSummary.chart}>
                  <LineChart width="100%" height={115} tempProp="Delivered" />
                </div>
              </div>
            </Box>
            <Box>
              <div className={orderSummary.wrapper}>
                <div
                  className={`${orderSummary.icon} bg-amber-50 text-amber-500`}
                >
                  <HiOutlineArrowPath className="h-full w-full" />
                </div>
                <span className={orderSummary.title}>Orders in-process</span>
              </div>
              <div className={orderSummary.body}>
                <div>
                  <div className={orderSummary.textInfo}>
                    <h5 className={orderSummary.projects}>20</h5>
                    <h6 className={orderSummary.percentage}>18%</h6>
                  </div>
                  <h6 className={`${orderSummary.amount} text-amber-400`}>
                    $11.2k
                  </h6>
                </div>
                <div className={orderSummary.chart}>
                  <LineChart width="100%" height={115} tempProp="Delivered" />
                </div>
              </div>
            </Box>
            <Box>
              <div className={orderSummary.wrapper}>
                <div className={`${orderSummary.icon} bg-red-50 text-red-500`}>
                  <HiXMark className="h-full w-full" />
                </div>
                <span className={orderSummary.title}>Orders refunded</span>
              </div>
              <div className={orderSummary.body}>
                <div>
                  <div className={orderSummary.textInfo}>
                    <h5 className={orderSummary.projects}>5</h5>
                    <h6 className={orderSummary.percentage}>18%</h6>
                  </div>
                  <h6 className={`${orderSummary.amount} text-red-500`}>
                    $8.2k
                  </h6>
                </div>
                <div className={orderSummary.chart}>
                  <LineChart width="100%" height={115} tempProp="Delivered" />
                </div>
              </div>
            </Box>
            <Box>
              <div className={orderSummary.wrapper}>
                <div className={`${orderSummary.icon} bg-red-50 text-red-600`}>
                  <HiXMark className="h-full w-full" />
                </div>
                <span className={orderSummary.title}>Orders chargedback</span>
              </div>
              <div className={orderSummary.body}>
                <div>
                  <div className={orderSummary.textInfo}>
                    <h5 className={orderSummary.projects}>2</h5>
                    <h6 className={orderSummary.percentage}>4%</h6>
                  </div>
                  <h6 className={`${orderSummary.amount} text-red-600`}>
                    $4.5k
                  </h6>
                </div>
                <div className={orderSummary.chart}>
                  <LineChart width="100%" height={115} tempProp="Delivered" />
                </div>
              </div>
            </Box>
          </div>
        </div>
        <div className="w-full xl:w-1/3">
          <h4 className="mb-3 text-xl font-semibold capitalize text-slate-900">
            Category Wise Orders
          </h4>
          <div className={categoryCard.wrapper}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as="div"
                    className={`${accordionButton.wrapper} ${
                      open && "bg-slate-100"
                    }`}
                  >
                    <div className={accordionButton.titleWrapper}>
                      <img
                        src={diamondIcon}
                        alt="package icon"
                        className={accordionButton.icon}
                      />
                      <div>
                        <h5 className={accordionButton.title}>diamond</h5>
                        <h6 className={accordionButton.subtitle}>25%</h6>
                      </div>
                    </div>
                    <div className={accordionButton.infoWrapper}>
                      <ul>
                        <li className={accordionButton.infoTitle}>77</li>
                        <li className={accordionButton.infoSubtitle}>
                          Total Orders
                        </li>
                      </ul>
                      <ul>
                        <li className={accordionButton.infoTitle}>$45.5k</li>
                        <li className={accordionButton.infoSubtitle}>
                          Orders Worth
                        </li>
                      </ul>
                      <HiChevronDown
                        className={`${accordionButton.chevron} ${
                          open && "rotate-180"
                        }`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className={accordionPanel.wrapper}>
                    <div className={accordionPanel.brandRow}>
                      <div className={accordionPanel.brandIcon}>
                        <img
                          src={brand1}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className={accordionPanel.brandTitle}>
                        The Website Designs
                      </h5>
                      <ul className={accordionPanel.brandInfo}>
                        <li className={accordionPanel.brandProjects}>21</li>
                        <li className={accordionPanel.brandAmount}>$28.4k</li>
                      </ul>
                    </div>
                    <div className={`mt-3 ${accordionPanel.brandRow}`}>
                      <div className={accordionPanel.brandIcon}>
                        <img
                          src={brand2}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className={accordionPanel.brandTitle}>
                        web Districts
                      </h5>
                      <ul className={accordionPanel.brandInfo}>
                        <li className={accordionPanel.brandProjects}>5</li>
                        <li className={accordionPanel.brandAmount}>$4.2k</li>
                      </ul>
                    </div>
                    <div className={`mt-3 ${accordionPanel.brandRow}`}>
                      <div className={accordionPanel.brandIcon}>
                        <img
                          src={brand3}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className={accordionPanel.brandTitle}>
                        Website Design Engine
                      </h5>
                      <ul className={accordionPanel.brandInfo}>
                        <li className={accordionPanel.brandProjects}>68</li>
                        <li className={accordionPanel.brandAmount}>$56.1k</li>
                      </ul>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className={categoryCard.wrapper}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as="div"
                    className={`${accordionButton.wrapper} ${
                      open && "bg-slate-100"
                    }`}
                  >
                    <div className={accordionButton.titleWrapper}>
                      <img
                        src={platinumIcon}
                        alt="package icon"
                        className={accordionButton.icon}
                      />
                      <div>
                        <h5 className={accordionButton.title}>platinum</h5>
                        <h6 className={accordionButton.subtitle}>10%</h6>
                      </div>
                    </div>
                    <div className={accordionButton.infoWrapper}>
                      <ul>
                        <li className={accordionButton.infoTitle}>77</li>
                        <li className={accordionButton.infoSubtitle}>
                          Total Orders
                        </li>
                      </ul>
                      <ul>
                        <li className={accordionButton.infoTitle}>$45.5k</li>
                        <li className={accordionButton.infoSubtitle}>
                          Orders Worth
                        </li>
                      </ul>
                      <HiChevronDown
                        className={`${accordionButton.chevron} ${
                          open && "rotate-180"
                        }`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className={accordionPanel.wrapper}>
                    <div className={accordionPanel.brandRow}>
                      <div className={accordionPanel.brandIcon}>
                        <img
                          src={brand1}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className={accordionPanel.brandTitle}>
                        The Website Designs
                      </h5>
                      <ul className={accordionPanel.brandInfo}>
                        <li className={accordionPanel.brandProjects}>21</li>
                        <li className={accordionPanel.brandAmount}>$28.4k</li>
                      </ul>
                    </div>
                    <div className={`mt-3 ${accordionPanel.brandRow}`}>
                      <div className={accordionPanel.brandIcon}>
                        <img
                          src={brand2}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className={accordionPanel.brandTitle}>
                        web Districts
                      </h5>
                      <ul className={accordionPanel.brandInfo}>
                        <li className={accordionPanel.brandProjects}>5</li>
                        <li className={accordionPanel.brandAmount}>$4.2k</li>
                      </ul>
                    </div>
                    <div className={`mt-3 ${accordionPanel.brandRow}`}>
                      <div className={accordionPanel.brandIcon}>
                        <img
                          src={brand3}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className={accordionPanel.brandTitle}>
                        Website Design Engine
                      </h5>
                      <ul className={accordionPanel.brandInfo}>
                        <li className={accordionPanel.brandProjects}>68</li>
                        <li className={accordionPanel.brandAmount}>$56.1k</li>
                      </ul>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className={categoryCard.wrapper}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as="div"
                    className={`${accordionButton.wrapper} ${
                      open && "bg-slate-100"
                    }`}
                  >
                    <div className={accordionButton.titleWrapper}>
                      <img
                        src={goldIcon}
                        alt="package icon"
                        className={accordionButton.icon}
                      />
                      <div>
                        <h5 className={accordionButton.title}>gold</h5>
                        <h6 className={accordionButton.subtitle}>34%</h6>
                      </div>
                    </div>
                    <div className={accordionButton.infoWrapper}>
                      <ul>
                        <li className={accordionButton.infoTitle}>77</li>
                        <li className={accordionButton.infoSubtitle}>
                          Total Orders
                        </li>
                      </ul>
                      <ul>
                        <li className={accordionButton.infoTitle}>$45.5k</li>
                        <li className={accordionButton.infoSubtitle}>
                          Orders Worth
                        </li>
                      </ul>
                      <HiChevronDown
                        className={`${accordionButton.chevron} ${
                          open && "rotate-180"
                        }`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className={accordionPanel.wrapper}>
                    <div className={accordionPanel.brandRow}>
                      <div className={accordionPanel.brandIcon}>
                        <img
                          src={brand1}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className={accordionPanel.brandTitle}>
                        The Website Designs
                      </h5>
                      <ul className={accordionPanel.brandInfo}>
                        <li className={accordionPanel.brandProjects}>21</li>
                        <li className={accordionPanel.brandAmount}>$28.4k</li>
                      </ul>
                    </div>
                    <div className={`mt-3 ${accordionPanel.brandRow}`}>
                      <div className={accordionPanel.brandIcon}>
                        <img
                          src={brand2}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className={accordionPanel.brandTitle}>
                        web Districts
                      </h5>
                      <ul className={accordionPanel.brandInfo}>
                        <li className={accordionPanel.brandProjects}>5</li>
                        <li className={accordionPanel.brandAmount}>$4.2k</li>
                      </ul>
                    </div>
                    <div className={`mt-3 ${accordionPanel.brandRow}`}>
                      <div className={accordionPanel.brandIcon}>
                        <img
                          src={brand3}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className={accordionPanel.brandTitle}>
                        Website Design Engine
                      </h5>
                      <ul className={accordionPanel.brandInfo}>
                        <li className={accordionPanel.brandProjects}>68</li>
                        <li className={accordionPanel.brandAmount}>$56.1k</li>
                      </ul>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className={categoryCard.wrapper}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as="div"
                    className={`${accordionButton.wrapper} ${
                      open && "bg-slate-100"
                    }`}
                  >
                    <div className={accordionButton.titleWrapper}>
                      <img
                        src={silverIcon}
                        alt="package icon"
                        className={accordionButton.icon}
                      />
                      <div>
                        <h5 className={accordionButton.title}>silver</h5>
                        <h6 className={accordionButton.subtitle}>9%</h6>
                      </div>
                    </div>
                    <div className={accordionButton.infoWrapper}>
                      <ul>
                        <li className={accordionButton.infoTitle}>77</li>
                        <li className={accordionButton.infoSubtitle}>
                          Total Orders
                        </li>
                      </ul>
                      <ul>
                        <li className={accordionButton.infoTitle}>$45.5k</li>
                        <li className={accordionButton.infoSubtitle}>
                          Orders Worth
                        </li>
                      </ul>
                      <HiChevronDown
                        className={`${accordionButton.chevron} ${
                          open && "rotate-180"
                        }`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className={accordionPanel.wrapper}>
                    <div className={accordionPanel.brandRow}>
                      <div className={accordionPanel.brandIcon}>
                        <img
                          src={brand1}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className={accordionPanel.brandTitle}>
                        The Website Designs
                      </h5>
                      <ul className={accordionPanel.brandInfo}>
                        <li className={accordionPanel.brandProjects}>21</li>
                        <li className={accordionPanel.brandAmount}>$28.4k</li>
                      </ul>
                    </div>
                    <div className={`mt-3 ${accordionPanel.brandRow}`}>
                      <div className={accordionPanel.brandIcon}>
                        <img
                          src={brand2}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className={accordionPanel.brandTitle}>
                        web Districts
                      </h5>
                      <ul className={accordionPanel.brandInfo}>
                        <li className={accordionPanel.brandProjects}>5</li>
                        <li className={accordionPanel.brandAmount}>$4.2k</li>
                      </ul>
                    </div>
                    <div className={`mt-3 ${accordionPanel.brandRow}`}>
                      <div className={accordionPanel.brandIcon}>
                        <img
                          src={brand3}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className={accordionPanel.brandTitle}>
                        Website Design Engine
                      </h5>
                      <ul className={accordionPanel.brandInfo}>
                        <li className={accordionPanel.brandProjects}>68</li>
                        <li className={accordionPanel.brandAmount}>$56.1k</li>
                      </ul>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className={categoryCard.wrapper}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as="div"
                    className={`${accordionButton.wrapper} ${
                      open && "bg-slate-100"
                    }`}
                  >
                    <div className={accordionButton.titleWrapper}>
                      <img
                        src={bronzeIcon}
                        alt="package icon"
                        className={accordionButton.icon}
                      />
                      <div>
                        <h5 className={accordionButton.title}>Bronze</h5>
                        <h6 className={accordionButton.subtitle}>22%</h6>
                      </div>
                    </div>
                    <div className={accordionButton.infoWrapper}>
                      <ul>
                        <li className={accordionButton.infoTitle}>77</li>
                        <li className={accordionButton.infoSubtitle}>
                          Total Orders
                        </li>
                      </ul>
                      <ul>
                        <li className={accordionButton.infoTitle}>$45.5k</li>
                        <li className={accordionButton.infoSubtitle}>
                          Orders Worth
                        </li>
                      </ul>
                      <HiChevronDown
                        className={`${accordionButton.chevron} ${
                          open && "rotate-180"
                        }`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className={accordionPanel.wrapper}>
                    <div className={accordionPanel.brandRow}>
                      <div className={accordionPanel.brandIcon}>
                        <img
                          src={brand1}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className={accordionPanel.brandTitle}>
                        The Website Designs
                      </h5>
                      <ul className={accordionPanel.brandInfo}>
                        <li className={accordionPanel.brandProjects}>21</li>
                        <li className={accordionPanel.brandAmount}>$28.4k</li>
                      </ul>
                    </div>
                    <div className={`mt-3 ${accordionPanel.brandRow}`}>
                      <div className={accordionPanel.brandIcon}>
                        <img
                          src={brand2}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className={accordionPanel.brandTitle}>
                        web Districts
                      </h5>
                      <ul className={accordionPanel.brandInfo}>
                        <li className={accordionPanel.brandProjects}>5</li>
                        <li className={accordionPanel.brandAmount}>$4.2k</li>
                      </ul>
                    </div>
                    <div className={`mt-3 ${accordionPanel.brandRow}`}>
                      <div className={accordionPanel.brandIcon}>
                        <img
                          src={brand3}
                          alt="brand icon"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h5 className={accordionPanel.brandTitle}>
                        Website Design Engine
                      </h5>
                      <ul className={accordionPanel.brandInfo}>
                        <li className={accordionPanel.brandProjects}>68</li>
                        <li className={accordionPanel.brandAmount}>$56.1k</li>
                      </ul>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Box>
          <div className="mb-4 ml-2 grid grid-cols-5 items-end gap-8">
            <div>
              <h5 className="mb-1 text-lg font-semibold capitalize">Brand</h5>
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
          <Link
            to="/brandDetails"
            state={{ brandIcon: brand1, brandName: "The Website Designs" }}
          >
            <div className="mb-2 grid grid-cols-5 items-center gap-8 rounded-md bg-slate-50 p-2">
              <div className="flex items-center gap-2">
                <img
                  src={brand1}
                  alt="brand icon"
                  className="h-8 w-8 rounded-md bg-white object-contain p-0.5"
                />
                <h5 className="mb-1 font-medium capitalize">
                  The website designs
                </h5>
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
          </Link>
          <Link
            to="/brandDetails"
            state={{ brandIcon: brand2, brandName: "Web Districts" }}
          >
            <div className="mb-2 grid grid-cols-5 items-center gap-8 rounded-md bg-slate-50 p-2">
              <div className="flex items-center gap-2">
                <img
                  src={brand2}
                  alt="brand icon"
                  className="h-8 w-8 rounded-md bg-white object-contain p-0.5"
                />
                <h5 className="mb-1 font-medium capitalize">Web districts</h5>
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
          </Link>
          <Link
            to="/brandDetails"
            state={{ brandIcon: brand3, brandName: "Website Design Engine" }}
          >
            <div className="grid grid-cols-5 items-center gap-8 rounded-md bg-slate-50 p-2">
              <div className="flex items-center gap-2">
                <img
                  src={brand3}
                  alt="brand icon"
                  className="h-8 w-8 rounded-md bg-white object-contain p-0.5"
                />
                <h5 className="mb-1 font-medium capitalize">
                  website design engine
                </h5>
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
          </Link>
        </Box>
      </div>
    </>
  );
};

export default Main;
