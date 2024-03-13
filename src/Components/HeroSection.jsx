import React  from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../sty/Button'
import {  useGlobalContext } from '../context';


const HeroSection = () => {
 
  const {name, image} = useGlobalContext();
  return(
  <Wrapper>
   <FooterGrid>  

  <div className="section-hero-data">
 <p className='hero-top-data'>THIS IS ME</p>
 <h1 className='hero-heading'>{name}</h1>
 <p className='hero-para'>
  I'm {name} A chief , youtuber and a Teacher. 
  You got  so many best meal here u really loved it 
  that my guarantee you never regret for choosing us
  your day just become mesmerizing with so many happiness
  that comes from the food.
 </p>
 <Button className = "btn hireme-btn">
<NavLink to = "/contact"> Explore </NavLink>

</Button>
    </div>


    <div className='section-hero-image'>
        <picture>
           <img src={image} alt="hero image" className='hero-img' width={500} /> 
        </picture>
    </div>
    </FooterGrid>
  </Wrapper>
  )
};

const FooterGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  `;
const Wrapper = styled.section`
 padding: 2rem 0;

 
.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  max-width: 16rem;
}

.hero-top-data {
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.helper};
}

.hero-heading {
  text-transform: uppercase;
  font-size: 2.4rem;
}

.hero-para {
  margin-top: 0.2rem;
  margin-bottom: 2.0rem;
  max-width: 40rem;
}

.section-hero-image {
  display:flex;
  justify-content: center;
  align-items:center;
}

picture {
  text-align: center;
}

.hero-img {
  max-width: 80%;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 7.2rem;
  }
}
`;
export default HeroSection;
