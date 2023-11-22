import React from 'react';
import styled from "styled-components";
import {theme} from '../../styles/Theme';

// type MenuPropsType = {
//     menuItems: Array<string>
// }
export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="#">
                            {item}
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 40px;
  }
`
const ListItem = styled.li`
    position: relative;
    padding: 0 10px;

    &:before,
    &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        background-color:  ${theme.colors.headerFooterFont};
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
            width: 50%;
        }
    }
`

const Link = styled.a`
    font-size: 24px;
    font-weight: 400;
    line-height: 33px;
    color: ${theme.colors.headerFooterFont};
`

