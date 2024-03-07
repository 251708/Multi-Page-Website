
import { useEffect } from 'react';
import HeroSection from './Components/HeroSection';
import { useGlobalContext } from './context';


const Home = () => {
 
 /* const data = {
    name:"Enjoy Your Meal",
    image:"./images/img1.jpg",
  }
  */
 const {updateHomePage} = useGlobalContext();
 useEffect(() => 
  updateHomePage()
  ,[]);
  return<HeroSection  />
}

export default Home
