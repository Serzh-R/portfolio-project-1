import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {theme} from '../../../styles/Theme';
import {Container} from '../../../components/Container';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <ContactInfo>
                    <InfoTelephon href={"tel:+09028793244"}>
                        <Icon iconId={"phone"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>
                        <span>09028793244</span>
                    </InfoTelephon>
                    <InfoMail href={"mailto:shalewa64@gmAil.com"}>
                        <Icon iconId={"messages"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>
                        <span>shalewa64@gmAil.com</span>
                    </InfoMail>
                    <InfoAddress>
                        <Icon iconId={"location"} width={"22"} height={"24"} viewBox={"0 0 22 24"}/>
                        <span>479 Evergreen Rd. Roseville, CA 95673</span>
                    </InfoAddress>
                </ContactInfo>
                <SocialList>
                    <SocialItem>
                        <SocialLink href={"https://twitter.com/"} target={"_blank"}>
                            <Icon iconId={"twitter"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"https://instagram.com/"} target={"_blank"}>
                            <Icon iconId={"instagram"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"https://tiktok.com/"} target={"_blank"}>
                            <Icon iconId={"bell"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"https://facebook.com/"} target={"_blank"}>
                            <Icon iconId={"facebook"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"https://youtube.com/"} target={"_blank"}>
                            <Icon iconId={"youtube"} width={"36"} height={"26"} viewBox={"0 0 36 26"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #FB3F5CE5;
    padding: 68px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${theme.media.extraLarge} {
        padding: 50px 0;
    }
`
const ContactInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 35px;
    font-family: Nunito, sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.3;
    color: ${theme.colors.headerFooterFont};

    @media ${theme.media.extraLarge} {
        row-gap: 20px;
    }

    @media ${theme.media.mobile} {
        flex-direction: column;
        row-gap: 20px;
        width: 286px;
        text-align: center;
        margin: 0 auto 35px;
    }
`
const InfoTelephon = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    color: ${theme.colors.headerFooterFont};

    @media ${theme.media.mobile} {
        flex-direction: column;
        row-gap: 5px
    }
`
const InfoMail = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    padding: 0 30px;
    border-right: 3px solid #fff;
    border-left: 3px solid #fff;
    color: ${theme.colors.headerFooterFont};

    @media ${theme.media.extraLarge} {
        border-right: none;
        border-left: none;
        padding: 0;
    }

    @media ${theme.media.mobile} {
        flex-direction: column;
        row-gap: 5px
    }
`
const InfoAddress = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;

    @media ${theme.media.mobile} {
        flex-direction: column;
        row-gap: 5px
    }
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