import React from "react";
import styled from "styled-components";
import { Flex, Box } from "../styled-grid";
import hoc from "../Sharedy/hoc";
import theme from "../theme";

import { LargeText, LineBreak } from "../Sharedy/Text";
import { Display, Headline, MobileSubheadline } from "../Sharedy/Headline";
import CoverImage from "../Sharedy/CoverImage";

import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from "./Hero";
import FormQuickQuote from "./FormQuickQuote";

const StyledHeroBox = styled(HeroBox)`
  --Hero-height: ${theme.blockHeights.superHero} !important;
  --Hero-height-mobile: ${theme.blockHeights.hero} !important;
  background-color: #4f90c8;
  background-image: initial;

  &:after {
    background-color: rgba(255, 255, 255, 0.15);
    background-blend-mode: multiply;
    bottom: 0;
    content: " ";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  @media (max-width: 512px) {
    &:after {
      background-color: rgba(255, 255, 255, 0.25);
    }
  }
`;

const HeroWho = props => (
  <StyledHeroBox>
    <CoverImage
      who
      src="http://res.cloudinary.com/pw-img-cdn/image/upload/v1503646409/hero-who_lfwht2.jpg"
    />
    <HeroContainer mw="lg" w={1}>
      <HeroFlex style={{ zIndex: "1" }}>
        <HeroTitleBox w={[7 / 12, 5 / 6, 6 / 12, 2 / 3]} mb={[4, 5, 5]}>
          <MobileSubheadline color="brandAlt" children="About us" />
          <Display color="brandAlt">
            We believe in better <LineBreak>Strata Management </LineBreak>
            <LineBreak>for Sydney.</LineBreak>
          </Display>
        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>
  </StyledHeroBox>
);

export default HeroWho;
