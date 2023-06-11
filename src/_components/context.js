import { createContext, useContext, useEffect, useState } from "react";
import { auth_strategy } from "../_db/auth";

const MainContext = createContext(null);

export const AppContext = ({ children }) => {
  const [listLikes, setListLikes] = useState([]);
  const user = auth_strategy.currentUser();

  const value = {
    user,
  };

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  );
}

export const useCTX = () => {
  return useContext(MainContext);
}
