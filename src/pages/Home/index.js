import React from 'react';
import Hero from "../../components/Hero";
import About from "../../components/About";
import Uslugi from "../../components/Uslugi";
import Sena from "../../components/Sena";
import Trading from "../../components/Trading";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

const Home = () => {

    return (
        <div>
            <Hero/>
            <About/>
            <Uslugi/>
            <Sena/>
            <Trading/>
            <Title/>
            <Footer/>
        </div>
    );
};

export default Home;