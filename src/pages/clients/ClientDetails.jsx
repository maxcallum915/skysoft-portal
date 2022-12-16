import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import brandIcon1 from "../../assets/brand-logo-1.png";
import packageIcon1 from "../../assets/package-icon-1.png";
import Box from "../../components/Box";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import ActivityChipGroup from "../../components/ActivityChipGroup";
import ActivityChip from "../../components/ActivityChip";
import Chip from "../../components/Chip";
import Progressbar from "../../components/Progressbar";

const styles = {
  clientTitle: `mb-1.5 text-2xl font-semibold capitalize leading-none text-slate-900`,
  clientSubtitle: `text-sm font-medium text-slate-400`,
  avatarWrapper: `flex items-start gap-3`,
  avatarBox: `flex min-w-[225px] items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2.5 py-3`,
  avatarSubtitle: `text-xs font-semibold leading-tight text-slate-400`,
  avatarTitle: `font-semibold text-secondary`,
  infoRow: {
    wrapper: `mt-10 flex flex-wrap items-start justify-between gap-6`,
    title: `font-medium capitalize leading-none text-slate-400`,
    subtitleWrapper: `flex items-center gap-2`,
    subtitle: `font-semibold leading-tight text-secondary`,
  },
  tabs: {
    tabList: `mb-3 flex gap-2 rounded-xl bg-white p-1.5 border border-slate-200 w-full`,
    tab: `rounded-lg py-2 px-3 font-medium ring-white ring-opacity-20 ring-offset-2 ring-offset-blue-300 focus:outline-none focus:ring-2`,
    tabDefault: `text-slate-700 hover:bg-slate-100 hover:text-slate-900`,
    tabSelected: `bg-gradient-to-l from-primary to-secondary text-white shadow-md`,
  },
  projectCard: {
    top: `mb-5 flex items-start justify-between gap-3 border-b border-slate-200 pb-5`,
    title: `mb-1 text-lg font-semibold capitalize leading-none text-secondary`,
    subtitle: `text-sm capitalize text-slate-400`,
    worth: `max-w-max rounded-md bg-slate-100 py-2 px-3 text-sm font-semibold capitalize text-slate-700`,
    flexBetween: `flex items-center justify-between`,
  },
};
const { infoRow, tabs, projectCard } = styles;

const ClientDetails = () => {
  return (
    <>
      <Button classes={"mb-3 ml-auto"}>Edit Client</Button>
      <Box>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className={`mb-2 flex items-center gap-2`}>
              <Avatar
                icon={
                  "https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/8.png"
                }
                title="Client Name"
                size="md"
              />
              <h2 className={`${styles.clientTitle} mb-0`}>Client Name</h2>
            </div>
            <h5 className={styles.clientSubtitle}>Client Id: 123456789</h5>
            <h5 className={styles.clientSubtitle}>Created on: 01-01-2023</h5>
          </div>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarBox}>
              <Avatar
                icon={"https://xsgames.co/randomusers/avatar.php?g=male"}
                rounded
                title={"John doe"}
                shadow
              />
              <div>
                <h6 className={styles.avatarSubtitle}>Account Manager</h6>
                <h5 className={styles.avatarTitle}>Sylvia Serenity</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={infoRow.wrapper}>
          <div>
            <h5 className={`mb-3 ${infoRow.title}`}>Associated Brand</h5>
            <div className={infoRow.subtitleWrapper}>
              <img src={brandIcon1} className="w-8 object-contain" />
              <h6 className={infoRow.subtitle}>The Website design</h6>
            </div>
          </div>
          <div>
            <h5 className={`mb-3 ${infoRow.title}`}>Client Category</h5>
            <div className={infoRow.subtitleWrapper}>
              <img src={packageIcon1} className="w-5 object-contain" />
              <h6 className={infoRow.subtitle}>Bronze</h6>
            </div>
          </div>
          <div>
            <h5 className={`mb-3 ${infoRow.title}`}>Total Worth</h5>
            <h6 className={infoRow.subtitle}>$1845</h6>
          </div>
          <div>
            <h5 className={`mb-3 ${infoRow.title}`}>Initial Payment</h5>
            <h6 className={infoRow.subtitle}>$845</h6>
          </div>
          <div>
            <h5 className={`mb-3 ${infoRow.title}`}>Email</h5>
            <div className={infoRow.subtitleWrapper}>
              <HiOutlineEnvelope className="h-6 w-6 text-secondary" />
              <h6 className={infoRow.subtitle}>client@example.com</h6>
            </div>
          </div>
          <div>
            <h5 className={`mb-3 ${infoRow.title}`}>Phone</h5>
            <div className={infoRow.subtitleWrapper}>
              <HiOutlinePhone className="h-6 w-6 text-secondary" />
              <h6 className={infoRow.subtitle}>+1 234 567 (8910)</h6>
            </div>
          </div>
        </div>
      </Box>
      <Tab.Group as={"div"} className={"mt-5"}>
        <Tab.List className={`${tabs.tabList}`}>
          <Tab
            className={({ selected }) =>
              `${tabs.tab} ${selected ? tabs.tabSelected : tabs.tabDefault}`
            }
          >
            Orders
          </Tab>
          <Tab
            className={({ selected }) =>
              `${tabs.tab} ${selected ? tabs.tabSelected : tabs.tabDefault}`
            }
          >
            Activity
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">
              <Box>
                <Link to="/orders/132">
                  <div className={projectCard.top}>
                    <div>
                      <h5 className={projectCard.title}>Create Website</h5>
                      <h6 className={projectCard.subtitle}>
                        order id: 12345678
                      </h6>
                    </div>
                    <div className={projectCard.worth}>
                      worth: <span className="text-secondary">$1.84k</span>
                    </div>
                  </div>
                  <div className={`${projectCard.flexBetween} mb-2`}>
                    <span className={projectCard.subtitle}>Order Status</span>
                    <Chip label="in-process" variant="warning" />
                  </div>
                  <div className={projectCard.flexBetween}>
                    <span className={projectCard.subtitle}>Order Stage</span>
                    <Chip
                      label="Revision - Inner Pages - Test Link"
                      variant="warning"
                    />
                  </div>
                  <div className={`${projectCard.flexBetween} mb-1 mt-5`}>
                    <h6 className={projectCard.subtitle}>Order Completion:</h6>
                    <h6 className={projectCard.subtitle}>24% completed</h6>
                  </div>
                  <Progressbar
                    width="w-full"
                    height="h-1.5"
                    progress={24}
                    rounded
                  />
                </Link>
              </Box>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <Box>
              <h5 className="mb-5 text-xl font-semibold capitalize text-slate-900">
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
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default ClientDetails;
