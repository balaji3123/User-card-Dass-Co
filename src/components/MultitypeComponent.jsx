
import PropTypes from "prop-types"
export const MultitypeComponent = (props) => {
     
  return (
    <div>
        <p>The value is: {props.value}</p>
    </div>
  )
}

MultitypeComponent.propTypes = {
    value : PropTypes.oneOfType([PropTypes.string,PropTypes.number,PropTypes.bool]).isRequired
}
