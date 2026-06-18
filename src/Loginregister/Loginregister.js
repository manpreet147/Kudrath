import React, { useEffect, useState } from 'react';
import './Loginregister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Checkbox, FormControlLabel, FormGroup, Input, InputLabel, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';



const Loginregister = ({ onNavigateAway }) => {

  const [action, setAction] = useState('');
  const [formData, setFormData] = useState({
    email: "", password: ""
  });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const registerLink = () => {
    setAction(' active');
  };

  const loginLink = () => {
    setAction('');
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        onNavigateAway()
        alert("Login successful");
      }
      else {
        alert("Unable to Login!")
      }
    } catch (error) {
      console.error(error);
    }

  }

  const handleRegister = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Capture form data (you can use useState for controlled inputs)
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log("Registering:", { username, email, password });

    // Call your FastAPI backend (replace with actual API call)
    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Registration successful:", data))
      .catch((error) => console.error("Error:", error));
  };


  return (
    <div className={`wrapper${action}`} >
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <TextField label="Email" value={formData.email || ""} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password || ""}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormGroup>
            <FormControlLabel required control={<Checkbox />} label="Required" />
          </FormGroup>

          <button type="submit">Login</button>

          <div className='register-link'>
            <p>Don't have an account? <a href='#' onClick={registerLink}>Register</a></p>
          </div>
        </form>
      </div >

      {/* Registration */}
      <div className='form-box register'>
        <form onSubmit={handleRegister}>
          <h1>Registration</h1>

          <div className='input-box'>
            <input type="text" name="username" placeholder="Username" required />
            <FaUser className='icon' />
          </div>

          <div className='input-box'>
            <input type="email" name="email" placeholder="Email" required />
            <FaEnvelope className='icon' />
          </div>

          <div className='input-box'>
            <input type="password" name="password" placeholder="Password" required />
            <FaLock className='icon' />
          </div>

          <div className='remember-forgot'>
            <label>
              <input type="checkbox" />I agree to the Terms & conditions
            </label>
          </div>

          <button type="submit">Register</button>

          <div className='register-link'>
            <p>
              Already have an account?{" "}
              <a href="#" onClick={loginLink}>Login</a>
            </p>
          </div>
        </form>
      </div>
    </div >

  );
};

export default Loginregister;