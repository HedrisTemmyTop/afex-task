import React from "react";
import classes from "../../styles/Aside.module.css";
import icon1 from "../../assets/element-1.svg";
import icon2 from "../../assets/element-2.svg";
import icon3 from "../../assets/element-3.svg";
import icon4 from "../../assets/element-4.svg";
import icon5 from "../../assets/element-5.svg";
import icon6 from "../../assets/element-6.svg";
import icon7 from "../../assets/element-7.svg";
import logo from "../../assets/logo.png";

const Sidebar = (): JSX.Element => {
  return (
    <aside className={classes.AsideBar}>
      <img src={logo} className={classes.Logo} alt="icon" />
      <div className={classes.Aside}>
        <div className={classes.Top}>
          <div className={classes.Block}>
            <img src={icon4} alt="icon" />
            <span className={classes.ToolTip}> Dashboard</span>
          </div>
          <div className={classes.Block}>
            <img src={icon2} alt="icon" />
          </div>
          <div className={classes.Block}>
            <img src={icon7} alt="icon" />
            <span className={classes.ToolTip}> Portfolio</span>
          </div>
          <div className={classes.Block}>
            <img src={icon6} alt="icon" />
            <span className={classes.ToolTip}> Community</span>
          </div>
          <div className={classes.Block}>
            <img src={icon1} alt="icon" />
            <span className={classes.ToolTip}> Reports</span>
          </div>
        </div>
        <div className={classes.Bottom}>
          <div className={classes.Block}>
            <img src={icon3} alt="icon" />
            <span className={classes.ToolTip}> Logout</span>
          </div>
          <div className={classes.Block}>
            <img src={icon5} alt="icon" />
            <span className={classes.ToolTip}> Settings</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
