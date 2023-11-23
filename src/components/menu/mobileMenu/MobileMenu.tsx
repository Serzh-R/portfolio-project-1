import React from 'react';
import styled, {css} from "styled-components";
import {theme} from '../../../styles/Theme';


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>

            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={true}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="#">
                                {item}
                            </Link>
                        </ListItem>
                    })}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.minDesktop} {
        display: block;
    }
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: rgba(251, 63, 92, 0.9);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        gap: 40px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    width: 20px;
    height: 20px;
    
    span {
        position: relative;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #fff;
        z-index: 99999;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &:before{
            content: "";
            position: absolute;
            display: block;
            width: 100%;
            height: 2px;
            background-color: #fff;
            transform: translateY(-8px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
        `}
        }
        
        &:after{
            content: "";
            position: absolute;
            display: block;
            width: 100%;
            height: 2px;
            background-color: #fff;
            transform: translateY(8px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
        `}
        }
    }
`


const ListItem = styled.li`
    position: relative;

    &:before,
    &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        background-color: ${theme.colors.headerFooterFont};
        bottom: 0;
        transition: width 0.3s;
    }

    &:before {
        right: 50%;
    }

    &:after {
        left: 50%;
    }

    &:hover {
        &:before,
        &:after {
            width: 55%;
        }
    }
`

const Link = styled.a`
    font-size: 24px;
    font-weight: 400;
    line-height: 33px;
    color: ${theme.colors.headerFooterFont};
`

