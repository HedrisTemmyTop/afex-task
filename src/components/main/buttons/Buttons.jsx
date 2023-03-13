import classes from "../../../styles/Main.module.css";

const Buttons = ({ name, active, quantity }) => {
  return (
    <div className={active ? classes.active : classes.btn}>
      <span>{name}</span>
      {quantity ? <span className={classes.Quantity}>{quantity} </span> : null}
    </div>
  );
};

export default Buttons;
