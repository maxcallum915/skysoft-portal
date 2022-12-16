import brandIcon1 from "../../assets/brand-logo-1.png";
import packageIcon1 from "../../assets/package-icon-1.png";
import ordericon1 from "../../assets/project-type-1.png";
import Box from "../../components/Box";
import Avatar from "../../components/Avatar";
import Chip from "../../components/Chip";
import Progressbar from "../../components/Progressbar";
import Button from "../../components/Button";
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
    title: `font-medium leading-none text-slate-400`,
    subtitleWrapper: `flex items-center gap-2`,
    subtitle: `font-semibold leading-tight text-secondary`,
  },
};
const { infoRow } = styles;

const OrderDetails = () => {
  return (
    <>
      {/* <Button classes={"mb-3 ml-auto"}>Edit Order</Button> */}
      <Box>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className={styles.orderTitle}>Order Title goes here</h2>
            <h5 className={styles.orderSubtitle}>Order Id: 123456789</h5>
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
                <h5 className={styles.avatarSubtitle}>Client</h5>
                <h5 className={styles.avatarTitle}>Sylvia Serenity</h5>
              </div>
            </div>
            <div className={styles.avatarBox}>
              <Avatar
                icon={"https://xsgames.co/randomusers/avatar.php?g=male"}
                rounded
                title={"John doe"}
                shadow
              />
              <div>
                <h5 className={styles.avatarSubtitle}>Account Manager</h5>
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
            <h5 className={`mb-3 ${infoRow.title}`}>Order Category</h5>
            <div className={infoRow.subtitleWrapper}>
              <img src={packageIcon1} className="w-5 object-contain" />
              <h6 className={infoRow.subtitle}>Bronze</h6>
            </div>
          </div>
          <div>
            <h5 className={`mb-3 ${infoRow.title}`}>Order Worth</h5>
            <h6 className={infoRow.subtitle}>$1845</h6>
          </div>
          <div>
            <h5 className={`mb-3 ${infoRow.title}`}>Order Type</h5>
            <div className={infoRow.subtitleWrapper}>
              <img src={ordericon1} className="w-5 object-contain" />
              <h6 className={infoRow.subtitle}>Custom</h6>
            </div>
          </div>
          <div>
            <h5 className={`mb-3 ${infoRow.title}`}>Order Status</h5>
            <Chip label="in-process" variant="warning" />
          </div>
          <div>
            <div className={`mb-3 ${infoRow.subtitleWrapper}`}>
              <h5 className={infoRow.title}>Order Stage</h5>
              <Progressbar height="h-1" width="w-1/3" rounded progress={62} />
              <h6 className="text-xs font-semibold text-slate-900">62%</h6>
            </div>
            <Chip
              label="Revision - Inner Pages - Test Link"
              variant="warning"
            />
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

export default OrderDetails;
