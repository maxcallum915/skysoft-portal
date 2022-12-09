import AvatarGroup from "../components/AvatarGroup";
import { HiOutlineStar } from "react-icons/hi2";
import {
  HiArrowTrendingUp,
  HiCheck,
  HiOutlineUserPlus,
  HiOutlineXMark,
} from "react-icons/hi2";
import Button from "../components/Button";
import Box from "../components/Box";
import Dropdown from "../components/Dropdown";
import Avatar from "../components/Avatar";
import Chip from "../components/Chip";
import Progressbar from "../components/Progressbar";
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import Input from "../components/Input";
import { Fragment } from "react";
import Select from "../components/Select";
import Textarea from "../components/Textarea";
import InputRadio from "../components/InputRadio";

const Orders = () => {
  const [openModal, setopenModal] = useState(false);
  const handleModal = () => setopenModal((previousState) => !previousState);
  return (
    <>
      <Transition show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          open={openModal}
          onClose={handleModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="mx-auto flex min-h-full max-w-5xl items-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full">
                  <div className="transform overflow-hidden rounded-md bg-white p-5 shadow-xl transition-all">
                    <h1 className="mb-6 border-b border-b-slate-200 pb-2 text-2xl font-semibold capitalize text-slate-900">
                      Add a new order
                    </h1>
                    <Input
                      label="order title"
                      required
                      widthVariant="full"
                      type="text"
                    />
                    <div className="grid grid-cols-2 gap-x-5"></div>
                    <div className="grid grid-cols-3 gap-x-5">
                      <Select
                        widthVariant="full"
                        label="Select brand"
                        required
                      />
                      <Select
                        widthVariant="full"
                        label="Select client"
                        required
                      />
                      <Input
                        label="Sales email"
                        required
                        widthVariant="full"
                        type="email"
                      />
                      <Select widthVariant="full" label="order type" required />
                      <Input
                        label="Order Amount"
                        required
                        widthVariant="full"
                        type="number"
                      />
                      <Select widthVariant="full" label="payment gateway" />
                    </div>
                    <Textarea
                      label="Description"
                      required
                      widthVariant="full"
                      rows={3}
                    />
                    <h5 className="mb-3 select-none text-lg font-medium capitalize text-slate-700">
                      Services
                    </h5>
                    <div className="grid grid-cols-3 gap-x-5">
                      <InputRadio type="checkbox" text="logo design" />
                      <InputRadio type="checkbox" text="3d logo design" />
                      <InputRadio type="checkbox" text="logo/illustration" />
                      <InputRadio type="checkbox" text="website design" />
                      <InputRadio type="checkbox" text="stationary design" />
                      <InputRadio type="checkbox" text="brochure design" />
                      <InputRadio type="checkbox" text="website development" />
                      <InputRadio type="checkbox" text="project status" />
                      <InputRadio type="checkbox" text="social media design" />
                      <InputRadio type="checkbox" text="video production" />
                      <InputRadio type="checkbox" text="content writing" />
                      <InputRadio type="checkbox" text="copyright design" />
                      <InputRadio type="checkbox" text="other services" />
                      <InputRadio type="checkbox" text="no package" />
                      <InputRadio type="checkbox" text="client questionnaire" />
                      <InputRadio type="checkbox" text="SEO questionnaire" />
                      <InputRadio type="checkbox" text="trademark services" />
                      <InputRadio
                        type="checkbox"
                        text="email marketing questionnaire"
                      />
                      <InputRadio
                        type="checkbox"
                        text="academic writing questionnaire"
                      />
                    </div>
                    <div className="mt-2 flex justify-end gap-3 border-t border-t-slate-200 pt-5">
                      <Button handleClick={handleModal}>Cancel</Button>
                      <Button>Add order</Button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="mb-5 grid gap-5 lg:grid-cols-4">
        <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
          <div className="h-12 w-12 shrink-0 rounded-lg bg-slate-100 p-2.5 text-secondary">
            <HiOutlineUserPlus className="h-full w-full" />
          </div>
          <div>
            <h6 className="text-sm capitalize text-slate-400">New orders</h6>
            <h5 className="mt-1 text-2xl font-semibold leading-none text-secondary">
              26
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
          <div className="h-12 w-12 shrink-0 rounded-lg bg-slate-100 p-2.5 text-green-500">
            <HiCheck className="h-full w-full" />
          </div>
          <div>
            <h6 className="text-sm capitalize text-slate-400">
              orders delivered
            </h6>
            <h5 className="mt-1 text-2xl font-semibold leading-none text-green-500">
              408
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
          <div className="h-12 w-12 shrink-0 rounded-lg bg-slate-100 p-2.5 text-red-500">
            <HiOutlineXMark className="h-full w-full" />
          </div>
          <div>
            <h6 className="text-sm capitalize text-slate-400">
              chargedback orders
            </h6>
            <h5 className="mt-1 text-2xl font-semibold leading-none text-red-500">
              12
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
          <div className="h-12 w-12 shrink-0 rounded-lg bg-slate-100 p-2.5 text-amber-400">
            <HiArrowTrendingUp className="h-full w-full" />
          </div>
          <div>
            <h6 className="text-sm capitalize text-slate-400">
              orders revenue
            </h6>
            <h5 className="mt-1 text-2xl font-semibold leading-none text-amber-400">
              $1.2M
            </h5>
          </div>
        </div>
      </div>
      <div className="ml-auto mb-5 w-max">
        {/* <Button>Add a new order</Button> */}
        <Button handleClick={handleModal}>Add a new order</Button>
      </div>
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
                <b className="font-semibold text-slate-500">All Hours:</b>{" "}
                328/344
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
              <Progressbar
                width="w-full"
                height="h-1.5"
                rounded
                completed={90}
              />
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
                <b className="font-semibold text-slate-500">All Hours:</b>{" "}
                328/344
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
              <Progressbar
                width="w-full"
                height="h-1.5"
                rounded
                completed={50}
              />
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
                <b className="font-semibold text-slate-500">All Hours:</b>{" "}
                328/344
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
              <Progressbar
                width="w-full"
                height="h-1.5"
                rounded
                completed={15}
              />
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
                <b className="font-semibold text-slate-500">All Hours:</b>{" "}
                328/344
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
              <Progressbar
                width="w-full"
                height="h-1.5"
                rounded
                completed={65}
              />
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
                <b className="font-semibold text-slate-500">All Hours:</b>{" "}
                328/344
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
              <Progressbar
                width="w-full"
                height="h-1.5"
                rounded
                completed={45}
              />
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
                <b className="font-semibold text-slate-500">All Hours:</b>{" "}
                328/344
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
              <Progressbar
                width="w-full"
                height="h-1.5"
                rounded
                completed={10}
              />
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
    </>
  );
};

export default Orders;
