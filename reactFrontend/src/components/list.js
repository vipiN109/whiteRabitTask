import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button ,Image,Col ,Dropdown } from 'react-bootstrap';
import Moment from 'react-moment';
import 'moment-timezone';
// To use routing functionalities
import { Link } from 'react-router-dom';
import '../index.css';

var divStyle = {
margin: '8% 8%',
};

class listOfUsers extends Component {

constructor(props) {
super(props);
this.deleteEmployee=this.deleteEmployee.bind(this)
this.state = {
employees: []
}
}

// // To get all the employees

componentDidMount = () => {
    this.getEmployee()
}

getEmployee(){
    axios.get('http://localhost:4000/listOfUsers')
    .then((res)=>{
        this.setState({employees:res.data})
    })
    .catch((err)=>{
        console.log(err)
    })
}

deleteEmployee(id){
    axios.delete('http://localhost:5000/todos/delete/'+id)
    .then((response)=>{
        console.log('deleted',response)
        this.getEmployee()
    })
    .catch((err)=>{
        console.log(err)
    })
}

render() {
const { employees } = this.state;
console.log(employees)
return (
<div style={divStyle}>
<Table responsive>
<thead>
<tr>
<th>#</th>
<th>First Name</th>
<th>Email</th>
</tr>
</thead>
<tbody>
{
employees && employees.map((employee, i) => {
return (
    <><tr key={i}>
            <td>{i}</td>
            <td>{employee.firstName}</td>
            <td>{employee.email}</td>
            <td>
                <Link to={"/edit/" + employee._id} className="btn btn-primary">Edit</Link>
            </td>
            <td>
                <Button onClick={() => this.deleteEmployee(employee._id)} bsStyle="danger">Delete</Button>
            </td>

        </tr></>
)
})
}
</tbody>
</Table>
</div>
);
} 
}

export default listOfUsers;