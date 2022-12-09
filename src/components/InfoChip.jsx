const styles = {
  chip: `flex items-center gap-3`,
  icon: `h-12 w-12 shrink-0 rounded-md bg-slate-100 p-2 text-center text-xl font-semibold uppercase text-secondary`,
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
        {title && <h5 className={styles.title}>{title}</h5>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default InfoChip;
