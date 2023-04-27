import "./Hero.scss"
import Button from "../Button/Button";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const Hero = ({title, subtitle, button, heroImg, imgAlt}) => {
    return (
        <section className="Hero">
        <figure className="Hero-Figure">
          <img
            src={heroImg} alt={imgAlt} className="Hero-Img"/>
        </figure>
        <div className="Hero-Overlay"></div>
        <div className="Hero-Content">
          <div className="Hero-ContentInner">
            <div className="Hero-TextCard">
              <h1 className="Hero-Title">{title}</h1>
              <p className="Hero-Subtitle">{subtitle}</p>
              <Link to="/courses">
                <Button className="Button_secondary">{button}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  button: PropTypes.string,
  heroImg: PropTypes.string,
  imgAlt: PropTypes.string
}

export default Hero;