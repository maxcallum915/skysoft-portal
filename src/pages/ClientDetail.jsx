import Box from "../components/Box";
import Chart from "react-apexcharts";
import Chip from "../components/Chip";
import {
  HiCalendar,
  HiCheck,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineStar,
  HiOutlineUser,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { useParams } from "react-router-dom";

const ClientDetail = () => {
  const params = useParams();
  return (
    <div className="flex gap-5">
      <div className="w-1/3">
        <Box>
          <img
            src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/8.png"
            alt="avatar"
            className="mx-auto block h-28 w-28 overflow-hidden rounded-md"
          />
          <div className="mt-5 mb-8 flex flex-col items-center gap-2">
            <h5 className="text-xl font-semibold capitalize text-slate-900">
              {params.id}
            </h5>
            <Chip label="project manager" variant="secondary" />
            <div className="mt-8 flex w-full justify-evenly gap-5">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 rounded-md bg-secondary bg-opacity-10 p-2.5 text-secondary">
                  <HiOutlineStar className="h-full w-full" />
                </div>
                <div>
                  <h5 className="text-xl font-semibold leading-none text-slate-900">
                    568
                  </h5>
                  <h6 className="text-sm capitalize text-slate-400">
                    orders done
                  </h6>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 rounded-md bg-secondary bg-opacity-10 p-2.5 text-secondary">
                  <HiCheck className="h-full w-full" />
                </div>
                <div>
                  <h5 className="text-xl font-semibold leading-none text-slate-900">
                    1.5k
                  </h5>
                  <h6 className="text-sm capitalize text-slate-400">
                    Tasks done
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <h5 className="mb-4 flex items-center gap-2 text-sm font-medium uppercase text-slate-500 after:inline-block after:h-0.5 after:w-full after:bg-slate-200">
            About
          </h5>
          <ul className="ml-2">
            <li className="flex items-center gap-2 capitalize text-slate-700">
              <HiOutlineUser className="h-6 w-6 text-secondary" />
              <h5>
                <b className="mr-2 font-semibold text-slate-900">Full name:</b>
                john doe
              </h5>
            </li>
            <li className="mt-4 flex items-center gap-2 capitalize text-slate-700">
              <HiOutlineUserCircle className="h-6 w-6 text-secondary" />
              <h5>
                <b className="mr-2 font-semibold text-slate-900">Pseudo:</b>
                charles xaviers
              </h5>
            </li>
            <li className="mt-4 flex items-center gap-2 capitalize text-slate-700">
              <HiOutlineStar className="h-6 w-6 text-secondary" />
              <h5>
                <b className="mr-2 font-semibold text-slate-900">
                  designation:
                </b>
                project manager
              </h5>
            </li>
            <li className="mt-4 flex items-center gap-2 capitalize text-slate-700">
              <HiCheck className="h-6 w-6 text-secondary" />
              <h5 className="flex items-center">
                <b className="mr-2 font-semibold text-slate-900">status:</b>
                <Chip label="active" variant="success" />
              </h5>
            </li>
          </ul>
          <h5 className="mt-6 mb-4 flex items-center gap-2 text-sm font-medium uppercase text-slate-500 after:inline-block after:h-0.5 after:w-full after:bg-slate-200">
            Contact
          </h5>
          <ul className="ml-2">
            <li className="flex items-center gap-2 text-slate-700">
              <HiOutlineEnvelope className="h-6 w-6 text-secondary" />
              <h5>
                <b className="mr-2 font-semibold capitalize text-slate-900">
                  email:
                </b>
                johndoe@email.com
              </h5>
            </li>
            <li className="mt-4 flex items-center gap-2 text-slate-700">
              <HiOutlinePhone className="h-6 w-6 text-secondary" />
              <h5>
                <b className="mr-2 font-semibold capitalize text-slate-900">
                  phone:
                </b>
                (000)-000-0000
              </h5>
            </li>
          </ul>
        </Box>
      </div>
      <div className="flex w-2/3 flex-col gap-5">
        <Box>
          <div className="mb-5 flex items-center gap-3">
            <span className="mr-auto text-xl font-semibold capitalize text-slate-700">
              Tenure Overview
            </span>
          </div>
          <Chart
            options={options}
            series={series}
            type="area"
            width="100%"
            height="200px"
          />
        </Box>
        <Box>
          <div className="mb-5 flex items-center gap-3">
            <span className="mr-auto text-xl font-semibold capitalize text-slate-700">
              Activity timeline
            </span>
          </div>
          <ol className="relative ml-3 border-l border-gray-200 dark:border-gray-700">
            <li className="mb-8 ml-8 last:mb-0">
              <span className="absolute -left-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-white ring-8 ring-white">
                <HiCalendar />
              </span>
              <time className="mb-0.5 block text-xs font-medium leading-none text-slate-400">
                January 13th, 2022
              </time>
              <h5 className="font-semibold text-slate-900">
                Order # 51248 has been updated
              </h5>
              <span className="mt-0.5 block text-sm text-slate-400">
                You have added a comment to order # 51248
              </span>
            </li>
            <li className="mb-8 ml-8 last:mb-0">
              <span className="absolute -left-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-white ring-8 ring-white">
                <HiCalendar />
              </span>
              <time className="mb-0.5 block text-xs font-medium leading-none text-slate-400">
                January 15th, 2022
              </time>
              <h5 className="font-semibold text-slate-900">
                New project has been created
              </h5>
              <span className="mt-0.5 block text-sm text-slate-400">
                You have created a new project
              </span>
            </li>
            <li className="mb-8 ml-8 last:mb-0">
              <span className="absolute -left-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-white ring-8 ring-white">
                <HiCalendar />
              </span>
              <time className="mb-0.5 block text-xs font-medium leading-none text-slate-400">
                January 13th, 2022
              </time>
              <h5 className="font-semibold text-slate-900">
                New task has been added to order # 85491
              </h5>
              <span className="mt-0.5 block text-sm text-slate-400">
                You have added a new task to order # 85491
              </span>
            </li>
          </ol>
        </Box>
      </div>
    </div>
  );
};

export default ClientDetail;
