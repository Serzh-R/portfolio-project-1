import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import decor from '../../../assets/images/main-decor.webp'
import {Button} from "../../../components/buttons/Button";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper>
                    <div>
                        <span>Hello,</span>
                        <h2>I’m
                            <span>Daniella Adams</span>
                        </h2>
                        <p>I’m a Graphics Designer,Designng has become my everyday affair.
                            Masting styles,grids cant be less interesting.
                        </p>
                        <Button href="">Download CV</Button>
                    </div>
                    <MainPhoto src={photo} alt=""/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  padding: 100px 0 87px;
`

const MainPhoto = styled.img`
  max-width: 432px;
  width: 100%;
  height: 541px;
  object-fit: cover;
  
`

