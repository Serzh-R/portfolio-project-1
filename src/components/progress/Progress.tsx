import React from 'react';
import styled from 'styled-components';
import {Icon} from '../icon/Icon';
import {theme} from '../../styles/Theme';

type  LearningProgressType = {
    icon: string,
    percent: string
}
export const LearningProgress = (props: LearningProgressType) => {
    return (
        <StyledProgress>
            <Icon iconId={props.icon}/>
            <Progress>
                <ProgressLine percent={props.percent}/>
            </Progress>
        </StyledProgress>
    );
};


const StyledProgress = styled.div`
    display: flex;
    gap: 15px;
    max-width: 270px;
    width: 100%;
`

const Progress = styled.div`
    max-width: 210px;
    width: 100%;
    background-color: #C4C4C4;
    height: 8px;
    transform: translateY(-100%);
    align-self: flex-end;
`
const ProgressLine = styled.div<{ percent: string }>`
    position: relative;
    height: 100%;
    max-width: ${props => props.percent};
    background-color: ${theme.colors.accent};

    ::before {
        content: "${props => props.percent}";
        position: absolute;
        top: -20px;
        right: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
    }
`




