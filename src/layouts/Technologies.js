import React from 'react';

import styled from 'styled-components'


const Technologies = () => {

  return (
    <TechnologiesWrapper>
      <div className="section-title">
        <p>Technologies</p>
      </div>
      <div className="grid-container">
        <div><p>HTML</p></div>
        <div><p>CSS</p></div>
        <div><p>JavaScript</p></div>
        <div><p>React</p></div>
        <div><p>Node.js</p></div>
        <div><p>Express</p></div>
      </div>
    </TechnologiesWrapper>
  );
}

const TechnologiesWrapper = styled.section`
  background-color: black;
  min-height: 100vh;
  color: white;
  display: flex;
  justify-content: space-between;
  .section-title {
    /* transform: rotate(-90deg); */
    /* width: 100%; */
    text-align: center;
    border: 3px solid purple; 
  }
  .section-title p {
    /* transform: rotate(-90deg); */
    margin: 0 auto;
    /* display: block; */
    width: 100%;
    /* height: 100%; */
    text-align: center;
    border: 3px solid green; 
  }
  .grid-container {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-auto-rows: 300px;
    grid-gap: 2em;
    justify-content: center;
    align-content: center;
    align-items: center;
    border: 3px solid purple; 
  }
  .grid-container div {
    text-align: center;
    border: 3px solid purple;
    height: 100%;
  }
`

export default Technologies;