import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import map from "../../../assets/images/map.webp"
import {Button} from '../../../components/buttons/Button';
import {theme} from '../../../styles/Theme';
import {font} from '../../../styles/Common';

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Get in Touch</SectionTitle>
                <FlexWrapper justify={"space-between"}>
                    <StyledForm>
                        <StyledLabel>Your Email Address</StyledLabel>
                        <Field type={"email"} placeholder={"something@website.com"}/>
                        <StyledLabel>Subject</StyledLabel>
                        <Field placeholder={"Question about your article"}/>
                        <Field as={"textarea"} placeholder={"Your message starts with…"}/>
                        <Button>Send</Button>
                    </StyledForm>
                    <StyledMap src={map}/>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    padding: 100px 0 160px;

    ${SectionTitle}{
        margin-bottom: 80px;
    }

    @media ${theme.media.extraLarge} {
        ${FlexWrapper}{
            flex-direction: column;
            align-items: center;
        }

        ${SectionTitle}{
            text-transform: uppercase;
        }
    }

    @media ${theme.media.mobile}{
        padding: 60px 0 100px;

        ${SectionTitle}{
            font-size: 28px;
            line-height: 1.4;
            margin-bottom: 40px;
        }
    }
`
const StyledForm = styled.form`
    max-width: 525px;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    textarea{
        resize: none;
        height: 175px;
        margin-bottom: 40px;
    }

    input:first-of-type{
        margin-bottom: 34px;
    }
    
    input:last-of-type{
        margin-bottom: 56px;
    }
    
    ${Button}{
        cursor: pointer;
    }

    @media ${theme.media.extraLarge} {
        ${Button}{
            margin: 0 auto 50px;
        }
    }
    
    @media ${theme.media.mobile}{
        width: 315px;

        input:first-of-type{
            margin-bottom: 22px;
        }

        input:last-of-type{
            margin-bottom: 34px;
        }

        textarea{
            height: 105px;
            margin-bottom: 72px;
        }
    }
   
`
const Field = styled.input`
    width: 100%;
    border: 1px solid #00000033;
    padding: 14px;
    font-size: 18px;
    font-weight: 400;
    color: ${theme.colors.formFont};
    
    &::placeholder {
        font-size: 18px;
        font-weight: 400;
        color: ${theme.colors.formFont};

        @media ${theme.media.mobile}{
            font-size: 11px;
            line-height: 1.3;
        }
    }
    
    &:focus-visible{
        outline: 1px solid #00000033;
    }

    @media ${theme.media.mobile}{
        font-size: 11px;
        line-height: 1.3;
    }
    
`
const StyledMap = styled.img`
    max-width: 512px;
    min-width: 282px;
    width: 100%;
    object-fit: cover;
`
const StyledLabel = styled.label`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: ${theme.colors.formFont};
    margin-bottom: 6px;

    @media ${theme.media.mobile}{
        font-size: 11px;
        line-height: 1.3;
    }
`


