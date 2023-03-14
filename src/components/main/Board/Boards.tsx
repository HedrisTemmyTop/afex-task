import classes from "../../../styles/Main.module.css";
import React, { useEffect } from "react";
import Board from "./Board";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoardData } from "../../../store/slices/boardSlice";
import Loader from "../Loader/Loader";
import ErrorComponent from "../../errorHandler";

interface Props {
  name: string;
}

const Boards: React.FC<Props> = ({ name }) => {
  const dispatch = useDispatch();
  const { boardData, loading, error } = useSelector(
    (state: any) => state.boards
  );
  useEffect(() => {
    dispatch(fetchBoardData() as any);
  }, []);
  let content = null;
  if (loading) content = <Loader />;
  if (!loading && boardData) {
    content = (
      <div className={classes.Board}>
        <h3 className={classes.BoardHeading}>{name}</h3>
        <div className={classes.BoardBox}></div>
        <div className={classes.BoardHead}>
          <span>Product</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Action</span>
        </div>
        {name === "Buy Board"
          ? boardData.data
              .filter((board: any) => board.can_be_bought === "True")
              .map((board: any, i: number) => (
                <Board
                  key={i}
                  index={i}
                  lastIndex={boardData.data.length - 1}
                  name={name}
                  board={board}
                />
              ))
          : boardData.data
              .filter((board: any) => board.can_be_sold === "True")
              .map((board: any, i: number) => (
                <Board
                  key={i}
                  index={i}
                  lastIndex={boardData.data.length - 1}
                  name={name}
                  board={board}
                />
              ))}
      </div>
    );
  }
  if (!loading && error) {
    content = <ErrorComponent error={error} />;
  }
  return content;
};

export default Boards;
