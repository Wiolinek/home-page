import React, {useState} from 'react';
import styled from 'styled-components';

import { darkTheme } from '../providers/themes';
import { device } from '../providers/breakpoints';

import MenuModal from './MenuModal';


const Navigation = ({ menu, theme, toggleTheme, changeLanguageHandler, hoverSetHandler, hoverOffHandler, navbarColorState }) => {
  
  const logo = `< UV />`;

  const [menuModalState, setMenuModalState] = useState(false);

  const menuModalHandler = () => {
    setMenuModalState(true);
  }
  

  return (
    <NavigationWrapper>
      <div className={navbarColorState ? "nav-container scroll" : "nav-container static"}>
        <div className="logo">
          <a href="/#">
            <div className="logo__logo">
              <p>{logo}</p>
            </div>
            <div className="logo__name" >
              <p>Ultra</p>
              <p>Violet</p>
              <p>Codes</p>
            </div> 
          </a>
        </div>
        <div className="navigation">
          <div className="navigation__lang">
            <button onClick={changeLanguageHandler} onMouseEnter={hoverSetHandler} onMouseLeave={hoverOffHandler}>eng</button>
            <button onClick={changeLanguageHandler} onMouseEnter={hoverSetHandler} onMouseLeave={hoverOffHandler}>cz</button>
            <button onClick={changeLanguageHandler} onMouseEnter={hoverSetHandler} onMouseLeave={hoverOffHandler}>pl</button>
          </div>

          <ul className="menu__list">
            {menu !== undefined && menu.map(item => <li key={item.name + item.language} className="menu__item" onMouseEnter={hoverSetHandler} onMouseLeave={hoverOffHandler}><a href={ `#${item.link}`}>{item.name}</a></li>)}
          </ul>

          <div className="menu-icon" onClick={menuModalHandler}><i className="fas fa-ellipsis-h"></i></div>

          <div className="theme-change-icon" onClick={toggleTheme} onMouseEnter={hoverSetHandler} onMouseLeave={hoverOffHandler}>
          {theme === darkTheme ?
            <i className="fas fa-sun"></i> :
            <i className="fas fa-moon"></i>
          }
          </div>

        </div>
      </div>

      {menu && <MenuModal menu={menu} menuModalState={menuModalState} setMenuModalState={setMenuModalState}/>}
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.nav`
.nav-container {
  cursor: none;
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.mobileXS} {
    padding: 0 1.1em;
  }
  @media ${device.mobileS} {
    padding: 0 1.2em;
  }
  @media ${device.mobileM} {
    padding: 0 2.2em;
  }
  @media ${device.mobileL} {
    padding: 0 4.2em;
  }
}
  font-family: var(--primary-font-family);
  width: 100%;
  position: fixed;
  top: 1.3vh;
  right: 0;
  z-index: 1;
.scroll {
  background-color: ${props => props.theme.background};
}
.static {
  background-color: transparent;
}
  .logo {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      cursor: none;
      .logo__logo p {
        font-size: 2.4rem;
        padding: .1em .27em;
        font-weight: ${props => props.theme.fontWeight};
        color: ${props => props.theme.textColor};
      }
      .logo__name {
        padding: .1em;
        border-left: 3px solid ${props => props.theme.textColor};
        display: none;
        p {
          font-size: 1.5rem;
          padding-left: .4em;
          letter-spacing: .05em;
          font-weight: ${props => props.theme.fontWeight};
          color: ${props => props.theme.textColor};
        }
        @media ${device.mobileL} {
          display: block;
        }
      }
    }
  }
  .navigation {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: none;
    @media ${device.laptopS} {
      width: 40%;
    }
    .navigation__lang {
      width: 90%;
      display: flex;
      align-items: center;
      padding: .1em .8em;
      @media ${device.mobileL} {
        width: 70%;
      }
      @media ${device.mobileM} {
        width: 80%;
      }
      button {
        font-family: var(--primary-font-family);
        font-size: 1.2rem;
        color: ${props => props.theme.textColor};
        font-weight: ${props => props.theme.fontWeight};
        text-align: center;
        width: 25%;
        text-transform: uppercase;
        background-color: transparent;
        border-style: none;
        outline: none;
        cursor: none;
        transition: all .5s;
        &:hover {
          font-size: 2rem;
        }
        @media ${device.mobileM} {
          font-size: 1.5rem;
        }
      }
    }
    .menu__list {
      flex-direction: column;
      width: 65%;
      display: none;
      @media ${device.laptopS} {
        display: block;
      }
      .menu__item {
        list-style: none;
        margin: .3em 0;
        a {
          font-size: 1.2rem;
          padding: .2em .5em;
          letter-spacing: .05em;
          color: ${props => props.theme.textColor};
          font-weight: ${props => props.theme.fontWeight};
          text-decoration: none;
          cursor: none;
          transition: all .5s;
          &:hover {
            letter-spacing: .2em;
          }
        }
      }
    }
    .theme-change-icon {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        font-size: 2.1rem;
        color: ${props => props.theme.textColor};
        transform: rotate(15deg);
        transition: all .5s;
        &:hover {
          font-size: 2.8rem;
          transform: rotate(-20deg);
        }
      }
    }
    .menu-icon {
      display: block;
      @media ${device.laptopS} {
        display: none;
      }
      i {
        font-size: 1.6rem;
        color: ${props => props.theme.textColor};
      }
    }
  }
`

export default React.memo(Navigation);