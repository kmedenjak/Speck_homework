import PropTypes from "prop-types";
import {
  Section as SectionWrapper,
  SectionInner,
  Title,
  Subtitle,
} from "./SectionStyle.js";

//PropTypes je pobjek koji na sebi ima tipove podataka

const Section = ({ title, subtitle, children }) => {
  return (
    <SectionWrapper>
      <SectionInner>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {children}
      </SectionInner>
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
