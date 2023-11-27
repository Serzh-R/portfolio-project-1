import React from 'react';
import styled from "styled-components";
import slidePhoto from '../../assets/images/client-1.webp'
import quotes from "../../assets/images/quotes.svg";
import quotesMobile from "../../assets/images/quotes-mobile.svg";
import {Icon} from '../icon/Icon';
import {font} from '../../styles/Common';
import {theme} from '../../styles/Theme';
import {FlexWrapper} from '../FlexWrapper';


export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper justify={"center"} align={"center"}>
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
            </FlexWrapper>
            <Pagination>
                <span className={"active"}></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 726px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
`
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;

        //&:not(:last-child){
        //    margin-right: 10px;
        //}
        & + span {
            margin-left: 10px;
        }
        
        &.active{
            background-color: #333333;
        }
    }
    
    @media ${theme.media.tablet}{
        display: none;
    }
`

const Slide = styled.div`
    padding: 57px;
    background-color: #fff;
    border-radius: 130px 0;
    text-align: center;
    position: relative;

    &::before {
        content: url(${quotes});
        position: absolute;
        top: 84px;
        left: 84px;

        @media ${theme.media.tablet} {
            content: url(${quotesMobile});
            top: 70px;
            left: 70px;
        }

        @media ${theme.media.mobile} {
            top: 40px;
            left: 40px;
        }
    }

    @media ${theme.media.tablet} {
        border-radius: 100px 0;
        padding: 40px;
    }

    @media ${theme.media.mobile} {
        border-radius: 70px 0;
        padding: 20px;
    }
`

const SlidePhoto = styled.img`
    width: 104px;
    height: 104px;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover;
    
    @media ${theme.media.mobile} {
        width: 74px;
        height: 74px;
        margin-bottom: 2px;
    }
`
const SlideTitle = styled.h3`
    ${font({
        ff: "Poppins, sans-serif", fw: 600, lh: 1.1, color: "${theme.colors.clientsTitle}", Fmax: 24, Fmin: 18
    })}
`
const SlideSubTitle = styled.span`
    ${font({
        ff: "Poppins, sans-serif", fw: 400, lh: 1.4, color: "#FE2C54", Fmax: 18, Fmin: 14
    })}
    
    display: inline-block;
    margin: 5px 0 15px;

    @media ${theme.media.mobile} {
        margin: 0px;
    }
`
const SlideText = styled.p`
    ${font({
        ff: "Poppins, sans-serif", fw: 400, lh: 1.4, color: "${theme.colors.clientsTitle}", Fmax: 18, Fmin: 12
    })}
    
    max-width: 534px;
    width: 100%;
    margin: 0 auto 12px;

    @media ${theme.media.tablet} {
        line-height: 2.1;
    }

    @media ${theme.media.mobile} {
        margin: 0px;
    }
`

const SlideRating = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`


