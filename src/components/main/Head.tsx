import React from "react";
import { BiCandles } from "react-icons/bi";
import { HiOutlineChevronDown } from "react-icons/hi";
import classes from "../../styles/Main.module.css";

const Head: React.FC = () => {
  return (
    <section className={classes.Head}>
      <span>
        <h2>Market</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur.
        </div>
      </span>
      <span className={classes.Buttons}>
        <button>
          <span>Page Settings</span>
          <BiCandles />
        </button>
        <button>
          <span>Demo</span>
          <HiOutlineChevronDown />
        </button>
      </span>
    </section>
  );
};

export default Head;
