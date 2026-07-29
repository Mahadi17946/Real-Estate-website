import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// ল্যান্ডিং পেজের কমপোনেন্টসমূহ
import Navber from './component/Navber/Navber';
import Banner from './component/Banner/Banner';
import About from './component/About/About';
import Gallery from './component/Gallery/gallery';
import Location from './component/Location/Location';
import Card from './component/Card/Card';
import FAQ from './component/FAQ/FAQ';
import Review from './component/Review/Review';
import Footer from './component/Footer/Footer';
import SignUp from './component/Signup/SignUp'; 
import Login from './component/Login/Login'; 

const Home = () => {
  return (
    <>
      <Navber />
      <Banner />
      <About />
      <Gallery />
      <Location />
      <Card />
      <FAQ />
      <Review />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
