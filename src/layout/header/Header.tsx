import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {HeaderMenu} from "../../components/menu/headerMenu/HeaderMenu";
import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';
import {MobileMenu} from '../../components/menu/mobileMenu/MobileMenu';

const items = ["Home", "About", "Latest Works", "Testimonials", "Contact"];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #FB3F5C;
    padding: 25px 0;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    right: 0;
`
