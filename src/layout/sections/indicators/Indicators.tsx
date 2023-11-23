import React from 'react';
import styled from 'styled-components';
import {theme} from '../../../styles/Theme';

export const Indicators = () => {
    return (
        <StyledIndicators>
            <IndicatorsWrapper>
                <IndicatorsItem value={"81"} description={"HAPPY CUSTOMERS"}/>
                <IndicatorsItem value={"97+"} description={"Completed Projects"}/>
                <IndicatorsItem value={"50"} description={"Awards Won"}/>
            </IndicatorsWrapper>
        </StyledIndicators>
    );
};

const StyledIndicators = styled.div`
    background-color: ${theme.colors.indicators};
    padding: 60px 0;
`
const IndicatorsWrapper = styled.div`
    max-width: 1220px;
    padding: 0 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`

type IndicatorsItemType = {
    value: string,
    description: string
}
const IndicatorsItem = (props: IndicatorsItemType) => {
    return (
        <StyledIndicatorsItem>
            <Value>{props.value}</Value>
            <Description>{props.description}</Description>
        </StyledIndicatorsItem>
    );
};

const StyledIndicatorsItem = styled.div`
    text-align: center;
`

const Value = styled.span`
    font-family: Nunito, sans-serif;
    font-size: 48px;
    font-weight: 700;
    line-height: 65px;

`
const Description = styled.p`
    text-transform: uppercase;
    font-family: Nunito, sans-serif;
    font-size: 36px;
    font-weight: 700;
    line-height: 49px;
`
