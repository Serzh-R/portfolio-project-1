import React from 'react';
import styled from "styled-components";


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
width: 33.333%;
`
const WorkPhoto = styled.img`
  
`
const WorkTitle = styled.h3`

`
const WorkText = styled.p`

`

