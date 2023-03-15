import React from "react";
import { BiCandles } from "react-icons/bi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../store/slices/ModalSlice";
import classes from "../../../styles/Main.module.css";

const Head: React.FC = () => {
  const dispatch = useDispatch();
  const { openModal } = useSelector((state: any) => state.modal);

  const openModalHandler = () => {
    dispatch(toggleModal());
  };
  return (
    <section className={classes.Head}>
      <span>
        <h2>Market</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur.
        </div>
      </span>
      <span className={classes.Buttons}>
        <button onClick={openModalHandler}>
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
