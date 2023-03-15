import "./App.css";
import Layout from "./components/Layout";
import React, { useEffect, useState } from "react";
// import { do_decrypt_data } from "./lib/encryption.js";
// import CryptoJS from "crypto-js";
// import CryptoJS from "crypto-js";
import CryptoJS from "crypto-js";
import axios from "axios";
import Cipher from "@ibnlanre/cipher";
function App(): JSX.Element {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
