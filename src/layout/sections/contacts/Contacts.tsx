import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from '../../../styles/Theme';
import {changeSize} from '../../../styles/Common';
import {Maps} from '../../../components/maps/Maps';

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
                        <Field type={"submit"} value={"Send"}/>
                    </StyledForm>
                    <Maps/>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    padding: 100px 0 160px;

    ${SectionTitle} {
        margin-bottom: ${changeSize({FMax: 80, FMin: 40, Vmax: 1440, Vmin: 768})};;
    }

    @media ${theme.media.extraLarge} {
        padding-bottom: 100px;
        
        ${FlexWrapper} {
            flex-direction: column;
            align-items: center;
        }

        ${SectionTitle} {
            text-transform: uppercase;
        }
        
       
       
    }

    @media ${theme.media.mobile} {
        padding: 60px 0 100px;

        ${SectionTitle} {
            font-size: 28px;
            line-height: 1.4;
            //margin-bottom: 40px;
        }
    }
`
const StyledForm = styled.form`
    max-width: 525px;
    width: 100%;
    display: flex;
    flex-direction: column;

    textarea {
        resize: none;
        height: 175px;
        margin: 56px 0 40px;
    }

    input:first-of-type {
        margin-bottom: 34px;
    }
    
    @media ${theme.media.mobile} {
        width: 315px;

        input:first-of-type {
            margin-bottom: 22px;
        }
        
        textarea {
            height: 105px;
            margin: 34px 0 72px;
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

        @media ${theme.media.mobile} {
            font-size: 11px;
            line-height: 1.3;
        }
    }

    &:focus-visible {
        outline: 1px solid #00000033;
    }

    &:last-child {
        font-family: "Nunito Sans";
        font-size: 20px;
        font-weight: 400;
        line-height: 1.3;
        padding: 20px 58px;
        text-align: center;
        background-color: ${theme.colors.accent};
        border-radius: 18px;
        max-width: 225px;
        width: 100%;
        color: ${theme.colors.headerFooterFont};
        
        @media ${theme.media.extraLarge}{
            margin: 0 auto 70px;
        }
    }

    @media ${theme.media.mobile} {
        font-size: 11px;
        line-height: 1.3;
    }

`

const StyledLabel = styled.label`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: ${theme.colors.formFont};
    margin-bottom: 6px;

    @media ${theme.media.mobile} {
        font-size: 11px;
        line-height: 1.3;
    }
`


