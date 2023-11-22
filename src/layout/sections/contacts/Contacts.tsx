import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import map from "../../../assets/images/map.webp"
import {Button} from '../../../components/buttons/Button';
import {theme} from '../../../styles/Theme';

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
    }
    
    &:focus-visible{
        outline: 1px solid #00000033;
    }
    
`
const StyledMap = styled.img`
    max-width: 512px;
    width: 100%;
    object-fit: cover;

`
const StyledLabel = styled.label`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: ${theme.colors.formFont};
    margin-bottom: 6px;
`


