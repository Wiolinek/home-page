import React from 'react';
import styled from 'styled-components';


const MenuModal = ({ menu, menuModalState, setMenuModalState }) => {


  return (
    <MenuModalWrapper style={{display: menuModalState ? "flex" : "none"}}>
      <ul className="menu__list">
        <li onClick={() => setMenuModalState(false)}><i className="fas fa-times"></i></li>
        {menu !== undefined && menu.map(item => <li key={item.name + item.language} onClick={() => setMenuModalState(false)}><a href={ `#${item.link}`}>{item.name}</a></li>)}
      </ul>
    </MenuModalWrapper>
  );
}

const MenuModalWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100vh;
  background-color: var(--primary-color);
  z-index: 30;
  .menu__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 5vw 5vh;
    background-color: ${props => props.theme.background};
    li:first-child {
      align-self: flex-end;
      padding: 0 1.8em 2.5em 0;
    }
    li {
      list-style: none;
      a {
        font-size: 1.8rem;
        font-weight: ${props => props.theme.fontWeight};
        text-decoration: none;
        color: ${props => props.theme.textColor};
        transition: all .7s;
      }
      i {
        text-align: start;
        font-size: 2rem;
        color: ${props => props.theme.textColor};
        transition: all .7s;
      }
    }
    li:not(:first-child) {
      padding: 1em 2em;
    }
  }
`

export default React.memo(MenuModal);