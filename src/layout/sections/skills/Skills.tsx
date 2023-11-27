import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from "../../../assets/images/photo.webp";
import {Button} from "../../../components/buttons/Button";
import {LearningProgress} from '../../../components/progress/Progress';
import {theme} from '../../../styles/Theme';
import {font} from '../../../styles/Common';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <SkillsPhotoWrapper>
                        <SkillsPhoto src={photo}/>
                    </SkillsPhotoWrapper>
                    <SkillsInfo>
                        <SkillsTitle>
                            I am a creative Graphic & UI Designer
                        </SkillsTitle>
                        <SkillsText>
                            I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be
                            less interesting,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </SkillsText>
                        <SkillsButtons>
                            <Button href={"#"}>Download CV</Button>
                            <Button href={"#"} color={"${theme.colors.accent}"} background={"#fff"}
                                    border={`1px solid ${theme.colors.accent}`}>View Portfolio</Button>
                        </SkillsButtons>
                        <SkillsProgress>
                            <LearningProgress icon={'ps'} percent={'70%'}/>
                            <LearningProgress icon={'figma'} percent={'50%'}/>
                            <LearningProgress icon={'ai'} percent={'80%'}/>
                        </SkillsProgress>
                    </SkillsInfo>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    padding: 125px 0 165px;

    @media ${theme.media.large} {
        ${FlexWrapper} {
            flex-direction: column;
        }
    }

    @media ${theme.media.mobile} {
        padding: 125px 0 100px;
    }

`
const SkillsPhotoWrapper = styled.div`
    position: relative;

    &:before {
        position: absolute;
        content: "";
        z-index: -1;
        top: 75px;
        right: -50px;

        width: 0;
        height: 0;
        border-top: 432px solid transparent;
        border-right: 388px solid #F8EEEF;

        @media ${theme.media.mobile} {
            border-top-width: 336px;
            border-right-width: 302px;
            top: 57px;
            right: -38px;
        }
    }
`

const SkillsPhoto = styled.img`
    max-width: 362px;
    width: 100%;
    object-fit: cover;

    @media ${theme.media.large} {
        margin-bottom: 100px;
    }

    @media ${theme.media.mobile} {
        width: 280px;
        height: 352px;
        margin-bottom: 85px;
    }
`
const SkillsInfo = styled.div`
    max-width: 598px;
    display: flex;
    flex-direction: column;

    @media ${theme.media.extraLarge} {
        max-width: 530px;
    }

   
`
const SkillsTitle = styled.h1`
    ${font({
        ff: "Nunito, sans-serif", fw: 700, lh: 1.4, Fmax: 48, Fmin: 28
    })}
    
    margin-bottom: 16px;
    max-width: 505px;

    @media ${theme.media.mobile} {
        //width: 324px;
    }
`

const SkillsText = styled.p`
    ${font({
        fw: 400, lh: 1.4, Fmax: 24, Fmin: 18
    })}
    
    letter-spacing: 0.06em;
    margin-bottom: 50px;
`
const SkillsButtons = styled.div`
    display: flex;
    gap: 38px;
    margin-bottom: 66px;

    @media ${theme.media.mobile} {
        flex-direction: column;
        align-items: center;
        gap: 28px;
        margin-bottom: 48px;
    }
`
const SkillsProgress = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 15px;
    column-gap: 58px;


    @media ${theme.media.extraLarge} {
        flex-direction: column;

        div:nth-child(2) {
            order: 1;
        }

    }

    @media ${theme.media.mobile} {
       align-items: center;
        gap: 26px;
    }
`




