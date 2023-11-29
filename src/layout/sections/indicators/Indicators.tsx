import React from 'react';
import styled from 'styled-components';
import {theme} from '../../../styles/Theme';
import {font} from '../../../styles/Common';

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

    @media ${theme.media.mobile}{
        padding: 30px 0;
    }
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
    ${font({
        ff: "Nunito, sans-serif", fw: 700, lh: 1.3, FMax: 48, FMin: 12
    })}
    
`
const Description = styled.p`
    ${font({
        ff: "Nunito, sans-serif", fw: 700, lh: 1.4, FMax: 36, FMin: 11
    })}
    
    text-transform: uppercase;
`
