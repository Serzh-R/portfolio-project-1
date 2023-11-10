import React from 'react';
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider";

export const Clients = () => {
    return (
        <ClientsStyled>
            <Slider/>
        </ClientsStyled>
    );
};

const ClientsStyled = styled.section`
  background-color: #FB3F5C4D;
  padding: 82px 0 60px;
`