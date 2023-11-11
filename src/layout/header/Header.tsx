import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";


export const Header = () => {
    return (
        <StyledHeader>
            <HeaderContainer>
                <Logo/>
                <Menu/>
            </HeaderContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #FB3F5C;
`
const HeaderContainer = styled.div`
  max-width: 1189px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`