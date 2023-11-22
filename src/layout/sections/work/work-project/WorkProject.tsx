import React from 'react';
import styled from "styled-components";
import {theme} from '../../../../styles/Theme';


type WorkProjectPropsType = {
    src: string
    title: string
    text: string
}
export const WorkProject = (props: WorkProjectPropsType) => {
    return (
        <StyledWorkProject>
            <WorkPhoto src={props.src}/>
            <WorkTitle>{props.title}</WorkTitle>
            <WorkText>{props.text}</WorkText>
        </StyledWorkProject>
    );
};

const StyledWorkProject = styled.div`
    max-width: 330px;
    width: 100%;
`
const WorkPhoto = styled.img`
    margin-bottom: 25px;
    width: 100%;
    object-fit: cover;
`
const WorkTitle = styled.h3`
    margin-bottom: 10px;
    font-family: Nunito, sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: ${theme.colors.cardFont};

`
const WorkText = styled.p`
    font-size: 17px;
    font-weight: 400;
    line-height: 27px;
    color: ${theme.colors.cardFont};

`

