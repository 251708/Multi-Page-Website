
import HeroSection from './Components/HeroSection';


const Home = () => {
 
  const data = {
    name:"Enjoy Your Meal",
    image:"./images/img1.jpg",
  }
  return<HeroSection {...data} />
}

export default Home
