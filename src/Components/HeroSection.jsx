import React from 'react'
import styled from 'styled-components'
const HeroSection = () => {
  return<Wrapper>
   <div className='container grid grid-two-column'>
    <div className='section-hero-data'>
 <p className='hero-top-data'>THIS IS ME</p>
 <h1 className='hero-heading'>MERI PADHAI</h1>
 <p className='hero-para'>
    I'm Sakshi Singh A Frontend Developer , youtuber and a Teacher. 
    You got  so many best teacher on this platform who give u the right direction that makes
    your life successfull. 
 </p>
    </div>

    <div className='section-hero-image'></div>
   </div>
  </Wrapper>
}
const Wrapper = styled.section``
export default HeroSection
