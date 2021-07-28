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
  background-color: var(--primary-color);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* width: 100vw; */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;
  .menu__list {
    background-color: ${props => props.theme.background};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5vw 5vh;
    li:first-child {
      align-self: flex-end;
      padding: 0 2.5em 2.5em 0;
    }
    li {
      list-style: none;
      a {
        font-size: 1.8rem;
        text-decoration: none;
        transition: all .7s;
        color: ${props => props.theme.textColor};
        font-weight: ${props => props.theme.fontWeight};
      }
      i {
        text-align: start;
        font-size: 2rem;
        transition: all .7s;
        color: ${props => props.theme.textColor};
      }
      &:hover a {

      }
      &:hover i {

      }
    }
    li:not(:first-child) {
      padding: 1em 2em;
    }
  }
`

export default React.memo(MenuModal);