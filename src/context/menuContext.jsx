import { createContext, useState } from "react";
import data from "../assets/data";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(data.menu);

  return (
    <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>
  );
};
