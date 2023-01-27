import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import './newsidenav.css'
import $ from 'jquery';
import avtar from '../../Assets/avtart.png'

import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const NewSideNav = ({ name, secondSection }) => {

  const [widthside, setWidthside] = useState(window.innerWidth);

  window.addEventListener('resize', function () {
    setWidthside(window.innerWidth);
  });

  useEffect(() => {

    if (widthside < 600) {
      console.log("HIi")
      document.getElementById('dashboardSidenav').style.display = 'none';
    }
    else{
      document.getElementById('dashboardSidenav').style.display = 'block';
    }

  }, [widthside])

  const [cookies, setCookie] = useCookies('theme');

  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    console.log("changed")

    if (theme === "light-theme") {
      setTheme('dark-theme');
      $('body').addClass("dark-theme");
      $('body').removeClass("light-theme");
      setCookie('theme', 'dark-theme', { path: '/' })
      document.getElementById('darkTheme').style.visibility = "visible";
      document.getElementById("lightTheme").style.visibility = "hidden";
      
    }
    else {
      setTheme('light-theme');
      setCookie('theme', 'light-theme', { path: '/' })
      $('body').addClass("light-theme");
      $('body').removeClass("dark-theme");
      document.getElementById('lightTheme').style.visibility = "visible";
      document.getElementById("darkTheme").style.visibility = "hidden";
    }
  }

  useEffect(() => {

    if (cookies.theme) {
      var value = cookies.theme;
      if (value === 'light-theme') {
        document.body.className = value;
        document.getElementById('lightTheme').style.visibility = "visible";
        document.getElementById("darkTheme").style.visibility = "hidden";
      }
      else {
        document.body.className = value;
        document.getElementById('darkTheme').style.visibility = "visible";
        document.getElementById("lightTheme").style.visibility = "hidden";
      }
      
    }
    else {
      document.body.className = 'light-theme';
      document.getElementById('lightTheme').style.visibility = "visible";
      document.getElementById('darkTheme').style.visibility = "hidden";

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div id='sidenavMain'>
      <div className="dashboardsidenav" id='dashboardSidenav'>
        <div className="theme1" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/"><h2 style={{ textAlign: 'center' }}>Webnart</h2></a>
          
          <span id='themeToggleButton' onClick={toggleTheme}>
            <DarkModeIcon id='darkTheme'/>
            <WbSunnyIcon id='lightTheme'/>
          </span>
        </div>

        <div className=''>
          {/* <h4 style={{ textAlign: 'left', paddingLeft: '5%' }}>Profile</h4> */}
          {name.map((list, i) => (

            <a href={list.href} key={i}> <li>{list.icon}{list.name}</li></a>

          ))}
        </div>
        <hr />
        <div className='secondSection'>
          {secondSection?.map((list, i) => (
            <a href={list.href} key={i}> <li>{list.icon}{list.name}</li></a>
          ))}
        </div>
        
        <div className="profile_id">
          <img src={avtar} alt="" />
          <p>username <span><KeyboardArrowUpIcon /></span></p>
        </div>

      </div>
    </div>
  )
}

export default NewSideNav