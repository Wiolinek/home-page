import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from './providers/themes';

import Navigation from './layouts/Navigation';
import Main from './layouts/Main';
import About from './layouts/About';
import Technologies from './layouts/Technologies';
import Projects from './layouts/Projects';
import Footer from './layouts/Footer';
import Contact from './layouts/Contact';
import e from 'cors';


const App = () => {

  const [languageState, setLanguageState] = useState('eng');
  const [menuState, setMenuState] = useState([]);
  const [themeState, setThemeState] = useState(darkTheme);
  const [aboutState, setAboutState] = useState();
  const [cursorPositionState, setCursorPositionState] = useState({x: e.clientX, y: e.clientY});
  const [hoverState, setHoverState] = useState('not-hovered');
  const [navbarColorState, setNavbarColorState] = useState(false);


  useEffect(() => {
    fetch(`https://ultra-violet.codes/menu`, {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({language: languageState}),
    })
    .then(response => response.json())
    .then(result => setMenuState(result))
    .catch(error => console.log(`error ${error}`))
  }, [languageState]);

  useEffect(() => {
    fetch(`https://ultra-violet.codes/home_page`, {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({language: languageState}),
    })
    .then(response => response.json())
    .then(result => setAboutState(result))
    .catch(error => console.log(`error ${error}`))
  }, [languageState]);


  const changeLanguageHandler = (e) => {
    setLanguageState(e.currentTarget.textContent);
  }

  const toggleTheme = () => {
    if (themeState === darkTheme) {
      setThemeState(lightTheme);
    } else {
      setThemeState(darkTheme);
    }
  }

  const changeNavColorHandler = () => {
    if (window.scrollY > 0) {
      setNavbarColorState(true);
    } else {
      setNavbarColorState(false);
    }
  }

  const cursorPositionHandler = (e) => {
    setCursorPositionState({x: e.pageX, y: e.pageY});
    changeNavColorHandler();
  }

  const hoverSetHandler = () => {
      setHoverState('hovered');
  }

  const hoverOffHandler = () => {
    setHoverState('not-hovered')
  }


  return (
    <>
      <ThemeProvider theme={themeState}>
        <AppWrapper onMouseMove={(e) => cursorPositionHandler(e)} onWheel={(e) => cursorPositionHandler(e)}>
          <div style={{top: cursorPositionState.y, left: cursorPositionState.x}} className={hoverState + " cursor"}></div>
          <Navigation menu={menuState} theme={themeState} toggleTheme={toggleTheme} changeLanguageHandler={changeLanguageHandler} hoverSetHandler={hoverSetHandler} hoverOffHandler={hoverOffHandler} navbarColorState={navbarColorState}/>
          <Main menu={menuState[4]} about={aboutState}/>
          <About menu={menuState[0]} about={aboutState}/>
          <Technologies language={languageState} menu={menuState[1]} about={aboutState}/>
          <Projects language={languageState} menu={menuState[2]}/>
          <Contact language={languageState} menu={menuState[3]}/>
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </>
  );
}

const AppWrapper = styled.div`
  overflow: hidden; 
  position: relative;
  /* background-color: var(--primary-color); */
  background-attachment: fixed;
  cursor: none;
  .cursor {
    background-color: rgba(93, 0, 93, .4);
    width: 5.6rem;
    height: 5.6rem;
    border: 1px solid ${props => props.theme.cursorBorderColor};
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 3;
    transform-origin: 100% 100%;
    transition: width .5s ease, height .5s ease;
  }
  .hovered {
    width: 2.7rem;
    height: 2.7rem;
  }
`

export default React.memo(App);
