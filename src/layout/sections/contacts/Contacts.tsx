import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import map from "../../../assets/images/map.webp"

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
                    </StyledForm>
                    <StyledMap src={map}/>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`

`
const StyledForm = styled.form`
  max-width: 524px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Field = styled.input`
  
`
const StyledMap = styled.img`
  max-width: 512px;
  width: 100%;
  object-fit: cover;

`
const StyledLabel = styled.label`

`


