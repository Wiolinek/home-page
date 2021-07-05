import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const Technologies = ({ language, menuState }) => {

  // const [techTitleState, setTechTitleState] = useState();

  // useEffect(() => {
  //   fetch(`http://localhost:3030/technologies`, {method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({language: language}),
  //   })
  //   .then(response => response.json())
  //   .then(result => setTechTitleState(result))
  //   .catch(error => console.log(`error ${error}`))
  // }, [language])

  const [technologiesState, setTechnologiesState] = useState();

  useEffect(() => {
    fetch(`http://localhost:3030/technologies`)
    .then(response => response.json())
    .then(result => setTechnologiesState(result))
    .catch(error => console.log(`error ${error}`))
  }, [language])


  return (
    <TechnologiesWrapper id={menuState !== undefined ? menuState.link : 'technologies'}>
      <div className="technologies__section-name">
        <h1>{menuState !== undefined ? menuState.name : 'Technologies'}</h1>
      </div>
      {technologiesState !== undefined && technologiesState.map(technologie => 
        <div key={technologie.id} className="technologies__item" name={technologie.name}>
          <img src={technologie.image} alt={technologie.name}/>
        </div>
        )}
    </TechnologiesWrapper>
  );
}

const TechnologiesWrapper = styled.section`
  background-color: rgba(0, 0, 0, .75);
  color: white;
  padding: 10vh 1vw 30vh 1vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-auto-rows: 350px;
  align-items: center;
  justify-content: center;
  grid-gap: 2em;
  .technologies__item, .technologies__section-name {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid purple;
    height: 100%;
    position: relative;
    transition: all .5s;
    h1 {
      font-size: 5em;
    }
    img {
      /* max-width: 50%; */
    }
  }
  .technologies__section-name:hover, .technologies__item:hover {
    box-shadow: inset 0 0 6px 2px purple, 0 0 8px 2px purple;
  }
  .technologies__section-name {
    grid-column: 1 / 3;
  }
  .technologies__item {
    cursor: pointer;
  }
  .technologies__item::before {
    content: attr(name);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    font-size: 2rem;
    padding: 1em;
    letter-spacing: 0.05em;
    background-color: purple;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 0;
    transition: opacity .6s;
  }
  .technologies__item:hover::before {
      opacity: 1;
    }
      
`

export default Technologies;