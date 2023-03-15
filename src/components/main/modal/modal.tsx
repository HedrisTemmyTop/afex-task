import React, { useRef, useState } from "react";
import classes from "../../../styles/Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../store/slices/ModalSlice";

const Modal: React.FC = () => {
  const [reset, setReset] = useState<boolean>(false);
  const [apply, setApply] = useState<boolean>(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const { openModal } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) dispatch(toggleModal());
  };

  return openModal ? (
    <div className={classes.Container} onClick={handleClose} ref={modalRef}>
      <div className={classes.Body}>
        <div className={classes.Content}>
          <h3>Page Settings</h3>
          <div className={classes.ButtonsBox}>
            <div className={classes.ButtonsHead}>Board</div>
            <div className={classes.Buttons}>
              <button>X-Traded</button>
              <button>OTC</button>
              <button>F1</button>
              <button>Deivatives</button>
            </div>
            <div className={classes.ButtonsHead}>Board</div>
            <div className={classes.Buttons}>
              <button>All</button>
              <button>SBBS</button>
              <button>SPRL</button>
              <button>SGNG</button>
              <button>SMAZ</button>
              <button>SGNG</button>
              <button>SSGM</button>
              <button>FETC</button>
            </div>
          </div>
          <div className={classes.CheckBox}>
            <input type="checkbox" />
            <div>Sticky header</div>
          </div>
          <div className={classes.Line}></div>
          <div className={classes.Btns}>
            <div>
              <button
                className={reset ? classes.Active : undefined}
                onClick={() => {
                  setReset(true);
                  setApply(false);
                }}
              >
                Reset
              </button>
              <button
                className={apply ? classes.Active : undefined}
                onClick={() => {
                  setReset(false);
                  setApply(true);
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
