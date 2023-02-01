import React,{useState}from 'react'
import './Navbar.css'
import $ from 'jquery'
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const[hidden, setShow] = useState("Hidden")
    const togglebtn=()=>{
        if(hidden){
            $("#dashboardSidenav").toggle('slow');
            setShow("show")
        }
    }

  return (
    <div className="signup__navbar login_nav" id='hamburger'>
        <span id='hamb'><MenuIcon id='togglebtn hamb' onClick={togglebtn}/></span>
    </div>
  )
}

export default Navbar