import React from 'react';

import styled from 'styled-components'


const Navigation = () => {


  return (
    <NavigationWrapper>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
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
    width: 100vw;
    min-height: 7vh;
    z-index: 2;
  li {
    margin: 0 1em;
    text-align: center;
    cursor: pointer;
    transition: .5s;
    a {
      font-size: 1.8rem;
      color: white;
      text-decoration: none;
      padding: 0 .8em;
    }
  }
  li:hover {
    background-color: purple;
    box-shadow: 0 0 20px purple, 0 0 50px purple, 0 0 80px purple, 0 0 110px purple;
  }
`

export default Navigation;