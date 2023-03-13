import "./App.css";
import Layout from "./components/Layout";
import React, { useEffect, useState } from "react";
import { do_decrypt_data } from "./lib/encryption.js";

function App(): JSX.Element {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    // const ws = new WebSocket(
    //   "wss://comx-sand-api.afexnigeria.com/stream/trades"
    // );m
    // ws.onopen = () => {
    //   console.log("WebSocket connected");
    // };
    // ws.onmessage = (event) => {
    //   const key = "uEKBcN7kMKayW6SF8d0BtaJq60Musbp0";
    //   const vector = "hA7wB3e4v87ihj6R";
    //   let v =
    //     "K+zZsAuzkyL6zlQ6IBzfATpVQ/NmcERk28k5KVW306DlOUZIqG5KaTbOUiAJLwl/";
    //   const o = do_decrypt_data(key, vector, v);
    //   console.log(o);
    // };
    // ws.onclose = () => {
    //   console.log("WebSocket disconnected");
    // };
    // setSocket(ws);
    // return () => {
    //   if (ws.readyState === WebSocket.OPEN) {
    //     ws.close();
    //   }
    // };
  }, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
