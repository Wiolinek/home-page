import React from 'react';

import styled from 'styled-components'

const Contact = () => {

  const logo = `<UV>`

  return (
    <ContactWrapper>
      <div className="address-section">
        <p>Wiola Polok</p>
        <p>Praha, Republika Czeska</p>
        <p>+ 48 533 484 335</p>
        <p>+ 420 731 880 053</p>
        <p>wiola.polok@seznam.cz</p>
      </div>
      <div className="socials-section">
        <div><i class="fab fa-facebook-f"></i></div>
        <div><i class="fab fa-facebook-messenger"></i></div>
        <div><i class="fab fa-linkedin-in"></i></div>
      </div>
      <p>{logo}</p>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.section`
  background-color: black;
  /* width: 100vw; */
  height: 100vh;
  color: white;
  .address-section {

  }
  .socials-section {
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid purple;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin: .5em 1.5em;
      i {
        color: purple;
        font-size: 20px;
      }
    }
  }
`

export default Contact;