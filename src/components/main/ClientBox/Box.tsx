import React from "react";
import SimpleLineChart from "./Chart";

import classes from "../../../styles/Main.module.css";

interface BoxProps {
  name: string;
  balance: string;
  type: string;
}

const Box: React.FC<BoxProps> = ({ name, balance, type }) => {
  return (
    <div className={classes.Box}>
      <span>
        <div>{name}</div>
        <h2>₦{balance}</h2>
        <div className={classes.Cap}>
          <span
            className={
              type === "Increment" ? classes.Increment : classes.CaptionName
            }
          >
            {type}
          </span>
          <span className={classes.CaptionDate}>Monitored Monthly</span>
        </div>
      </span>
      <span>
        <SimpleLineChart type={type} />
      </span>
    </div>
  );
};

export default Box;
