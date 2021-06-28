import React from 'react';
import styled from 'styled-components';


const Navigation = ({ menu }) => {


  return (
    <NavigationWrapper>
      <ul>
        {menu !== undefined && menu.map(item => <li key={item.name + item.language}><a href={ `#${item.link}`}>{item.name}</a></li>)}
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
  z-index: 2;
  ul {
    min-height: 7vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    li {
    margin: 0 .8em;
    text-align: center;
    position: relative;
    cursor: pointer;
    height: 100%;
    padding: 1em 1.3em;
    overflow: hidden;
      a {
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
    }
  }
`

export default Navigation;