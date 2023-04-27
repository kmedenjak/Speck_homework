import "./Section.scss"
import PropTypes from "prop-types"
//PropTypes je pobjek koji na sebi ima tipove podataka

const Section = ({title, subtitle, children}) => {
  return (
    <section className="Section">
        <div className="Section-Inner">
          <h2 className="Section-Title">{title}</h2>
          <p className="Section-Subtitle">
            {subtitle}
          </p>
        </div>
        {children}
    </section>
  )
}

Section.propTypes = {
    title: PropTypes.string, 
    subtitle: PropTypes.string,
    children: PropTypes.node
}

export default Section