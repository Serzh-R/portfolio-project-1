import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <ContactInfo>
                <span><Icon iconId={"phone"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>09028793244</span>
                <span><Icon iconId={"messages"} width={"26"} height={"26"} viewBox={"0 0 26 26"}/>shalewa64@gmAil.com</span>
                <span>497 Evergreen Rd. Roseville, CA 95673</span>
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
  min-height: 230px;
`
const ContactInfo = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
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