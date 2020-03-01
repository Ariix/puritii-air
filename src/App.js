import React from "react";
import Menu from "./components/Menu";
import Rebate from "./components/rebate";
import Dark from "./components/DarkFilter";
import Dark2 from "./components/Dark2";
import Light from "./components/LightFilter";
import Couch from "./components/CouchFilter";
import Hepa from "./components/HepaFilter";
import PureHepa from "./components/PureHepa";
import Kid from "./components/KidFilter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Rebate></Rebate>
      <Dark></Dark>
      <Dark2></Dark2>
      <Light></Light>
      <Couch></Couch>
      <Hepa></Hepa>
      <PureHepa></PureHepa>
      <Kid></Kid>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
