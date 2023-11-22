import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from "../../../assets/images/photo.webp";
import {Button} from "../../../components/buttons/Button";
import {LearningProgress} from '../../../components/progress/Progress';
import {theme} from '../../../styles/Theme';

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
                            <Button href={"#"} color={"${theme.colors.accent}"} background={"#fff"} border={`1px solid ${theme.colors.accent}`}>View Portfolio</Button>
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
    
`
const SkillsPhotoWrapper = styled.div`
    position: relative;

    &:before{
        position: absolute;
        content: "";
        width: 388px;
        height: 432px;
        z-index: -1;
       right: -50px;
        bottom: -50px;

        border-top: 215px solid transparent;
        border-bottom: 204px solid #F8EEEF;
        border-right: 180px solid #F8EEEF;
        border-left: 195px solid transparent;
    }
`

const SkillsPhoto = styled.img`
    max-width: 362px;
    width: 100%;
    object-fit: cover;
`
const SkillsInfo = styled.div`
    max-width: 598px;
    display: flex;
    flex-direction: column;
`
const SkillsTitle = styled.h1`
    font-family: Nunito, sans-serif;
    font-size: 48px;
    font-weight: 700;
    line-height: 65px;
    margin-bottom: 16px;
    max-width: 505px;
`

const SkillsText = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.06em;
    margin-bottom: 50px;
`
const SkillsButtons = styled.div`
    display: flex;
    gap: 38px;
    margin-bottom: 66px;
`
const SkillsProgress = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 15px;
    column-gap: 58px;
`




