import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/buttons/Button";
import {Container} from "../../../components/Container";
import {theme} from '../../../styles/Theme';
import {font} from '../../../styles/Common';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap-reverse"}>
                    <MainInfo>
                        <MainSubTitle>Hello,</MainSubTitle>
                        <MainTitle>I’m
                            <span>Daniella Adams</span>
                        </MainTitle>
                        <MainText>I’m a Graphics Designer,Designng has become my everyday affair.
                            Masting styles,grids cant be less interesting.
                        </MainText>
                        <Button href="#">Download CV</Button>
                    </MainInfo>
                    <PhotoWrapper>
                        <MainPhoto src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;

    @media ${theme.media.extraLarge} {
        ${FlexWrapper} {
            justify-content: center;
        }

        ${Button} {
            margin: 0 auto;
        }
    }
`
const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 516px;

    @media ${theme.media.extraLarge} {
        text-align: center;
       
    }
`
const MainSubTitle =styled.span`
    font-size: 28px;
    font-weight: 400;
    line-height: 1.3;
`
const MainTitle = styled.h2`
    ${font({
        family: "Nunito, sans-serif", weight: 700, Fmax: 50, Fmin: 32
    })}
   
    line-height: 1.4;
    color: ${theme.colors.titleFont};
    margin-bottom: 10px;

    span {
        display: inline-block;
        padding-left: 10px;
        color: ${theme.colors.accent};
    }

    @media ${theme.media.mobile}{
        margin-bottom: 8px;
    }
`
const MainText = styled.p`
    ${font({
        weight: 400, Fmax: 24, Fmin: 18
    })}
    
    line-height: 1.4;
    letter-spacing: 0.06em;
    margin-bottom: 40px;
    
    @media ${theme.media.mobile}{
        margin-bottom: 28px;
    }
`
const PhotoWrapper = styled.div`
    margin-right: 35px;
    position: relative;

    
    
    &:before {
        position: absolute;
        content: "";
        z-index: -1;
        top: -64px;
        left: -28px;

        width: 0;
        height: 0;
        border-left: 0px solid transparent;
        border-top: 690px solid transparent;
        border-right: 620px solid ${theme.colors.mainDecor};

       

        @media ${theme.media.mobile} {
           
        }
    }

    @media ${theme.media.large}{
        margin-right: 0;
        margin-top: 145px;
    }

`

const MainPhoto = styled.img`
    max-width: 432px;
    width: 100%;
    height: 542px;
    object-fit: cover; 
    
    @media ${theme.media.mobile}{
        width: 240px;
        height: 300px;
    }
`

