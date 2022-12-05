import AvatarGroup from "../components/AvatarGroup";
import { HiOutlineStar } from "react-icons/hi";
import Box from "../components/Box";
import Dropdown from "../components/Dropdown";
import Avatar from "../components/Avatar";
import Chip from "../components/Chip";
import Progressbar from "../components/Progressbar";

const Projects = () => {
  return (
    <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
      <Box>
        <div className="mb-5 flex items-start gap-3">
          <div className="mr-auto">
            <span className="text-xl font-semibold capitalize text-slate-700">
              Create Website
            </span>
            <span className="block text-sm capitalize text-slate-400">
              <b>client:</b> christian jimenez
            </span>
          </div>
          <Dropdown dropdownIcon={<HiOutlineStar className="h-5 w-5" />} />
          <Dropdown />
        </div>
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="max-w-max rounded-md bg-slate-100 py-2 px-3 text-sm font-medium capitalize text-slate-700">
            <div>
              Budget: <span className="font-bold">$28.4k</span>
            </div>
          </div>
          <div>
            <p className="mb-1 text-right text-xs">
              Start date: <span className="font-bold">01/01/2023</span>
            </p>
            <p className="text-right text-xs">
              End date: <span className="font-bold">31/01/2023</span>
            </p>
          </div>
        </div>
        <p className="text-slate-400">
          Your domain name should reflect your products or services so that
          your...
        </p>
        <div className="mt-5 border-t border-slate-200 pt-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-light text-slate-400">
              <b className="font-semibold text-slate-500">All Hours:</b> 328/344
            </span>
            <Chip label="4 days left" variant="danger" />
          </div>
          <div className="mb-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs capitalize text-slate-400">
                Tasks: 328/344
              </span>
              <span className="text-xs capitalize text-slate-400">
                95% completed
              </span>
            </div>
            <Progressbar width="w-full" height="h-1.5" rounded completed={90} />
          </div>
          <AvatarGroup>
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/5.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/6.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/7.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/8.png"
              rounded
              title="John Doe"
            />
          </AvatarGroup>
        </div>
      </Box>
      <Box>
        <div className="mb-5 flex items-start gap-3">
          <div className="mr-auto">
            <span className="text-xl font-semibold capitalize text-slate-700">
              design mockups
            </span>
            <span className="block text-sm capitalize text-slate-400">
              <b>client:</b> christian jimenez
            </span>
          </div>
          <Dropdown dropdownIcon={<HiOutlineStar className="h-5 w-5" />} />
          <Dropdown />
        </div>
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="max-w-max rounded-md bg-slate-100 py-2 px-3 text-sm font-medium capitalize text-slate-700">
            <div>
              Budget: <span className="font-bold">$28.4k</span>
            </div>
          </div>
          <div>
            <p className="mb-1 text-right text-xs">
              Start date: <span className="font-bold">01/01/2023</span>
            </p>
            <p className="text-right text-xs">
              End date: <span className="font-bold">31/01/2023</span>
            </p>
          </div>
        </div>
        <p className="text-slate-400">
          Your domain name should reflect your products or services so that
          your...
        </p>
        <div className="mt-5 border-t border-slate-200 pt-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-light text-slate-400">
              <b className="font-semibold text-slate-500">All Hours:</b> 328/344
            </span>
            <Chip label="10 days left" variant="warning" />
          </div>
          <div className="mb-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs capitalize text-slate-400">
                Tasks: 328/344
              </span>
              <span className="text-xs capitalize text-slate-400">
                95% completed
              </span>
            </div>
            <Progressbar width="w-full" height="h-1.5" rounded completed={50} />
          </div>
          <AvatarGroup>
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/5.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/6.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/7.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/8.png"
              rounded
              title="John Doe"
            />
          </AvatarGroup>
        </div>
      </Box>
      <Box>
        <div className="mb-5 flex items-start gap-3">
          <div className="mr-auto">
            <span className="text-xl font-semibold capitalize text-slate-700">
              SMM Campaigns
            </span>
            <span className="block text-sm capitalize text-slate-400">
              <b>client:</b> christian jimenez
            </span>
          </div>
          <Dropdown dropdownIcon={<HiOutlineStar className="h-5 w-5" />} />
          <Dropdown />
        </div>
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="max-w-max rounded-md bg-slate-100 py-2 px-3 text-sm font-medium capitalize text-slate-700">
            <div>
              Budget: <span className="font-bold">$28.4k</span>
            </div>
          </div>
          <div>
            <p className="mb-1 text-right text-xs">
              Start date: <span className="font-bold">01/01/2023</span>
            </p>
            <p className="text-right text-xs">
              End date: <span className="font-bold">31/01/2023</span>
            </p>
          </div>
        </div>
        <p className="text-slate-400">
          Your domain name should reflect your products or services so that
          your...
        </p>
        <div className="mt-5 border-t border-slate-200 pt-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-light text-slate-400">
              <b className="font-semibold text-slate-500">All Hours:</b> 328/344
            </span>
            <Chip label="48 days left" variant="success" />
          </div>
          <div className="mb-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs capitalize text-slate-400">
                Tasks: 328/344
              </span>
              <span className="text-xs capitalize text-slate-400">
                95% completed
              </span>
            </div>
            <Progressbar width="w-full" height="h-1.5" rounded completed={15} />
          </div>
          <AvatarGroup>
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/5.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/6.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/7.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/8.png"
              rounded
              title="John Doe"
            />
          </AvatarGroup>
        </div>
      </Box>
      <Box>
        <div className="mb-5 flex items-start gap-3">
          <div className="mr-auto">
            <span className="text-xl font-semibold capitalize text-slate-700">
              Create Website
            </span>
            <span className="block text-sm capitalize text-slate-400">
              <b>client:</b> christian jimenez
            </span>
          </div>
          <Dropdown dropdownIcon={<HiOutlineStar className="h-5 w-5" />} />
          <Dropdown />
        </div>
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="max-w-max rounded-md bg-slate-100 py-2 px-3 text-sm font-medium capitalize text-slate-700">
            <div>
              Budget: <span className="font-bold">$28.4k</span>
            </div>
          </div>
          <div>
            <p className="mb-1 text-right text-xs">
              Start date: <span className="font-bold">01/01/2023</span>
            </p>
            <p className="text-right text-xs">
              End date: <span className="font-bold">31/01/2023</span>
            </p>
          </div>
        </div>
        <p className="text-slate-400">
          Your domain name should reflect your products or services so that
          your...
        </p>
        <div className="mt-5 border-t border-slate-200 pt-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-light text-slate-400">
              <b className="font-semibold text-slate-500">All Hours:</b> 328/344
            </span>
            <Chip label="4 days left" variant="danger" />
          </div>
          <div className="mb-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs capitalize text-slate-400">
                Tasks: 328/344
              </span>
              <span className="text-xs capitalize text-slate-400">
                95% completed
              </span>
            </div>
            <Progressbar width="w-full" height="h-1.5" rounded completed={65} />
          </div>
          <AvatarGroup>
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/5.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/6.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/7.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/8.png"
              rounded
              title="John Doe"
            />
          </AvatarGroup>
        </div>
      </Box>
      <Box>
        <div className="mb-5 flex items-start gap-3">
          <div className="mr-auto">
            <span className="text-xl font-semibold capitalize text-slate-700">
              design mockups
            </span>
            <span className="block text-sm capitalize text-slate-400">
              <b>client:</b> christian jimenez
            </span>
          </div>
          <Dropdown dropdownIcon={<HiOutlineStar className="h-5 w-5" />} />
          <Dropdown />
        </div>
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="max-w-max rounded-md bg-slate-100 py-2 px-3 text-sm font-medium capitalize text-slate-700">
            <div>
              Budget: <span className="font-bold">$28.4k</span>
            </div>
          </div>
          <div>
            <p className="mb-1 text-right text-xs">
              Start date: <span className="font-bold">01/01/2023</span>
            </p>
            <p className="text-right text-xs">
              End date: <span className="font-bold">31/01/2023</span>
            </p>
          </div>
        </div>
        <p className="text-slate-400">
          Your domain name should reflect your products or services so that
          your...
        </p>
        <div className="mt-5 border-t border-slate-200 pt-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-light text-slate-400">
              <b className="font-semibold text-slate-500">All Hours:</b> 328/344
            </span>
            <Chip label="10 days left" variant="warning" />
          </div>
          <div className="mb-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs capitalize text-slate-400">
                Tasks: 328/344
              </span>
              <span className="text-xs capitalize text-slate-400">
                95% completed
              </span>
            </div>
            <Progressbar width="w-full" height="h-1.5" rounded completed={45} />
          </div>
          <AvatarGroup>
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/5.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/6.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/7.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/8.png"
              rounded
              title="John Doe"
            />
          </AvatarGroup>
        </div>
      </Box>
      <Box>
        <div className="mb-5 flex items-start gap-3">
          <div className="mr-auto">
            <span className="text-xl font-semibold capitalize text-slate-700">
              SMM Campaigns
            </span>
            <span className="block text-sm capitalize text-slate-400">
              <b>client:</b> christian jimenez
            </span>
          </div>
          <Dropdown dropdownIcon={<HiOutlineStar className="h-5 w-5" />} />
          <Dropdown />
        </div>
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="max-w-max rounded-md bg-slate-100 py-2 px-3 text-sm font-medium capitalize text-slate-700">
            <div>
              Budget: <span className="font-bold">$28.4k</span>
            </div>
          </div>
          <div>
            <p className="mb-1 text-right text-xs">
              Start date: <span className="font-bold">01/01/2023</span>
            </p>
            <p className="text-right text-xs">
              End date: <span className="font-bold">31/01/2023</span>
            </p>
          </div>
        </div>
        <p className="text-slate-400">
          Your domain name should reflect your products or services so that
          your...
        </p>
        <div className="mt-5 border-t border-slate-200 pt-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-light text-slate-400">
              <b className="font-semibold text-slate-500">All Hours:</b> 328/344
            </span>
            <Chip label="48 days left" variant="success" />
          </div>
          <div className="mb-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs capitalize text-slate-400">
                Tasks: 328/344
              </span>
              <span className="text-xs capitalize text-slate-400">
                95% completed
              </span>
            </div>
            <Progressbar width="w-full" height="h-1.5" rounded completed={10} />
          </div>
          <AvatarGroup>
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/5.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/6.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/7.png"
              rounded
              title="John Doe"
            />
            <Avatar
              icon="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/8.png"
              rounded
              title="John Doe"
            />
          </AvatarGroup>
        </div>
      </Box>
    </div>
  );
};

export default Projects;
