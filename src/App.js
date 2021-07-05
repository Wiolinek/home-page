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


const App = () => {

  const [languageState, setLanguageState] = useState('eng');
  const [menuState, setMenuState] = useState([]);


  console.log(menuState[1] !== undefined ? menuState[1].name : 'About Me')

  
  const changeLanguageHandler = (e) => {
    setLanguageState(e.currentTarget.textContent);
  }

  useEffect(() => {
    fetch(`http://localhost:3030/menu`, {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({language: languageState}),
    })
    .then(response => response.json())
    .then(result => setMenuState(result))
    .catch(error => console.log(`error ${error}`))
  }, [languageState])


  return (
    <>
      <AppWrapper>
        <Navigation menu={menuState}/>
        <Main menuState={menuState[4]} changeLanguageHandler={changeLanguageHandler}/>
        <About language={languageState} menuState={menuState[0]}/>
        <Technologies language={languageState} menuState={menuState[1]}/>
        <Projects menuState={menuState[2]}/>
        <Contact language={languageState} menuState={menuState[3]}/>
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
`

export default App;
