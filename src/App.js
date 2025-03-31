import './App.css';

import Footer from './Assets/Footer';
import Food from './Assets/Food';
import Button from './Assets/Button';
import Plants from './Assets/Plants';
import UserGreeting from './Assets/UserGreeting';
import Navbar from './Assets/Navbar';
import List from './Assets/List';
import ProfilePic from './Assets/ProfilePic';
import MyComponent from './Assets/MyComponent/MyComponent';
import MyComponent1 from './Assets/MyComponent/MyComponent1';
import Carousel from './Assets/Carousel';
import DigitalClock from './Assets/DigitalClock';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Loginregister from './Loginregister/Loginregister';
import { colors } from '@mui/material';
import { red } from '@mui/material/colors';

// const Counter = () => {
//   const count = useSelector((state) => state); // Ensure this matches your reducer structure
//   const dispatch = useDispatch();
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//     </>
//   );
// };

const App = () => {
  // const fruits = [
  //   { id: 1, name: 'Apple', calories: 6 },
  //   { id: 2, name: 'Strawberry', calories: 26 },
  //   { id: 3, name: 'Mango', calories: 16 },
  //   { id: 4, name: 'Litchi', calories: 32 },
  //   { id: 5, name: 'Raspberry', calories: 56 },
  // ];

  // const vegetables = [
  //   { id: 1, name: 'Potato', calories: 46 },
  //   { id: 2, name: 'Tomato', calories: 65 },
  //   { id: 3, name: 'Kadu', calories: 75 },
  //   { id: 4, name: 'Methi', calories: 82 },
  //   { id: 5, name: 'Palak', calories: 96 },
  // ];

  const[showNavbar, setShowNavbar] = useState(true);

  const handleLoginClick = () => {
    setShowNavbar(false);
  }

  const handleNavigateAwayFromLogin = () => {
    setShowNavbar(true);
  }

  console.log(":::",showNavbar)

  return (
    <Router>
      {showNavbar && <Navbar onLoginClick={handleLoginClick} />}
      <div className="main-content">
        <Routes>
          <Route path='/' />
          <Route path='/about' element={<h1 style={{color: red}}>About Page</h1>} />
          <Route path='/contact' element={<h1>Contact Page</h1>} />
          <Route path='/login' element={<Loginregister onNavigateAway={handleNavigateAwayFromLogin} />} />
        </Routes>
      </div>

    </Router>
    // <>
    //   {/* <DigitalClock />
    //   <Loginregister /> */}



    //   {/* <UserGreeting isLoggedIn={true} username="Manpreet" />
    //   <Carousel />
    //   <Food />
    //   <Counter />
    //   <MyComponent1 />
    //   {fruits.length > 0 && <List items={fruits} category="Fruits" />}
    //   {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
    //   <Button />
    //   <ProfilePic />
    //   <MyComponent />
    //   <Plants name="Tomato" harvest={10} isPlant={true} />
    //   <Plants name="Potato" harvest={1} isPlant={true} />
    //   <Plants name="Orange" harvest={15} isPlant={true} />
    //   <Plants name="Chillies" harvest={20} isPlant={true} />
    //   <Plants name="Rose" />
    //   <Footer /> */}
    // </>
  );
}

export default App;
