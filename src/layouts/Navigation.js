import React from 'react';

import styled from 'styled-components'


const Navigation = () => {


  return (
    <NavigationWrapper>
        <li>About Me</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>Contact</li>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.nav`
    font-family: 'Turret Road', cursive;
    color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    min-height: 7vh;
    z-index: 2;
  li {
    font-size: 1.3rem;
    text-align: center;
    min-width: 8%;
    padding: .5em 1em;
    margin: 1em;
    cursor: pointer;
    transition: .5s;
  }
  li:hover {
    background-color: purple;
    box-shadow: 0 0 20px purple, 0 0 50px purple, 0 0 80px purple, 0 0 110px purple;
  }
`

export default Navigation;