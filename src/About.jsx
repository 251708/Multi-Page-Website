import React from 'react'
import HeroSection from './Components/HeroSection'

const About = () => {
  const data = {
    name:"Ghar ka Khana",
    image:"./images/img2.jpg",

  };
  return <HeroSection {...data} />
  
}

export default About
