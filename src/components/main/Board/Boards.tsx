import classes from "../../../styles/Main.module.css";
import React, { useEffect, useState } from "react";
import Board from "./Board";
import Loader from "../Loader/Loader";
import ErrorComponent from "../../errorHandler";
import axios from "axios";
import do_decrypt from "../../../lib/encryption";
interface Props {
  name: string;
}

const Boards: React.FC<Props> = ({ name }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [boardData, setboardData] = useState<null | any>(null);
  const [error, setError] = useState<null | any>(null);
  useEffect(() => {
    axios
      .get("https://comx-sand-api.afex.dev/api/securities/boards")
      .then((response: any) => {
        const data = do_decrypt(response.data);
        setboardData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
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
