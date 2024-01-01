import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { authActions } from '../Store/Index'
import { useNavigate } from 'react-router-dom'
import '../User/Login.css'
import emailjs from "emailjs-com";

const Adminlogin=()=> {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({
    name: "", email: "", password: ""
  })
  const [isSignup, setisSignup] = useState(false)

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async (type = 'login') => {
    const res = await axios.post(`http://localhost:8000/admin/${type}`, {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    })
      .catch(err => console.log(err))
    const data = await res.data
    return data
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_e0z8e8p', 'template_2ga5xfm', e.target, 'D4AkR9r8JGeiHwq6A')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    sendRequest()
    if (isSignup) {
      sendRequest("signup")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispatch(authActions.login()))
        .then(() => sendEmail())
    } else {
      sendRequest()
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispatch(authActions.login()))
        .then(() => navigate("/adminhp"))
    }
  }
  return (
    <div style={{
      backgroundImage: `url("https://img.freepik.com/free-photo/videotape-with-popcorns-3d-glasses_23-2148133477.jpg?w=996&t=st=1654766721~exp=1654767321~hmac=8f0378d7f37564fe69beafb2085db00d994d685e742c07154ee34ee8c0968a48")`,
      display: 'block', backgroundSize: 'cover', height: "100vh", width: "100vw",
      backgroundAttachment: "fixed", backgroundRepeat: "no-repeat"
    }}>
      <section class="overflow-hidden" >
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start ">
          <div class="row gx-lg-5 align-items-center mb-3">
            <div class="col-lg-6 mb-5 mb-lg-0" style={{ margin: "2.5rem 0rem 0rem 15rem" }}>
              <div class="position-absolute rounded-circle shadow-5-strong"></div>
              <div class="position-absolute shadow-5-strong"></div>
              <div class="card bg-glass">
                <div class="card-body px-4 py-4 px-md-5">
                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      <h4 style={{ textAlign: "center" }}>{isSignup ? " Admin Signup" : "Admin Login"}</h4>
                      {isSignup && (<div class="col mb-4">
                        <div class="form-outline">
                          <label class="form-label">Name</label>
                          <input type="text" class="form-control" name="name" value={inputs.name} onChange={handleChange} />
                        </div>
                      </div>)}{""}
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label">Email address</label>
                      <input type="email" class="form-control" name="email" value={inputs.email} onChange={handleChange} />
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4">Password</label>
                      <input type="password" class="form-control" name="password" value={inputs.password} onChange={handleChange} />
                    </div>
                    {isSignup ? (<button className="btn btn-primary" onClick={()=>{alert('Registered Successful')}} type="submit">Register</button>) :
                     (<button className="btn btn-primary" onClick={()=>{alert('Login Successful')}} type="submit">Login</button>)}
                    <p className='mt-3' onClick={() => setisSignup(!isSignup)}>
                      {isSignup ? (<p>Click <span style={{ textDecoration: "underline", color: 'blue', cursor: 'pointer' }}>Here</span> to Login</p>) : (<p>Don't Have an Account? <span style={{ textDecoration: "underline", color: 'blue', cursor: 'pointer' }}>Register</span></p>)}{" "}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Adminlogin
