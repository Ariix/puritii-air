import React from "react";
import Menu from "./components/Menu";
import Rebate from "./components/rebate";
import Dark from "./components/DarkFilter";
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
