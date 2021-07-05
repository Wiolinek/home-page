import React from 'react';
import styled from 'styled-components';


const Footer = () => {

  return (
    <FooterWrapper>
      <p>Copyright © 2021 Wiola Polok ultra-violet.codes</p>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: purple;
  min-height: 4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1.2rem;
    color: white;
  }
  
`

export default Footer;