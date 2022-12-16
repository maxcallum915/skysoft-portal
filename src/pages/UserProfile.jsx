import { useParams } from "react-router-dom";
import {
  HiCheck,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineStar,
  HiOutlineUser,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import Box from "../components/Box";
import Chip from "../components/Chip";
import ActivityChip from "../components/ActivityChip";
import ActivityChipGroup from "../components/ActivityChipGroup";

const UserProfile = () => {
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
          <h5 className="mr-auto mb-5 text-xl font-semibold capitalize text-slate-700">
            Activity timeline
          </h5>
          <ActivityChipGroup>
            <ActivityChip
              title={"Order # 51248 has been updated"}
              subtitle={"You have added a comment to order # 51248"}
              date={"January 13th, 2022"}
            />
            <ActivityChip
              title={"New project has been created"}
              subtitle={"You have created a new project"}
              date={"January 13th, 2022"}
            />
            <ActivityChip
              title={"New comment has been added to order # 85491"}
              subtitle={"You have added a comment to order # 51248"}
              date={"January 13th, 2022"}
            />
          </ActivityChipGroup>
        </Box>
      </div>
    </div>
  );
};

export default UserProfile;
