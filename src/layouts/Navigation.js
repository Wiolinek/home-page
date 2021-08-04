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
          <ul className="navigation__menu-list">
            {menu !== undefined && menu.map(item => <li key={item.name + item.language} className="navigation__menu-item" onMouseEnter={hoverSetHandler} onMouseLeave={hoverOffHandler}><a href={ `#${item.link}`}>{item.name}</a></li>)}
          </ul>
          <div className="navigation__menu-icon" onClick={menuModalHandler}><i className="fas fa-ellipsis-h"></i></div>
          <div className="navigation__theme-change-icon" onClick={toggleTheme} onMouseEnter={hoverSetHandler} onMouseLeave={hoverOffHandler}>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 100%;
  font-family: var(--primary-font-family);
  z-index: 1;
  cursor: none;
  @media ${device.mobileXS} {
    top: 1.5vh;
    padding: 0 1.1em;
  }
  @media ${device.mobileS} {
    top: 1.5vh;
    padding: 0 1.2em;
  }
  @media ${device.mobileM} {
    top: 1vh;
    padding: 0 2.2em;
  }
  @media ${device.mobileL} {
    top: .5vh;
    padding: 0 4.2em;
  }
}
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
        font-family: var(--logo-font-family);
        font-weight: ${props => props.theme.fontWeight};
        color: ${props => props.theme.textColor};
        padding: .1em .27em;
      }
      .logo__name {
        display: none;
        padding: .1em;
        border-left: 3px solid ${props => props.theme.textColor};
        p {
          font-size: 1.5rem;
          font-family: var(--logo-font-family);
          font-weight: ${props => props.theme.fontWeight};
          color: ${props => props.theme.textColor};
          letter-spacing: .05em;
          padding-left: .4em;
        }
        @media ${device.mobileL} {
          display: block;
        }
      }
    }
  }
  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    cursor: none;
    @media ${device.laptopS} {
      width: 40%;
    }
    .navigation__lang {
      display: flex;
      align-items: center;
      width: 90%;
      padding: .1em .8em;
      @media ${device.mobileL} {
        width: 70%;
      }
      @media ${device.mobileM} {
        width: 80%;
      }
      button {
        width: 25%;
        font-size: 1.2rem;
        font-family: var(--primary-font-family);
        color: ${props => props.theme.textColor};
        font-weight: ${props => props.theme.fontWeight};
        text-align: center;
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
    .navigation__menu-list {
      flex-direction: column;
      display: none;
      width: 65%;
      @media ${device.laptopS} {
        display: block;
      }
      .navigation__menu-item {
        margin: .3em 0;
        list-style: none;
        a {
          font-size: 1.2rem;
          font-weight: ${props => props.theme.fontWeight};
          color: ${props => props.theme.textColor};
          letter-spacing: .05em;
          text-decoration: none;
          padding: 0 .5em;
          cursor: none;
          transition: all .5s;
          &:hover {
            letter-spacing: .2em;
          }
        }
      }
    }
    .navigation__theme-change-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20%;
      i {
        font-size: 2.1rem;
        color: ${props => props.theme.textColor};
        transform: rotate(10deg);
        transition: all .5s;
        &:hover {
          font-size: 2.8rem;
          transform: rotate(-22deg);
        }
      }
    }
    .navigation__menu-icon {
      display: block;
      padding: 0 .3em 0 0;
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