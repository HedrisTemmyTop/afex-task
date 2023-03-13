import React from "react";
import classes from "../../../styles/Main.module.css";

interface TradeLogProps {
  index: number;
  lastIndex: number;
  board: any;
  name: string;
}

const TradeLog = ({ index, lastIndex, board, name }: TradeLogProps) => {
  return (
    <div
      className={classes.TradeLogContent}
      style={
        index === lastIndex ? { borderBottom: 0, paddingBottom: 0 } : undefined
      }
    >
      <span className={classes.ProductName}>{board.security_code}</span>
      <span className={classes.ProductName}>{board.board}</span>
      <span>Sell</span>
      <span>{board.price}</span>
      <span>2003</span>
      <span>12th, Oct 2023</span>
      <span>07:38</span>
    </div>
  );
};

export default TradeLog;
