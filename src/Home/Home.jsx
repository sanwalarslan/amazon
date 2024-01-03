 import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory';
import CategoryShowCase from './CategoryShowCase';
import Register from './Register';
import Location from './Location';
import AboutUs from './AboutUs';
import Footer from '../Footer/Footer';
 
 const Home = () => {
   return (
     <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Register/>
      <Location/>
      <AboutUs/>
      <Footer/>
     </div>
   );
 };
 
 export default Home