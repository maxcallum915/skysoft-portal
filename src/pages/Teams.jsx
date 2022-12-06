import AvatarGroup from "../components/AvatarGroup";
import { HiOutlineStar } from "react-icons/hi";
import Box from "../components/Box";
import Dropdown from "../components/Dropdown";
import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";

const Teams = () => {
  return (
    <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
      <Box>
        <div className="mb-5 flex items-center gap-3">
          <span className="mr-auto text-xl font-semibold capitalize text-slate-700">
            Developers
          </span>
          <Dropdown dropdownIcon={<HiOutlineStar className="h-5 w-5" />} />
          <Dropdown />
        </div>
        <p className="text-slate-400">
          We don’t make assumptions about the rest of your technology stack, so
          you can develop new features in React.
        </p>
        <div className="pt-5">
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
        <div className="mb-5 flex items-center gap-3">
          <span className="mr-auto text-xl font-semibold capitalize text-slate-700">
            designers
          </span>
          <Dropdown dropdownIcon={<HiOutlineStar className="h-5 w-5" />} />
          <Dropdown />
        </div>
        <p className="text-slate-400">
          We don’t make assumptions about the rest of your technology stack, so
          you can develop new features in React.
        </p>
        <div className="pt-5">
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
        <div className="mb-5 flex items-center gap-3">
          <span className="mr-auto text-xl font-semibold capitalize text-slate-700">
            Social Media Marketing
          </span>
          <Dropdown dropdownIcon={<HiOutlineStar className="h-5 w-5" />} />
          <Dropdown />
        </div>
        <p className="text-slate-400">
          We don’t make assumptions about the rest of your technology stack, so
          you can develop new features in React.
        </p>
        <div className="pt-5">
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
        <div className="mb-5 flex items-center gap-3">
          <span className="mr-auto text-xl font-semibold capitalize text-slate-700">
            Sales
          </span>
          <Dropdown dropdownIcon={<HiOutlineStar className="h-5 w-5" />} />
          <Dropdown />
        </div>
        <p className="text-slate-400">
          We don’t make assumptions about the rest of your technology stack, so
          you can develop new features in React.
        </p>
        <div className="pt-5">
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
        <div className="mb-5 flex items-center gap-3">
          <span className="mr-auto text-xl font-semibold capitalize text-slate-700">
            Support
          </span>
          <Dropdown dropdownIcon={<HiOutlineStar className="h-5 w-5" />} />
          <Dropdown />
        </div>
        <p className="text-slate-400">
          We don’t make assumptions about the rest of your technology stack, so
          you can develop new features in React.
        </p>
        <div className="pt-5">
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

export default Teams;
