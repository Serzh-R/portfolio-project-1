import styled from "styled-components";

type ButtonPropsType = {
    border?: string
    background?: string
    color?: string
}
export const Button = styled.a<ButtonPropsType>`
  padding: 19px 57px;
  color: ${props => props.color || "#F8EEEF"};
  background-color:  ${props => props.background || "#FB3F5C"};
  border: ${props => props.border};
  border-radius: 18px;
  text-decoration: none;

`