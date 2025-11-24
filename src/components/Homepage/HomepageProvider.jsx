import { createContext, useContext } from "react";

const HomepageContext = createContext();

const HomepageProvider = ({ children, id, className, context }) => {
  const ctx = {};

  return <HomepageContext value={ctx}>{children}</HomepageContext>;
};

export const useHomepage = () => {
  const context = useContext(HomepageContext);
  if (!context) {
    throw new Error("useHomepage must be used within a HomepageProvider");
  }
  return context;
};

export default HomepageProvider;
