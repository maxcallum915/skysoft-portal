import { useLocation } from "react-router-dom";
import bronzeIcon from "../assets/package-icon-1.png";
import silverIcon from "../assets/package-icon-2.png";
import goldIcon from "../assets/package-icon-3.png";
import platinumIcon from "../assets/package-icon-4.png";
import diamondIcon from "../assets/package-icon-5.png";
import Box from "../components/Box";

const styles = {
  brand: {
    wrapper: `mb-5 flex items-center gap-3 capitalize`,
    logo: `h-20 w-20 shrink-0 rounded-md bg-slate-50 object-contain p-1`,
    title: `text-xl font-semibold text-slate-900`,
    subtitle: `text-sm text-slate-400`,
  },
  statusTable: {
    row: `grid grid-cols-5 gap-8`,
    column: `flex items-center capitalize`,
    columnCells: `flex w-full items-center justify-between gap-2.5 py-1 px-2 text-center font-medium`,
    columnSpan: `flex-1 text-sm`,
    icon: `h-8 w-8 rounded-md bg-white object-contain p-0.5`,
    header: {
      row: `mb-4 items-end`,
      column: `flex-col gap-1`,
      columnTitle: `text-lg font-semibold`,
    },
    body: {
      row: `mt-2.5 items-center rounded-md bg-slate-50 p-2 hover:bg-slate-100`,
    },
  },
};
const { brand, statusTable } = styles;

const BrandDetail = () => {
  const { state } = useLocation();
  return (
    <>
      <Box>
        <div className={brand.wrapper}>
          <img src={state.brandIcon} alt="brand logo" className={brand.logo} />
          <div>
            <h3 className={brand.title}>{state.brandName}</h3>
            <h4 className={brand.subtitle}>Created on 01-01-2023</h4>
          </div>
        </div>
        <div className={`${statusTable.row} ${statusTable.header.row}`}>
          <div className={statusTable.column}>
            <h5 className={statusTable.header.columnTitle}>Category</h5>
          </div>
          <div className={`${statusTable.column} ${statusTable.header.column}`}>
            <h5
              className={`${statusTable.header.columnTitle} text-emerald-500`}
            >
              Delivered
            </h5>
            <ul
              className={`${statusTable.columnCells} rounded-md bg-emerald-50 text-emerald-700`}
            >
              <li className={statusTable.columnSpan}>orders</li>
              <li className={statusTable.columnSpan}>Percentage</li>
              <li className={statusTable.columnSpan}>Worth</li>
            </ul>
          </div>
          <div className={`${statusTable.column} ${statusTable.header.column}`}>
            <h5 className={`${statusTable.header.columnTitle} text-amber-500`}>
              In Process
            </h5>
            <ul
              className={`${statusTable.columnCells} rounded-md bg-amber-50 text-amber-700`}
            >
              <li className={statusTable.columnSpan}>orders</li>
              <li className={statusTable.columnSpan}>Percentage</li>
              <li className={statusTable.columnSpan}>Worth</li>
            </ul>
          </div>
          <div className={`${statusTable.column} ${statusTable.header.column}`}>
            <h5 className={`${statusTable.header.columnTitle} text-red-500`}>
              Refund
            </h5>
            <ul
              className={`${statusTable.columnCells} rounded-md bg-red-50 text-red-700`}
            >
              <li className={statusTable.columnSpan}>orders</li>
              <li className={statusTable.columnSpan}>Percentage</li>
              <li className={statusTable.columnSpan}>Worth</li>
            </ul>
          </div>
          <div className={`${statusTable.column} ${statusTable.header.column}`}>
            <h5 className={`${statusTable.header.columnTitle} text-red-800`}>
              Chargeback
            </h5>
            <ul
              className={`${statusTable.columnCells} rounded-md bg-red-50 text-red-700`}
            >
              <li className={statusTable.columnSpan}>orders</li>
              <li className={statusTable.columnSpan}>Percentage</li>
              <li className={statusTable.columnSpan}>Worth</li>
            </ul>
          </div>
        </div>
        <div className={`${statusTable.row} ${statusTable.body.row}`}>
          <div className={`${statusTable.column} gap-2`}>
            <img
              src={bronzeIcon}
              alt="brand icon"
              className={statusTable.icon}
            />
            <h5 className="font-medium">Bronze</h5>
          </div>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
        </div>
        <div className={`${statusTable.row} ${statusTable.body.row}`}>
          <div className={`${statusTable.column} gap-2`}>
            <img
              src={silverIcon}
              alt="brand icon"
              className={statusTable.icon}
            />
            <h5 className="font-medium">silver</h5>
          </div>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
        </div>
        <div className={`${statusTable.row} ${statusTable.body.row}`}>
          <div className={`${statusTable.column} gap-2`}>
            <img src={goldIcon} alt="brand icon" className={statusTable.icon} />
            <h5 className="font-medium">gold</h5>
          </div>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
        </div>
        <div className={`${statusTable.row} ${statusTable.body.row}`}>
          <div className={`${statusTable.column} gap-2`}>
            <img
              src={platinumIcon}
              alt="brand icon"
              className={statusTable.icon}
            />
            <h5 className="font-medium">platinum</h5>
          </div>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
        </div>
        <div className={`${statusTable.row} ${statusTable.body.row}`}>
          <div className={`${statusTable.column} gap-2`}>
            <img
              src={diamondIcon}
              alt="brand icon"
              className={statusTable.icon}
            />
            <h5 className="font-medium">diamond</h5>
          </div>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
          <ul className={statusTable.columnCells}>
            <li className={statusTable.columnSpan}>110</li>
            <li className={statusTable.columnSpan}>25%</li>
            <li className={statusTable.columnSpan}>$45.5k</li>
          </ul>
        </div>
      </Box>
    </>
  );
};

export default BrandDetail;
