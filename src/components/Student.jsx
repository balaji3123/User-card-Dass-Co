
import propTypes from "prop-types";


export const Student = (props) => {
  return (
    <div className="student">
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <td>{props.Name}</td>
                
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.Age}</td>
                
            </tr>
            <tr>
                <th>Married</th>
                <td>{props.Married ? "yes" : "no"}</td>
                
            </tr>
            </tbody>
        </table>

    </div>
  )
}

Student.propTypes={
    Name: propTypes.string,
    Age: propTypes.number,
    Married: propTypes.bool
};
Student.defaultProps = {
    Name: "loos koo",
    Age: "just a number",
    Married: true
};
