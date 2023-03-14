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
// Decrypt
// const secretKey = "uEKBcN7kMKayW6SF8d0BtaJq60Musbp0";
// const encryptedData = event.data;
// const decryptedData = CryptoJS.AES.decrypt(
//   encryptedData,
//   secretKey
// ).toString(CryptoJS.enc.Utf8);
// console.log(decryptedData);
// var bytes = CryptoJS.AES.decrypt("BjSCHBXRMzdwZrSmdvLHkA==", secretKey);
// var originalText = bytes.toString(CryptoJS.enc.Utf8);
// console.log(originalText);

// var bytes = CryptoJS.AES.decrypt(
//   event.data,
//   ""
// );
// var originalText = bytes.toString(CryptoJS.enc.Utf8);

// console.log(originalText); // 'my message'     // console.log(event.data);
// const key = "uEKBcN7kMKayW6SF8d0BtaJq60Musbp0";
// const vector = "hA7wB3e4v87ihj6R";
// let v =
//   "K+zZsAuzkyL6zlQ6IBzfATpVQ/NmcERk28k5KVW306DlOUZIqG5KaTbOUiAJLwl/";
// const o = do_decrypt_data(key, vector, v);
// console.log(o);
// var CryptoJS = require("crypto-js");

// Encrypt
// var ciphertext = CryptoJS.AES.encrypt(
//   "my message",
//   "secret key 123"
// ).toString();
