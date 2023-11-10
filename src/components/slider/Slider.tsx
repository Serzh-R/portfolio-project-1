import React from 'react';
import styled from "styled-components";
import slidePhoto from '../../assets/images/client-1.webp'
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                {/*<FlexWrapper direction={"column"} align={"center"}>*/}
                    <SlidePhoto src={slidePhoto} alt="SlidePhoto"/>
                    <SlideTitle>Adams Ademola</SlideTitle>
                    <SlideSubTitle>Happy Client</SlideSubTitle>
                    <SlideText>
                        “Everyone working in the office is very knowledgeable
                        about all types of dental work and options for your individual needs.”
                    </SlideText>
                    <SlideRating></SlideRating>
                {/*</FlexWrapper>*/}
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
  border-radius: 130px 0 130px 0;
  text-align: center;
`
const SlidePhoto = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 50%;
  object-fit: cover;
`
const SlideTitle = styled.h3`

`
const SlideSubTitle = styled.span`
  color: #FE2C54;
  font-size: 18px;
  line-height: 26px;
`
const SlideText = styled.p`
    color: #5D616F;
  font-size: 18px;
  line-height: 26px;

`
const SlideRating = styled.div`

`