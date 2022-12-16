import Box from "../../components/Box";
import brandIcon1 from "../../assets/brand-logo-1.png";
import packageIcon1 from "../../assets/package-icon-1.png";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import ActivityChipGroup from "../../components/ActivityChipGroup";
import ActivityChip from "../../components/ActivityChip";

const styles = {
  orderTitle: `mb-1.5 text-2xl font-semibold capitalize leading-none text-slate-900`,
  orderSubtitle: `text-sm font-medium text-slate-400`,
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
};
const { infoRow } = styles;

const ClientDetails = () => {
  return (
    <>
      {/* <Button classes={"mb-3 ml-auto"}>Edit Order</Button> */}
      <Box>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className={styles.orderTitle}>Client Name goes here</h2>
            <h5 className={styles.orderSubtitle}>Client Id: 123456789</h5>
            <h5 className={styles.orderSubtitle}>Created on: 01-01-2023</h5>
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
      <div className="mt-5"></div>
      <Box>
        <h5 className="mr-auto mb-5 text-xl font-semibold capitalize text-slate-900">
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
    </>
  );
};

export default ClientDetails;
