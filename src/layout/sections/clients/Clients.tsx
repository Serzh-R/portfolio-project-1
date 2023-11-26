import React from 'react';
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider";
import {Container} from '../../../components/Container';
import {theme} from '../../../styles/Theme';

export const Clients = () => {
    return (
        <ClientsStyled>
            <Container>
                <Slider/>
            </Container>
        </ClientsStyled>
    );
};

const ClientsStyled = styled.section`
    background-color: #FB3F5C4D;
    padding: 85px 0 112px;

    @media ${theme.media.tablet} {
        padding: 50px 0;
    }
`