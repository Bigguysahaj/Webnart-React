import React from 'react'
import './workshop-form.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'

const Workshopregistration = () => {
  
  const [success,setSuccess]= useState(false);
  const [user, setUser]= useState({
    fullname:"",
    branch:"",
    year:"",
    section:"",
    roll:"",
    email:"",
    phone:"",
    preknowledge:"",
  })

  useEffect(() => {
    if(user.fullname ==="" || user.phone ==="" || user.email ==="" || user.year ==="" || user.branch ==="" || user.section ==="" || user.roll ===""){
      document.getElementById("submit-btn").setAttribute('disabled',true);
    }
    else{
      console.log('entered')
      document.getElementById("submit-btn").removeAttribute('disabled');
      console.log('exit')
    }
  }, [user])
  

  const disable=()=>{
    const data = document.getElementsByTagName('input');
    if(data===""){
      console.log("no data found");
    }
    else{
      console.log();
    }
  }
  disable();
  
  const register=()=>{
    console.log(user);
    document.getElementById("submit-btn").setAttribute('disabled',true);
    axios.post('https://workshop-zgnx.onrender.com/register', {
    // axios.post('http://localhost:5001/register', {
      FullName:user.fullname,
      Branch:user.branch,
      Year:user.year,
      Section:user.section,
      Roll:user.roll,
      Email:user.email,
      Phone:user.phone,
      Preknowledge:user.preknowledge
  })
  .then(function (response) {
    // console.log(response);
    if(response.data.err){
      return alert(response.data.err);
    }
    setSuccess(true);
  })
  .catch(function (error) {
    console.log(error);
  });
}


  let name,value;
  const handleinput=async(e)=>{
    // console.log(e);
    name=e.target.name;
    value=e.target.value;
    await setUser({...user,[name]:value});
  }



  const close=()=>{
    document.getElementsByClassName('popup')[0].style.display="none"
  }


  // const rangecss={
  //   color:'white'
  // }

  return (
    <div id='workshop'>
        <Navbar/>
        {
        success ?(
            <section style={{'text-align':'center'}}>
                <h1>Submitted Successfully!</h1>
            </section>
        ):
        ( 
        <div className="form-div col-lg-5 col-md-8 col-sm-12">
          <div className="heading">
            <h2>React Js Workshop Registration</h2>
          </div>
          <div className='form-group workshop-form'>
              <label htmlFor="">Name <span>*</span></label>
              <input className="form-control" type = "text" name = "fullname" id = "name"  autoComplete='off' placeholder='Full Name'onChange={handleinput} value={user.fullname}  required/>
              
              <label htmlFor="">Branch <span>*</span></label>
              <input className="form-control" type = "text" name = "branch" id = "branch" autoComplete='off' placeholder='Branch' maxLength={3} onChange={handleinput} value={user.branch} autoCapitalize="true" required/>
              
              <div className="yrr-sec">
                <div className="input-field">
                  <label htmlFor="">Year <span>*</span></label>
                  <input className="form-control yr" type = "number" name = "year" id = "year" autoComplete='off' placeholder='Year' maxLength={1} minLength={1} max={4} min={2} onChange={handleinput} value={user.year}  required/> 
                </div>
                
                <div className="input-field" style={{'marginLeft':'10px'}}>
                  <label htmlFor="">Section <span>*</span></label>
                  <input className="form-control yr" type = "text" name = "section" id = "section" autoComplete='off' placeholder='Section' maxLength={1} minLength={1} min={2} onChange={handleinput} value={user.section}  required/> 
                </div>
              </div>
              
              <label htmlFor="">Roll No. <span>*</span></label>
              <input className="form-control" type = "text" name = "roll" id = "roll"  autoComplete='off' placeholder='Roll No.'onChange={handleinput} value={user.roll}  required/>
              
              <label htmlFor="">Email <span>*</span></label>
              <input className="form-control" type = "email" name = "email" id = "email"  autoComplete='off' placeholder='Email'onChange={handleinput} value={user.email}  required/>
              
              <label htmlFor="">Contact No. <span>*</span></label>
              <input className="form-control" type = "tel" name = "phone" id = "phone"  autoComplete='off' placeholder='10 Digit Contact No.'onChange={handleinput} value={user.phone} minLength={10} maxLength={10} required/>
              <span>Do not include +91-</span>
              
              <label htmlFor="">Pre Aquired Knowledge   (if don't know any thing leave blank!)</label>
              <input className="form-control" type = "text" name = "preknowledge" id = "preknowledge" autoComplete='off' placeholder='Any Knowledge about web-Dev...' onChange={handleinput} value={user.preknowledge} />
              <span>Insert Data Seprated with comma " , ".</span>
              
              {/* <label htmlFor="">Attendance(%) <span>*</span></label>
              <input className="form-control attend" type = "range" name = "attendance" id = "attendance" autoComplete='off' placeholder='Attendance' onChange={handleinput} value={user.attendance}  required/> 
              <h4 id='valuee' style={rangecss}>{user.attendance} %</h4>
              <span>Attendance till 2nd Nov 2022.</span> */}
                

              
              <button className="workshop_btn btn btn-sm btn-success" id='submit-btn' onClick={register}>Submit </button>
          </div>
        </div>
         )
        } 
        <div className='popup'>
          <div className='popupdata'>
            <h1>Important Notice</h1>
            <h2 style={{'color':'red'}}>Prerequisites: HTML, CSS, JavaScript</h2>
            <ul>
              <li>Time: To be Notify Soon</li>
              <li>Date: 20 Feb 2023 to 24 Feb 2023</li>
              <li>Venue: TO be Notify Soon</li>
              <li>Rohan Kumar
                <ul>8368519963</ul>
              </li>
              <li>Shashank Chaurasia
                <ul>9756705938</ul>
              </li>
              <li>Ritik Jain
                <ul>9759464515</ul>
              </li>
            </ul>
            <button className='cross btn btn-danger' onClick={close}>Close</button>
          </div>
        </div>
    </div>
  )
}

export default Workshopregistration;


