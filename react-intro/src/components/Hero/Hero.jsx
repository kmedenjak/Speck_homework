import { Buttons } from "../../utils/styles/generalStyles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Hero as HeroWrapper,
  HeroFigure,
  HeroImg,
  Overlay,
  Content,
  ContentInner,
  TextCard,
  Title,
  Subtitle,
} from "./HeroStyle.js";

const Hero = ({ title, subtitle, heroImg, imgAlt }) => {
  return (
    <HeroWrapper>
      <HeroFigure>
        <HeroImg src={heroImg} alt={imgAlt} />
      </HeroFigure>
      <Overlay></Overlay>
      <Content>
        <ContentInner>
          <TextCard>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Link to="/courses">
              <Buttons>Explore courses</Buttons>
            </Link>
          </TextCard>
        </ContentInner>
      </Content>
    </HeroWrapper>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heroImg: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default Hero;
