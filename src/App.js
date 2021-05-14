import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Navigation from './layouts/Navigation';
import Main from './layouts/Main';
import About from './layouts/About';
import Technologies from './layouts/Technologies';
import Projects from './layouts/Projects';
import Footer from './layouts/Footer';
import Contact from './layouts/Contact';
import back from './images/back.jpg';

// import logo from './logo.svg';


const App = () => {

  const [languageState, setLanguageState] = useState('PL');

  const changeLanguageHandler = () => {
    setLanguageState();
  }


  return (
    <>
    {/* <Reset /> */}
      <AppWrapper>
        <Navigation />
        <Main />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </AppWrapper>
    </>
  );
}

// const rotate = keyframes`
//   from {
//     transform: rotate (0deg);
//   }
//   to {
//     transform: rotate (360deg);
//   }
// `;

const AppWrapper = styled.div`
  background: url(${back});
  background-attachment: fixed;
  background-size: cover;
  /* width: 700vw; */
  min-height: 700vh;
  /* display: flex; */
`

export default App;
