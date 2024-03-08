import React, { useEffect } from 'react'
import HeroSection from './Components/HeroSection'
import { useGlobalContext } from './context'

const About = () => {
  /*const data = {
    name:"Ghar ka Khana",
    image:"./images/img2.jpg",

  };
  */
 const {updateAboutPage} = useGlobalContext();
 useEffect(() => {
  updateAboutPage();
 }, []);
  return <HeroSection  />
  
}

export default About
