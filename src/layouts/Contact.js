import React from 'react';

import styled from 'styled-components'

const Contact = () => {

  const logo = `< UV />`

  return (
    <ContactWrapper id="contact">
      <div className="contact-section__wrapper">
        <div className="contact-section__section-name">
          <h1>Contact</h1>
        </div>
        <div className="contact-section__address">
          <p>Wiola Polok</p>
          <p>Praga, Republika Czeska</p>
          <p>+ 48 533 484 335</p>
          <p>+ 420 731 880 053</p>
          <p>wiola.polok@seznam.cz</p>
        </div>
        {/* <form className="contact__form">
            <label>Name<br/><input type="text" name="name" required></input></label>
            <label>Email<br/><input type="email" name="mail" required></input></label>
            <label>Subject<br/><input type="text" name="subject" required></input></label>
            <label>Message<br/><textarea name="message" rows="6" cols="50" required></textarea></label>
            <button className="btn contact__btn" type="submit">Send</button>
        </form> */}
        <div className="contact-section__socials">
          <a href="https://www.facebook.com/violinek123"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.facebook.com/violinek123"><i class="fab fa-facebook-messenger"></i></a>
          <a href="https://www.linkedin.com/in/wioleta-polok-44248917/"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/Wiolinek"><i class="fab fa-github"></i></a>
          <a href="https://codepen.io/wiola-p"><i class="fab fa-codepen"></i></a>
          {/* <a href="https://www.facebook.com/violinek123"><i class="fab fa-slack"></i></a> */}
          {/* <a href="https://www.facebook.com/violinek123"><i class="fab fa-discord"></i></a> */}
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
      i {
        color: black;
        font-size: 1.7rem;
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