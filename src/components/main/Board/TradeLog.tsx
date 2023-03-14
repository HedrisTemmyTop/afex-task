import React from "react";
import classes from "../../../styles/Main.module.css";

interface TradeLogProps {
  index: number;
  lastIndex: number;
  trade: any;
  name: string;
}

const TradeLog = (props: TradeLogProps) => {
  const { index, lastIndex, trade, name } = props;
  const {
    order_type,
    security_code,
    matched_qty,
    order_price,
    created,
    board_type,
  } = trade;
  const matched_price = matched_qty * order_price;

  // DATE
  const dateObj: any = new Date(created);
  const day: number = dateObj.getDate();
  const month: string = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(dateObj);
  const year: number = dateObj.getFullYear();
  const date: string = `${day}th, ${month} ${year}`;

  const time: string = `${dateObj.getHours()}:${dateObj.getMinutes()}`;

  return (
    <div
      className={classes.TradeLogContent}
      style={
        index === lastIndex ? { borderBottom: 0, paddingBottom: 0 } : undefined
      }
    >
      <span className={classes.ProductName}>{security_code}</span>
      <span className={classes.ProductName}>{board_type}</span>
      <span>{order_type}</span>
      <span>{matched_price}</span>
      <span>{matched_qty}</span>
      <span>{date}</span>
      <span>{time}</span>
    </div>
  );
};

export default TradeLog;
