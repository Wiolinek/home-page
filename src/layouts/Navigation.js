import React, { useEffect, useState } from 'react';

import styled from 'styled-components'


const Navigation = ({ language }) => {

  const [menuState, setMenuState] = useState();

  useEffect(() => {
    fetch(`http://localhost:3030/menu`, {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({language: language}),
    })
    .then(response => response.json())
    .then(result => setMenuState(result))
    .catch(error => console.log(`error ${error}`))
  }, [language])


  return (
    <NavigationWrapper>
      <ul>
        {menuState !== undefined && menuState.map(item => <li key={item.name + item.language}><a href={ `#${item.link}`}>{item.name}</a></li>)}
      </ul>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.nav`
  font-family: 'Turret Road', cursive;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  position: fixed;
  top: 2vh;
  right: 0;
  /* width: 100%; */
  /* background-color: red; */
  
  z-index: 2;
  ul {
    min-height: 7vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* background-color: yellow; */
    li {
    margin: 0 .8em;
    text-align: center;
    position: relative;
    cursor: pointer;
    /* transition: .5s; */
    height: 100%;
    padding: 1em 1.3em;
    overflow: hidden;
    /* background-color: green; */
      a {
        /* background-color: red; */
        font-size: 1.8rem;
        letter-spacing: 0.05em;
        color: white;
        text-decoration: none;
        
      }
    }
    /* li:hover {
      background-color: purple;
      box-shadow: 0 0 20px purple, 0 0 50px purple, 0 0 80px purple, 0 0 110px purple;
    } */
    li::before {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -110%;
    right: 0;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background-color: purple;
    transition: all 1.5s;
    }
    li:hover::before {
      left: 110%;
      height: 55px;
      width: 55px;
      bottom: 50%;
      /* box-shadow: 0 0 20px purple, 0 0 50px purple, 0 0 80px purple, 0 0 110px purple; */
      /* right: 110%; */
    }
  }
`

export default Navigation;