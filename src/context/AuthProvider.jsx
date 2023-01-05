import { createContext, useState } from "react";

const AuthContext = createContext({});

const user = JSON.parse(localStorage.getItem("user"));

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(user ? user : {});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
