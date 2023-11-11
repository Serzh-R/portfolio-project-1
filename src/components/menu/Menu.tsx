import React from 'react';
import styled from "styled-components";

// type MenuPropsType = {
//     menuItems: Array<string>
// }
export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map(item => {
                    return <li>
                        <a href="#">{item}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 52px;

    li {
      list-style: none;
    }
  }
`

