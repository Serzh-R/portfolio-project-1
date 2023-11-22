import React from 'react';
import logo from '../../assets/images/logo.webp'
import styled from 'styled-components';

export const Logo = () => {
    return (
        <StyledLogo href="#">
            <img src={logo} alt="Logo"/>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
  
`