import loaderImg from "../assets/logo.png";

const styles = {
  logo: `mx-auto block w-24 animate-pulse`,
};

const Loader = () => {
  return (
    <>
      <img src={loaderImg} alt="logo" className={`${styles.logo}`} />
    </>
  );
};

export default Loader;
