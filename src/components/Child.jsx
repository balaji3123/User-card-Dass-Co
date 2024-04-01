import PropTypes from "prop-types"

export const Child = (props) => {
  return (
    <div>{props.children}</div>
  )
}
Child.propTypes = {
    children: PropTypes.array,
}