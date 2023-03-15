import React from "react";
import Buttons from "./Buttons";
import classes from "../../../styles/Main.module.css";

const Btn: React.FC = () => {
  const buttons: [any, any, any, any, any, any] = [
    { name: "Product View" },
    { name: "Order Book", active: true },
    { name: "Price History" },
    { name: "Open Orders", quantity: 10 },
    { name: "Closed Trades", quantity: 20 },
    { name: "Cancelled Trades", quantity: 20 },
  ];
  return (
    <section className={classes.Btns}>
      {buttons.map((btn: any, i: number) => (
        <Buttons
          key={i}
          name={btn.name}
          active={btn.active}
          quantity={btn.quantity}
        />
      ))}
    </section>
  );
};

export default Btn;
