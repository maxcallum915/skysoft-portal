import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import loginImg from "../assets/login-img-3.png";
import loginBg from "../assets/login-bg-1.png";
import logo from "../assets/logo-full.png";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "../config/axios";
import useAuth from "../hooks/useAuth";

const styles = {
  authWrapper: `flex min-h-screen bg-white`,
  authContent: `w-full self-center p-5 md:p-12 lg:w-2/4 xl:w-2/5 2xl:w-2/6`,
  logo: `mb-8 w-40 object-contain`,
  title: `mb-1 text-3xl font-bold text-slate-900`,
  subtitle: `mb-10 font-medium text-slate-500`,
  checkboxWrapper: `flex justify-between`,
  link: `font-semibold text-slate-700 hover:text-blue-600 hover:underline`,
  imgContainer: `relative hidden max-h-screen flex-1 lg:block`,
  imgBackground: `h-full w-full object-cover`,
  imgForeground: `absolute top-2/4 left-2/4 w-2/3 -translate-y-2/4 -translate-x-2/4 2xl:w-2/4`,
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginUser = async () => {
      try {
        const { data: user } = await axios.post("/api/users/login", {
          email,
          password,
        });
        localStorage.setItem("user", JSON.stringify(user));
        setAuth(user);
        setEmail("");
        setPassword("");
        navigate("/", { replace: true });
        toast.success("User logged in successfully");
      } catch (error) {
        if (!error?.response) {
          toast.error("No server response");
        }
        if (error?.response?.data) {
          toast.error(error?.response?.data.message);
        }
      }
    };
    loginUser();
  };

  return (
    <div className={styles.authWrapper}>
      <div className={styles.authContent}>
        <img src={logo} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Hi, Welcome to Skysoft!</h1>
        <p className={styles.subtitle}>Please sign-in to your account</p>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            label="email address"
            required
            name={"email"}
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            widthVariant="full"
          />
          <Input
            type="password"
            label="password"
            required
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
            widthVariant="full"
          />
          <Button type="submit" widthVariant="full">
            login
          </Button>
        </form>
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

export default Login;
