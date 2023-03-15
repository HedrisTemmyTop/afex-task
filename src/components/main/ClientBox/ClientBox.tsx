import React, { useEffect, useState } from "react";
import Box from "./Box";
import classes from "../../../styles/Main.module.css";
import do_decrypt from "../../../lib/encryption";
import Loader from "../Loader/Loader";
import ErrorComponent from "../../errorHandler";

const ClientBox: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<any | null>(null);
  const [error, setError] = useState<any | null>(null);
  useEffect(() => {
    const socket = new WebSocket(
      "wss://comx-sand-api.afex.dev/stream/client-positions?cid=9900153747"
    );
    socket.onopen = () => {
      setLoading(true);
    };
    socket.onmessage = (event) => {
      const response = JSON.parse(event.data);
      const data = do_decrypt(response);
      setUserData(data);
      setLoading(false);
    };
    socket.onclose = () => {
      setLoading(false);
    };
    socket.onerror = (errorMessage) => {
      setError(errorMessage);
    };
  }, []);
  let content: any | null = null;
  if (loading) content = <Loader />;
  if (!loading && userData) {
    content = (
      <section className={classes.Boxes}>
        <Box
          balance={userData.wallets.available_balance.toLocaleString()}
          type="Decline"
          name="Cash Balance"
        />
        <Box balance="8,374,763" type="Decline" name="Securities Value" />
        <Box
          name="Loan Balance"
          balance={userData.wallets.loan_repayment_balance.toLocaleString()}
          type="Increment"
        />
      </section>
    );
  }
  if (!loading && error) content = <ErrorComponent error={error} />;
  return content;
};

export default ClientBox;
