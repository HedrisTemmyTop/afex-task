import React from "react";
import classes from "../../styles/Main.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Head from "./Head";
import Box from "./box";
import Btn from "./buttons/button";
import Boards from "./Board/Boards";
import TradeLog from "./Board/TradeLogs";
import LiveMarket from "./LiveMarket/LiveMarket";

const Main: React.FC = () => {
  return (
    <main className={classes.Main}>
      <section className={classes.Path}>
        <span>Home</span>
        <MdOutlineKeyboardArrowRight className={classes.Icon} />
        <span className={classes.Market}>Market</span>
      </section>
      <Head />
      <section className={classes.Boxes}>
        <Box balance="8,374,763" type="Decline" name="Cash Balance" />
        <Box balance="8,374,763" type="Decline" name="Securities Value" />
        <Box name="Loan Balance" balance="8,374,763" type="Increment" />
      </section>
      <Btn />
      <section className={classes.BoardsContainer}>
        <section className={classes.Boards}>
          <Boards name="Buy Board" />
          <Boards name="Sell Board" />
        </section>
        <TradeLog name="Trade Log" />
      </section>
      <LiveMarket />
    </main>
  );
};

export default Main;
