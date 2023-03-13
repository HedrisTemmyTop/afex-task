import React from "react";
import classes from "../../../styles/Main.module.css";

interface Props {
  index: number;
  lastIndex: number;
  name: string;
}

const Board: React.FC<Props> = ({ index, lastIndex, name }) => {
  return (
    <div
      className={classes.BoardContent}
      style={
        index === lastIndex ? { borderBottom: 0, paddingBottom: 0 } : undefined
      }
    >
      <span className={classes.ProductName}>Soybeans(SSBS)</span>
      <span className={classes.ProductName}>2003</span>
      <span className={name === "Buy Board" ? classes.Price : classes.Sell}>
        6,471.49
      </span>
      <span>
        <span
          className={
            name === "Buy Board" ? classes.Increment : classes.CaptionName
          }
        >
          Buy
        </span>
      </span>
    </div>
  );
};

export default Board;
