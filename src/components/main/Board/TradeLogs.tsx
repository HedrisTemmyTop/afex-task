import React, { useEffect, useState } from "react";

import classes from "../../../styles/Main.module.css";
import Loader from "../Loader/Loader";
import TradeLog from "./TradeLog";

import do_decrypt from "../../../lib/encryption";

interface TradeLogsProps {
  name: string;
}

const TradeLogs = ({ name }: TradeLogsProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [trades, setTrades] = useState<null | any>(null);
  const [error, setError] = useState<null | any>(null);

  useEffect(() => {
    const socket = new WebSocket("wss://comx-sand-api.afex.dev/stream/trades");
    socket.onopen = () => {
      setLoading(true);
    };
    socket.onmessage = (event) => {
      const response = JSON.parse(event.data);
      const data = do_decrypt(response);

      setTrades(data);
      setLoading(false);
    };
    socket.onclose = () => {
      setLoading(false);
    };
    socket.onerror = (errorMessage) => {
      setError(errorMessage);
    };
  }, []);
  // CONDITIONAL RENDERING
  let content: JSX.Element | any = null;
  if (loading) content = <Loader />;
  if (trades && !loading) {
    content = (
      <div className={classes.Board}>
        <h3 className={classes.BoardHeading}>{trades.message}</h3>
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
        {trades.messages.map((trade: any, i: number) => (
          <TradeLog
            key={i}
            index={i}
            lastIndex={trades.messages.length - 1}
            name={name}
            trade={trade}
          />
        ))}
      </div>
    );
  }

  if (error && !loading) content = <div>Something went wrong</div>;

  return <div>{content}</div>;
};

export default TradeLogs;
