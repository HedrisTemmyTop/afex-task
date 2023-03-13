import classes from "../../../styles/Main.module.css";

const LiveMarket = () => {
  return (
    <div className={classes.LiveMarket}>
      <button className={classes.LiveBtn}>Live Market</button>
      <marquee behavior="alternate" className={classes.Marquee}>
        <div className={classes.MarqueeContent}>
          <span>
            <div>Maize(SMAZ)</div>
            <div>N30,887.59</div>
          </span>{" "}
          <span>
            <div>Maize(SMAZ)</div>
            <div>N30,887.59</div>
          </span>
          <span>
            <div>Maize(SMAZ)</div>
            <div>N30,887.59</div>
          </span>{" "}
          <span>
            <div>Maize(SMAZ)</div>
            <div>N30,887.59</div>
          </span>
          <span>
            <div>Maize(SMAZ)</div>
            <div>N30,887.59</div>
          </span>{" "}
          <span>
            <div>Maize(SMAZ)</div>
            <div>N30,887.59</div>
          </span>
          <span>
            <div>Maize(SMAZ)</div>
            <div>N30,887.59</div>
          </span>{" "}
        </div>
      </marquee>
    </div>
  );
};

export default LiveMarket;
