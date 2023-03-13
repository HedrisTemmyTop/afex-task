import classes from "../../../styles/Main.module.css";
import React from "react";
import Board from "./Board";

interface Props {
  name: string;
}

const Boards: React.FC<Props> = ({ name }) => {
  const boards = [{}, {}, {}, {}, {}, {}, {}];
  return (
    <div className={classes.Board}>
      <h3 className={classes.BoardHeading}>{name}</h3>
      <div className={classes.BoardBox}></div>
      <div className={classes.BoardHead}>
        <span>Product</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Action</span>
      </div>
      {boards.map((board, i) => (
        <Board key={i} index={i} lastIndex={boards.length - 1} name={name} />
      ))}
    </div>
  );
};

export default Boards;
