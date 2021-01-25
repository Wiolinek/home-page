import React from 'react';
import styled from 'styled-components';

import Main from './layouts/Main';
import About from './layouts/About';
import Technologies from './layouts/Technologies';
import Projects from './layouts/Projects';
import Footer from './layouts/Footer';

// import logo from './logo.svg';


const App = () => {

  return (
    <>
    {/* <Reset /> */}
      <AppWrapper>
        <Main />
        <About />
        <Technologies />
        <Projects />
        <Footer />
      </AppWrapper>
    </>
  );
}

const AppWrapper = styled.div`
  width: 700vw;
  max-height: 100vh;
  display: flex;
`

export default App;
