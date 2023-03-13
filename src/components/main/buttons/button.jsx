import Buttons from "./Buttons";
import classes from "../../../styles/Main.module.css";

const Btn = () => {
  const buttons = [
    { name: "Product View" },
    { name: "Order Book", active: true },
    { name: "Price History" },
    { name: "Open Orders", quantity: 10 },
    { name: "Closed Trades", quantity: 20 },
    { name: "Cancelled Trades", quantity: 20 },
  ];
  return (
    <section className={classes.Btns}>
      {buttons.map((btn, i) => (
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
