import classes from "../../../styles/Main.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import ErrorComponent from "../../errorHandler";
import do_decrypt from "../../../lib/encryption";
const LiveMarket = () => {
  const [loading, setLoading] = useState(true);
  const [market, setMarket] = useState(null);
  const [error, setError] = useState(null);
  // const { loading, error, market } = useSelector((state) => state.market);

  useEffect(() => {
    axios
      .get("https://comx-sand-api.afex.dev/api/security-price/live")
      .then((response) => {
        const { data } = do_decrypt(response.data);
        setMarket(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
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
