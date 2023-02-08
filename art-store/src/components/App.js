import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import About from "./About";
import Location from "./location";
import Item from "./Item";
import Grid from "./Grid";
import Data from "../ItemData";

function App() {
  return (
    <div>
      <Nav />
      <About />
      <div className="ITEM" id="item">
        {Data.map((value) => (
          <Item
            key={value.id}
            title={value.title}
            img={value.img}
            content={value.content}
          />
        ))}
      </div>
      <Grid />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
