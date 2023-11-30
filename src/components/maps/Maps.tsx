import React from 'react';
import styled from 'styled-components';
import {theme} from '../../styles/Theme';



export const Maps = () => {
    return (
        <StyledMaps>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79969.65624738156!2d51.23024572220168!3d51.2181221916258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4171ba3876f94b7d%3A0x6771f0f3596acc1b!2z0KPRgNCw0LvRjNGB0Lo!5e0!3m2!1sru!2skz!4v1701356055447!5m2!1sru!2skz" width="100%" height="100%" ></iframe>
        </StyledMaps>
    );
};

const StyledMaps = styled.div`
    width: 512px;
    height: 506px;
    
    @media ${theme.media.extraLarge}{
        width: 100%;
    }

    @media ${theme.media.mobile}{
        width: 100%;
        height: 195px;
    }
    
`

// type StyledMapsPropsType = {
//     width?: number,
//     height?: number
// }

// const StyledMaps = styled.div<StyledMapsPropsType>`
//     width: ${props => props.width || 512}px;
//     height: ${props => props.height || 506}px;
//     //border: none;
//     //allowfullscreen: "";
//     //referrerpolicy: "no-referrer-when-downgrade";
// `
