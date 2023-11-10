import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {WorkProject} from "./work-project/WorkProject";
import workPhoto1 from '../../../assets/images/work-1.webp';
import workPhoto2 from '../../../assets/images/work-2.webp';
import workPhoto3 from '../../../assets/images/work-3.webp';
import workPhoto4 from '../../../assets/images/work-4.webp';
import workPhoto5 from '../../../assets/images/work-5.webp';
import workPhoto6 from '../../../assets/images/work-6.webp';

export const Work = () => {
    return (
        <StyledWork>
            <SectionTitle>Latest work</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
               <WorkProject src={workPhoto1} title={"Project title"} text={"UI, Art drection"}/>
                <WorkProject src={workPhoto2} title={"Project title"} text={"UI, Art drection"}/>
                <WorkProject src={workPhoto3} title={"Project title"} text={"UI, Art drection"}/>
                <WorkProject src={workPhoto4} title={"Project title"} text={"UI, Art drection"}/>
                <WorkProject src={workPhoto5} title={"Project title"} text={"UI, Art drection"}/>
                <WorkProject src={workPhoto6} title={"Project title"} text={"UI, Art drection"}/>
            </FlexWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.section`
min-height: 100vh;
  display: flex;
flex-direction: column;
  align-items: center;
`


