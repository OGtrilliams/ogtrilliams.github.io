import React from "react";
import Head from "./components/Head/Head";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Stickers from "./components/Stickers/Stickers";

function App() {
  return (
    <>
      <div className="notebook-container">
        <div className="paper">
          <div className="content-container">
            <Head />
            <Navbar />
            <Stickers />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
