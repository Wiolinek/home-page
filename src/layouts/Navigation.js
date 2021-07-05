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
  z-index: 20;
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
      transition: all .7s;
      a {
        font-size: 1.8rem;
        letter-spacing: 0.05em;
        color: white;
        text-decoration: none;
        transition: all .7s;
      }
    }

    li:not(:last-child):hover {
        background-color: rgba(0, 0, 0, .75);
        box-shadow: inset 0 0 6px 2px purple, 0 0 8px 2px purple;
    }

    li:not(:last-child):hover a {
        color: purple;
        text-shadow: 1px 1px 10px purple;
    }

    li:last-child {
      border: none;
      a {
        font-size: 3rem;
        font-weight: 700;
      }
    }

    /* li:not(:last-child)::before { */
    /* content: ''; */
    /* position: absolute; */
    /* bottom: 5%; */
    /* left: -110%; */
    /* left: 0; */
    /* right: 0; */
    /* height: 1px; */
    /* width: 50%; */
    /* border-radius: 50%; */
    /* background-color: purple; */
    /* box-shadow: 0 0 10px 3px purple, 0 0 20px 3px purple, 0 0 25px 10px purple; */
    /* transition: all 1s; */
    /* } */
    /* li:hover::before { */
      /* left: 110%; */
      /* height: 55px; */
      /* width: 55px; */
      /* bottom: 50%; */
      /* box-shadow: 0 0 20px purple, 0 0 50px purple, 0 0 80px purple, 0 0 110px purple; */
    /* } */
  }
`

export default Navigation;