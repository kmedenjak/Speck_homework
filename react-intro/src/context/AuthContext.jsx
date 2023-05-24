import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin }}>
      {props.children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

export { AuthConsumer, AuthProvider, AuthContext};