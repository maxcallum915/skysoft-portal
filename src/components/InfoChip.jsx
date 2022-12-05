import Progressbar from "./Progressbar";

const styles = {
  chip: `flex items-center gap-3 mt-6`,
  icon: `h-12 w-12 shrink-0 rounded-md bg-slate-100 p-2.5 text-center text-xl font-semibold capitalize text-slate-700`,
  iconImg: `h-full w-full object-contain`,
  title: `font-semibold capitalize leading-none text-slate-700`,
  subtitle: `text-sm capitalize text-slate-400`,
};

const InfoChip = ({ icon, title, subtitle }) => {
  return (
    <div className={styles.chip}>
      <div className={styles.icon}>
        {icon ? (
          <img src={icon} alt="brand logo" className={styles.iconImg} />
        ) : (
          title.split(" ").map((v, i) => i < 2 && v.slice(0, 1))
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className="ml-auto flex flex-col gap-1">
        <h5 className={`text-right ${styles.title} mb-1`}>$24,865.4</h5>
        <Progressbar completed="25" rounded />
      </div>
    </div>
  );
};

export default InfoChip;
