
 import { createGlobalStyle } from "styled-components";
 export const createGlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif; 
 }
 html {
    font-size: 62.5%;
    /* scroll-behavior: smooth; */
    /* 1rem = 10px */
    overflow-x: hidden;
  }
  h1{
    color:${({ theme }) => theme.colors.heading};
    font-size: 7rem;
    font-weight: 910;
  }
  h2 {
     color: ${({ theme }) => theme.colors.heading};
     font-size: 4.5rem;
     font-weight: 310;
     white-space: normal;
     text-align: center;
    }
    h3 {
    font-size: 1.9rem;
    font-weight: 410;
  }
  
  p {
    color: ${({ theme }) => theme.colors.text};
    opacity: .7;
    font-size: 1.75rem;
    line-height: 1.5;
    margin-top: 1.1rem;
    font-weight:410;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

  
 `;