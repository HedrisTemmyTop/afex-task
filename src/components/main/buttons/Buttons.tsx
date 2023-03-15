import React from "react";
import classes from "../../../styles/Main.module.css";
interface ButtonsInterface {
  name: string;
  active: boolean;
  quantity: string;
}
const Buttons: React.FC<ButtonsInterface> = ({ name, active, quantity }) => {
  return (
    <div className={active ? classes.active : classes.btn}>
      <span>{name}</span>
      {quantity ? <span className={classes.Quantity}>{quantity} </span> : null}
    </div>
  );
};

export default Buttons;
