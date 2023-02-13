import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { Menu } from '@mui/icons-material';

const Navbar = ({ logo }) => {
    const [navColor, setNavColor] = useState("none")
    window.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight) {
            setNavColor("var(--background-main)")
        } else {
            setNavColor("#ffffff00")
        }
    });

    const [navDisplay, setNavDisplay] = useState("none")
    const menuClick = () => {

        if (navDisplay === "block") {
            setNavDisplay("none")
        } else {
            setNavDisplay("block")
        }
    }
    useEffect(() => {
        if (window.innerWidth < 700) {
            setNavDisplay("none")
        } else {
            setNavDisplay("block")
        }
    }, [])
    window.addEventListener("resize", () => {
        if (window.innerWidth < 700) {
            setNavDisplay("none")
        } else {
            setNavDisplay("block")
        }
    });
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    let logoFinal = "https://drive.google.com/uc?id=" + logo?.replace("https://drive.google.com/file/d/", "").replace("/view?usp=share_link", "")
    return (
        // https://drive.google.com/file/d/1qAXdT6MsJi1iaVAEdrddHGz6WNOTOQkh/view?usp=share_link

        <div className='nav-main' style={{ backgroundColor: navColor }}>
            <div onClick={scrollTop} className='logoDiv'>
                <img className="logoBrown" src={logoFinal} alt="logo" />
            </div>
            <div className='nav-itemsDiv'>
                <Menu onClick={menuClick} className='menuIcon' />
                <div className='nav-items' style={{ display: navDisplay }} id="navItems">
                    <a href="#home">Home</a>
                    <a href="#project">Project</a>
                    <a href="#about">About Me</a>
                    <a href="#contact" className='contactAchor'>Contact Me</a>
                </div>

            </div>
            <button onClick={() => {
                window.location.href = "#contact"
            }} className='contactBtn'>
                Contact Me
            </button>
        </div>
    )
}

export default Navbar