import React from "react";
import { UserContext } from "./Context";
import { useState } from "react";
export const ContextProvider = ({ children }) => {
  const [isLogin, setisLogin] = useState(false);
  const [isSignUp, setisSignUp] = useState(false);

  const value = {
    isLogin,
    setisLogin,
    isSignUp,
    setisSignUp,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
