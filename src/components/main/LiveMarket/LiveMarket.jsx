import classes from "../../../styles/Main.module.css";
import { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchLiveMarketData } from "../../../store/slices/LiveMarketSlice";
import Loader from "../Loader/Loader";
import ErrorComponent from "../../errorHandler";
const LiveMarket = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { loading, error, market } = useSelector((state) => state.market);

  useEffect(() => {
    dispatch(fetchLiveMarketData());
  }, []);
  let content = null;
  if (loading) content = <Loader />;
  if (!loading && market)
    content = (
      <marquee behavior="alternate" className={classes.Marquee} speed={20}>
        <div className={classes.MarqueeContent}>
          {market.map((market, i) => (
            <span key={i}>
              <div>{market.security_code}</div>
              <div>₦{market.price.toLocaleString()}</div>
            </span>
          ))}
        </div>
      </marquee>
    );
  if (!loading && error) {
    content = <ErrorComponent error={error} />;
  }
  return (
    <div className={classes.LiveMarket}>
      <button className={classes.LiveBtn}>Live Market</button>

      {content}
    </div>
  );
};

export default LiveMarket;
