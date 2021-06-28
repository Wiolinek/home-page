import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const Contact = ({ language, menuState }) => {

  const logo = `< UV />`;

  const [contactState, setContactState] = useState();

  useEffect(() => {
    fetch(`http://localhost:3030/contact`, {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({language: language}),
    })
    .then(response => response.json())
    .then(result => setContactState(result))
    .catch(error => console.log(`error ${error}`))
  }, [language])


  return (
    <ContactWrapper id={menuState !== undefined ? menuState.link : 'contact'}>
      <div className="contact-section__wrapper">
        <div className="contact-section__section-name">
          <h1>{menuState !== undefined ? menuState.name : 'Contact'}</h1>
        </div>
        <div className="contact-section__address">
          {contactState !== undefined ? (
          <>
            <p>{contactState[0].name}</p>
            <p>{contactState[0].address}</p>
            <p>{contactState[0].phone1}</p>
            <p>{contactState[0].phone2}</p>
            <p>{contactState[0].email}</p>
          </>
          )
           : null}
        </div>
        <div className="contact-section__socials">
          <a href="https://www.facebook.com/violinek123"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.facebook.com/violinek123"><i className="fab fa-facebook-messenger"></i></a>
          <a href="https://www.linkedin.com/in/wioleta-polok-44248917/"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/Wiolinek"><i className="fab fa-github"></i></a>
          <a href="https://codepen.io/wiola-p"><i className="fab fa-codepen"></i></a>
        </div>
        <p className="contact-section__logo">{logo}</p>
        <div className="half-back"></div>
      </div>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.section`
  color: white;
  padding: 10vh 1vw;
  position: relative;
  .half-back {
      width: 0;
      height: 0;
      border-top: 120vh solid rgba(0, 0, 0, .75);
      border-right: 125vw solid transparent;
      position: absolute;
      bottom: 0;
      left: 0;
  }
  .contact-section__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(737px, 740px));
    grid-template-rows: repeat(auto-fill, minmax(350px, 1fr));
    grid-auto-rows: 350px;
    justify-content: center;
    grid-gap: 2em;
    margin: 0 auto;
    z-index: 2;
  }
    .contact-section__section-name {
      border: 3px solid purple;
      display: flex;
      justify-content: center;
      align-items: center;
      grid-column: 1 / 2;
      z-index: 2;
      h1 {
        font-size: 5em;
      }
    }
    .contact-section__address {
      border: 3px solid purple;
      background-color: purple;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-column: 2 / 3;
      z-index: 2;
      p {
        font-size: 1.8em;
        line-height: 1.5em;
        letter-spacing: 0.05em;
        padding: .05em;
      }
    }
  .contact-section__socials {
    background-color: purple;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid black;
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 50%;
      margin: .5em 1.5em;
      text-decoration: none;
      transition: border .5s;
      &:hover {
        border: 2px solid white;
      }
      &:hover i {
          color: white;
      }
      i {
        color: black;
        font-size: 1.7rem;
        transition: color .5s;
      }
    }
  }
  .contact-section__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8rem;
    color: white;
    border: 3px solid purple;
    z-index: 2;
  }
`

export default Contact;