import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/index"
import Web3 from "web3";

function App() {
  useEffect(() => {
    if (window.ethereum) {
      // 👇 This is the way we request account with Metamask API
      // window.ethereum
      //   .request({
      //     method: "eth_requestAccounts",
      //   })
      //   .then((accounts) => console.log(accounts));

      // 👇 This is the way we request account with web3 JS API
      // Web3(window.ethereum); --> window.ethereum is the provider
      const web3 = new Web3(window.ethereum);
      web3.eth.requestAccounts().then(console.log);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
