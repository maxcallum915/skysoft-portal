import companyLogo from "./assets/logo.png";
import brand1 from "./assets/brand-logo-1.png";
import brand2 from "./assets/brand-logo-2.png";
import brand3 from "./assets/brand-logo-3.png";
import packageIcon1 from "./assets/package-icon-1.png";
import packageIcon2 from "./assets/package-icon-2.png";
import packageIcon3 from "./assets/package-icon-3.png";
import packageIcon4 from "./assets/package-icon-4.png";
import packageIcon5 from "./assets/package-icon-5.png";
import projectType1 from "./assets/project-type-1.png";
import projectType2 from "./assets/project-type-2.png";
import projectType3 from "./assets/project-type-3.png";
import projectType4 from "./assets/project-type-4.png";

const companiesData = [
  {
    id: 1,
    title: `Skysosfttech`,
    icon: companyLogo,
    date: `01-01-2023`,
  },
];

const brandsData = [
  {
    id: 1,
    title: `The Website Designs`,
    icon: brand1,
    company: `Skysosfttech`,
  },
  {
    id: 2,
    title: `Web Districts`,
    icon: brand2,
    company: `Skysosfttech`,
  },
  {
    id: 3,
    title: `Website Design Engine`,
    icon: brand3,
    company: `Skysosfttech`,
  },
];

const categoriesData = [
  {
    id: "1",
    title: "Bronze",
    icon: packageIcon1,
    minValue: 0,
    maxValue: 0,
  },
  {
    id: "2",
    title: "Silver",
    icon: packageIcon2,
    minValue: 0,
    maxValue: 0,
  },
  {
    id: "3",
    title: "Gold",
    icon: packageIcon3,
    minValue: 0,
    maxValue: 0,
  },
  {
    id: "4",
    title: "Platinum",
    icon: packageIcon4,
    minValue: 0,
    maxValue: 0,
  },
  {
    id: "5",
    title: "Diamond",
    icon: packageIcon5,
    minValue: 0,
    maxValue: 0,
  },
];

const statusesData = [
  {
    id: 1,
    title: "in process",
    className: "warning",
    outlineVariant: false,
  },
  {
    id: 2,
    title: "unresponsive",
    className: "warning",
    outlineVariant: false,
  },
  {
    id: 3,
    title: "on hold",
    className: "warning",
    outlineVariant: false,
  },
  {
    id: 4,
    title: "delivered",
    className: "success",
    outlineVariant: false,
  },
  {
    id: 5,
    title: "chargeback",
    className: "danger",
    outlineVariant: false,
  },
  {
    id: 6,
    title: "refunded",
    className: "danger",
    outlineVariant: false,
  },
  {
    id: 7,
    title: "dead",
    className: "danger",
    outlineVariant: false,
  },
];

const stagesData = [
  {
    id: 1,
    title: `Welcome Message Sent`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 2,
    title: `Brief Sent & Waiting for Response`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 3,
    title: `Brief Submitted`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 4,
    title: `Initial Mockup / Test Link - (Home Page)`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 5,
    title: `Redraw Mockup / Test Link`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 6,
    title: `Revision in Mockup / Test link - (Home Page)`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 7,
    title: `Mockup to HTML`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 8,
    title: `Mockup to WP`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 9,
    title: `Inner Pages - Design`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 10,
    title: `Inner Pages - Test Link`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 11,
    title: `Revision Inner Pages - Design`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 12,
    title: `Revision - Inner Pages - Test Link`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 13,
    title: `Inner Pages Design to HTML`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 14,
    title: `Logo Uploading`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 15,
    title: `Product Uploading`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 16,
    title: `Content Uploading`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 17,
    title: `Custom Functionality`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 18,
    title: `Revisions`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 19,
    title: `Backend`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 20,
    title: `Merchant integration`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 21,
    title: `Dropshipping integration`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 22,
    title: `Final Files`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 23,
    title: `Live`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 24,
    title: `CMS video + PDF manual`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 25,
    title: `Admin Credentials`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 26,
    title: `ADA / DMCA integration`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 27,
    title: `Mobile Responsive`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
  {
    id: 28,
    title: `Maintenance`,
    className: `warning`,
    outlineVariant: false,
    percentage: 0,
  },
];

const healthData = [
  {
    id: 1,
    title: `bad`,
    className: `danger`,
    outlineVariant: false,
  },
  {
    id: 2,
    title: `average`,
    className: `info`,
    outlineVariant: false,
  },
  {
    id: 3,
    title: `good`,
    className: `success`,
    outlineVariant: false,
  },
  {
    id: 4,
    title: `new`,
    className: `success`,
    outlineVariant: false,
  },
];

const orderTypeData = [
  {
    id: 1,
    title: `custom`,
    icon: projectType1,
  },
  {
    id: 2,
    title: `wordpress`,
    icon: projectType2,
  },
  {
    id: 3,
    title: `shopify`,
    icon: projectType3,
  },
  {
    id: 4,
    title: `outsource`,
    icon: projectType4,
  },
];

export {
  companiesData,
  brandsData,
  categoriesData,
  statusesData,
  stagesData,
  healthData,
  orderTypeData,
};
