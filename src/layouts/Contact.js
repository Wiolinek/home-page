import React from 'react';

import styled from 'styled-components'

const Contact = () => {

  const logo = `<UV>`

  return (
    <ContactWrapper>
      <div className="half-back"></div>
      <div className="contact-section__wrapper">
        <article className="contact-section__address">
          <div className="section-name">
            <h1>Contact</h1>
          </div>
          <div className="address">
            <p>Wiola Polok</p>
            <p>Praga, Republika Czeska</p>
            <p>+ 48 533 484 335</p>
            <p>+ 420 731 880 053</p>
            <p>wiola.polok@seznam.cz</p>
          </div>
        </article>
        <article>
          <form className="contact__form">
              <label>Name<br/><input type="text" name="name" required></input></label>
              <label>Email<br/><input type="email" name="mail" required></input></label>
              <label>Subject<br/><input type="text" name="subject" required></input></label>
              <label>Message<br/><textarea name="message" rows="6" cols="50" required></textarea></label>
              <button className="btn contact__btn" type="submit">Send</button>
          </form>
          <div className="contact-section__socials">
            <div><i class="fab fa-facebook-f"></i></div>
            <div><i class="fab fa-facebook-messenger"></i></div>
            <div><i class="fab fa-linkedin-in"></i></div>
            <div><i class="fab fa-github"></i></div>
            <div><i class="fab fa-codepen"></i></div>
            <div><i class="fab fa-slack"></i></div>
            <div><i class="fab fa-discord"></i></div>
          </div>
        </article>
        <p>{logo}</p>
      </div>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.section`
  /* background-color: black; */
  /* height: 50vh; */
  color: white;
  /* display: flex;
  flex-direction: column; */
  /* padding: 10vh 10vw; */
  position: relative;
  .half-back {
      width: 0;
      height: 0;
      border-top: 90vh solid rgba(0, 0, 0, .75);
      border-left: 100vw solid transparent;
  }
  .contact-section__wrapper {
    width: 80%;
    position: absolute;
    bottom: 5vh;
    left: 10vw;

  }
    article {
      /* background-color: green; */
      display: grid;
      grid-template-columns: repeat(auto-fill, 737px);
      grid-auto-rows: 350px;
      /* align-items: center; */
      justify-content: center;
      grid-gap: 2em;
      /* padding: 10vh 1vw; */
      .section-name {
        border: 3px solid purple;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          font-size: 5em;
        }
      }
      .address {
        border: 3px solid purple;
        background-color: purple;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          font-size: 1.8em;
          line-height: 1.5em;
          letter-spacing: 0.05em;
          padding: .05em;
        }
      }
      form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        button {
          width: 30%;
        }
      }
    }
    .contact-section__socials {
      /* background-color: red; */
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid purple;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin: .5em 1.5em;
        i {
          color: purple;
          font-size: 25px;
        }
      }
    }
`

export default Contact;