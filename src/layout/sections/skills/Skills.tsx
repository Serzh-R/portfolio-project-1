import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from "../../../assets/images/photo.webp"
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/buttons/Button";
import {Icon} from "../../../components/icon/Icon";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Photo src={photo}/>
                    <SkillsInfo>
                        <SectionTitle>
                            I am a creative Graphic & UI Designer
                        </SectionTitle>
                        <SkillsText>
                            I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be
                            less interesting,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </SkillsText>
                        <SkillsButtons>
                            <Button>Download CV</Button>
                            <Button>View Portfolio</Button>
                        </SkillsButtons>
                        <SkillsProgress>
                            <ProgressItem>
                                <Icon iconId={"ps"}/>
                                <Progress></Progress>
                            </ProgressItem>
                            <ProgressItem>
                                <Icon iconId={"ai"}/>
                                <Progress></Progress>
                            </ProgressItem>
                            <ProgressItem>
                                <Icon iconId={"figma"}/>
                                <Progress></Progress>
                            </ProgressItem>
                        </SkillsProgress>
                    </SkillsInfo>
                </FlexWrapper>
            </Container>
            <Indicators>
                <IndicatorsWrapper>
                    <IndicatorsItem>
                        <span>81+</span>
                        <p>HAPPY CUSTOMERS</p>
                    </IndicatorsItem>
                    <IndicatorsItem>
                        <span>97+</span>
                        <p>Completed Projects</p>
                    </IndicatorsItem>
                    <IndicatorsItem>
                        <span>50</span>
                        <p>Awards Won</p>
                    </IndicatorsItem>
                </IndicatorsWrapper>
            </Indicators>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`
const Photo = styled.img`
  max-width: 361px;
  width: 100%;
  object-fit: cover;
`
const SkillsInfo = styled.div`
  max-width: 597px;
`
const SkillsText = styled.p`

`
const SkillsButtons = styled.div`
  display: flex;
  gap: 38px;
`
const SkillsProgress = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ProgressItem = styled.div`

`
const Progress = styled.div`

`
const Indicators = styled.div`
  background-color: #FEC5CE;
`
const IndicatorsWrapper = styled.div`
  max-width: 1189px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

const IndicatorsItem = styled.div`
  p {
    text-transform: uppercase;
  }
`


