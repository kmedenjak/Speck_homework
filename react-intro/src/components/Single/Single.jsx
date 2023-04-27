import "./Single.scss"
import PropTypes from "prop-types"

const Single = ({img, alt, text}) => {
  return (
    <article className="SingleCourse">
        <figure className="SingleCourse-Figure">
            <img 
            className="SingleCourse-Img" src={img} alt={alt} 
            />
        </figure>

        <p className="SingleSourse-Content">
            {text}
        </p>
    </article>
  )
};

Single.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.string
}

export default Single
