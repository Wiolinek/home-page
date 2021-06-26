import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

  const [languageState, setLanguageState] = useState('eng');
  
  const changeLanguageHandler = (e) => {
    setLanguageState(e.currentTarget.textContent);
  }

  return (
    <>
      <AppWrapper>
        <Navigation language={languageState}/>
        <Main changeLanguageHandler={changeLanguageHandler}/>
        <About language={languageState}/>
        <Technologies language={languageState}/>
        <Projects/>
        <Contact language={languageState}/>
        <Footer />
      </AppWrapper>
    </>
  );
}

const AppWrapper = styled.div`
  background: url(${back});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  /* width: 100vw; */
  /* min-height: 700vh; */
  /* display: flex; */
`

export default App;
