import React from "react";
import About from "../components/About";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Jumbotron/>
            <About/>
            <Footer/>
        </div>
    );
}

export default Home