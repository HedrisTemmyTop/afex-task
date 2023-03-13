import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBoardData } from "../../../store/slices/boards/boardSlice";
import classes from "../../../styles/Main.module.css";
import Loader from "../../Loader/Loader";
import TradeLog from "./TradeLog";
import data from "./data";

interface TradeLogsProps {
  name: string;
}

const TradeLogs = ({ name }: TradeLogsProps): JSX.Element => {
  const dispatch = useDispatch();
  const { boardData, loading, error } = useSelector(
    (state: any) => state.boards
  );

  useEffect(() => {
    dispatch(fetchBoardData() as any);
  }, [dispatch]);

  // CONDITIONAL RENDERING
  let content: JSX.Element | any = null;
  if (loading) content = <Loader />;
  if (boardData) {
    content = (
      <div className={classes.Board}>
        <h3 className={classes.BoardHeading}>{boardData.message}</h3>
        <div className={classes.BoardBox}></div>
        <div className={classes.TradeLogHead}>
          <span>Security</span>
          <span>Board</span>
          <span>Order Type</span>
          <span>Matched Price</span>
          <span>Quantity</span>
          <span>Date</span>
          <span>Time</span>
        </div>
        {boardData.data.map((board: any, i: number) => (
          <TradeLog
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

  // SUDDENLY THE REQUEST IS NOT GOING AND NOT RETURNING ERROR IT SEEMS THE SSL CERTIFICATE ON THE SERVER HAS EXPIRED
  if (!error && !loading && !boardData)
    content = (
      <div className={classes.Board}>
        <h3 className={classes.BoardHeading}>{data.message}</h3>
        <div className={classes.BoardBox}></div>
        <div className={classes.TradeLogHead}>
          <span>Security</span>
          <span>Board</span>
          <span>Order Type</span>
          <span>Matched Price</span>
          <span>Quantity</span>
          <span>Date</span>
          <span>Time</span>
        </div>
        {data.data.map((board: any, i: number) => (
          <TradeLog
            key={i}
            index={i}
            lastIndex={data.data.length - 1}
            name={name}
            board={board}
          />
        ))}
      </div>
    );
  if (error && !loading) content = <div>Something went wrong</div>;

  return content;
};

export default TradeLogs;
