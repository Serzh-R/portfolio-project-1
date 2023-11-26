import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {theme} from '../../../styles/Theme';

export const Footer = () => {
    return (
        <StyledFooter>
            <ContactInfo>
                <InfoTelephon><Icon iconId={"phone"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/><span >09028793244</span></InfoTelephon>
                <InfoMail><Icon iconId={"messages"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/><span>shalewa64@gmAil.com</span></InfoMail>
                <InfoAddress>497 Evergreen Rd. Roseville, CA 95673</InfoAddress>
            </ContactInfo>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"twitter"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"instagram"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"bell"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"facebook"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={"youtube"} width={"36"} height={"26"} viewBox={"0 0 36 26"}/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #FB3F5CE5;
    padding: 68px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContactInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 35px;
    font-family: Nunito, sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.3;
    color: ${theme.colors.headerFooterFont};
    
    
`
const InfoTelephon = styled.div`
   display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
`
const InfoMail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    position: relative;
    padding: 0 30px;
    border-right: 3px solid #fff;
    border-left: 3px solid #fff;
    margin: 0 30px;
`
const InfoAddress = styled.span`

`

const SocialList = styled.ul`
    display: flex;
    gap: 35px;
    justify-content: center;
    align-items: center;
    
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`