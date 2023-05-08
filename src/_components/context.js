import { createContext, useContext } from "react";

const MainContext = createContext(null);

const AppContext = ({ children }) => {
  const value = {};

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}

const useCTX = () => useContext(AppContext);

export {AppContext, useCTX};