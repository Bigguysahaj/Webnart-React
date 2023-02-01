import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import HomePage from "./components/Homepage/HomePage"
import LatestProject from "./components/LatestProject/LatestProject"
import "./PortfolioMain.css"
import { useParams } from 'react-router-dom';
import { rohan } from './rohanPortfolio';
const PortfolioMain = () => {
    const { name } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        if (name === "rohan") {
            setDetails(rohan)
        }
        var r = document.querySelector(':root');

        r.style.setProperty('--background-main', rohan?.colorCombination[1]);
        r.style.setProperty('--light-brown', rohan?.colorCombination[3]);
        r.style.setProperty('--dark-brown', rohan?.colorCombination[3]);
        r.style.setProperty('--close-white', rohan?.colorCombination[0]);

        // eslint-disable-next-line
    }, [])
    return (
        <div className="portfolio-main">
            <Navbar logo={details?.logo} />
            <HomePage details={details} />
            <LatestProject projectsList={details?.projectsList} />
        </div>
    );
}

export default PortfolioMain