import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/buttons/Button";
import {Container} from "../../../components/Container";
import {theme} from '../../../styles/Theme';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
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
`
const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 480px;
`
const MainSubTitle =styled.span`
    font-size: 28px;
    font-weight: 400;
    line-height: 38px;
`
const MainTitle = styled.h2`
    font-family: Nunito, sans-serif;
    font-size: 50px;
    font-weight: 700;
    line-height: 68px;
    color: ${theme.colors.titleFont};
    margin-bottom: 10px;

    span {
        display: inline-block;
        padding-left: 10px;
        line-height: 65px;
        color: ${theme.colors.accent};
    }
`
const MainText = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.06em;
    margin-bottom: 40px;

`
const PhotoWrapper = styled.div`
    margin-right: 35px;
    position: relative;
    
    &:before{
        position: absolute;
        content: "";
        width: 620px;
        height: 692px;
        z-index: -1;
        top: -64px;
        left: -28px;

        border-top: 346px solid transparent;
        border-bottom: 346px solid ${theme.colors.mainDecor};
        border-right: 310px solid ${theme.colors.mainDecor};
        border-left: 310px solid transparent;
    }
`

const MainPhoto = styled.img`
    max-width: 432px;
    width: 100%;
    height: 542px;
    object-fit: cover; 
`

