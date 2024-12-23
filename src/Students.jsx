
import PropTypes from 'prop-types'
function Students(props){

    return(

        <div className="student">
            <p> Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudents ? "Yes": "No"}</p>
        </div>
         
    );
}

Students.defaultProps = {
    name: "Guest",
    age: 0,
    isStudents: false
}

Students.PropTypes= {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudents: PropTypes.bool
}



export default Students