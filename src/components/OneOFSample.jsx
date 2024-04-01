
import PropTypes from "prop-types"
export const OneOFSample = (props) => {
    const {color} = props;
  return (
    <div style={{backgroundColor: color, padding: "20px", color: "white"}}>
        <p>this component has a backgorund color of {color}</p>
    </div>
  )
}

OneOFSample.propTypes = {
    color: PropTypes.oneOf(["red","blue","yellow"]).isRequired,
}
