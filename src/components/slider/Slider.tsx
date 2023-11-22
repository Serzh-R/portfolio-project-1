import React from 'react';
import styled from "styled-components";
import slidePhoto from '../../assets/images/client-1.webp'
import {theme} from '../../styles/Theme';
import quotes from "../../assets/images/quotes.svg";
import {Icon} from '../icon/Icon';


export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <SlidePhoto src={slidePhoto} alt="SlidePhoto"/>
                <SlideTitle>Adams Ademola</SlideTitle>
                <SlideSubTitle>Happy Client</SlideSubTitle>
                <SlideText>
                    “Everyone working in the office is very knowledgeable
                    about all types of dental work and options for your individual needs.”
                </SlideText>
                <SlideRating>
                    <Icon iconId={"star"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>
                    <Icon iconId={"star"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>
                    <Icon iconId={"star"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>
                    <Icon iconId={"star"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>
                    <Icon iconId={"star"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>
                </SlideRating>
            </Slide>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 726px;
    margin: 0 auto;
`
const Slide = styled.div`
    padding: 57px;
    background-color: #fff;
    border-radius: 130px 0;
    text-align: center;
    font-family: Poppins, sans-serif;
    position: relative;

    &::before {
        content: url(${quotes});
        position: absolute;
        top: 84px;
        left: 84px;
    }
`

const SlidePhoto = styled.img`
    width: 104px;
    height: 104px;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover;
`
const SlideTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    line-height: 26px;
    color: ${theme.colors.clientsTitle};
`
const SlideSubTitle = styled.span`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    display: inline-block;
    margin-bottom: 15px;
    color: #FE2C54;
`
const SlideText = styled.p`
    color: ${theme.colors.clientsText};
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 12px;
`

const SlideRating = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`


