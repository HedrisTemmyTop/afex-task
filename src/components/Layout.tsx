import React from "react";
import classes from "../styles/Layout.module.css";
import Main from "./main/main";
import Sidebar from "./sidebar/Sidebar";

const Layout: React.FC = () => {
  return (
    <div className={classes.Layout}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default Layout;
