import loginImg from "../assets/login-img-3.png";
import loginBg from "../assets/login-bg-1.png";
import logo from "../assets/logo-full.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const styles = {
  authWrapper: `flex min-h-screen bg-white`,
  authContent: `w-2/6 self-center p-12 max-2xl:self-auto`,
  logo: `mb-8 w-40 object-contain`,
  title: `mb-1 text-3xl font-bold text-slate-900`,
  subtitle: `mb-10 font-medium text-slate-500`,
  checkboxWrapper: `flex justify-between`,
  link: `font-semibold text-slate-700 hover:text-blue-600 hover:underline`,
  imgContainer: `relative max-h-screen flex-1`,
  imgBackground: `h-full w-full object-cover`,
  imgForeground: `absolute top-2/4 left-2/4 w-2/4 -translate-y-2/4 -translate-x-2/4`,
};

const ForgotPassword = () => {
  return (
    <div className={styles.authWrapper}>
      <div className={styles.authContent}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className="flex items-start gap-4">
          <Link to="/login">
            <Button type="button" widthVariant="max" rounded>
              <BiArrowBack />
            </Button>
          </Link>
          <div>
            <h1 className={styles.title}>Forgot Password?</h1>
            <p className={styles.subtitle}>Create a new password</p>
          </div>
        </div>

        <Input
          type="password"
          label="Enter new password"
          required
          widthVariant="full"
        />
        <Input
          type="password"
          label="Re-enter new password"
          required
          widthVariant="full"
        />
        <Button type="button" widthVariant="full">
          Change Password
        </Button>
      </div>
      <div className={styles.imgContainer}>
        <img
          src={loginBg}
          alt="login background"
          className={styles.imgBackground}
        />
        <img
          src={loginImg}
          alt="login image"
          className={styles.imgForeground}
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
