import React from 'react';
import styled from 'styled-components';


const Footer = () => {


  return (
    <FooterWrapper>
      <p>Copyright &copy; 2021 Wiola Polok www.u-v.codes. All Rights Reserved</p>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  min-height: 4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${props => props.theme.background};
  p {
    font-size: 1.2rem;
    color: ${props => props.theme.textColor};
    padding: .5em;
  }
`

export default React.memo(Footer);