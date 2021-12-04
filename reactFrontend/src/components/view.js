import React, { Component } from 'react';
import {Image,Col } from 'react-bootstrap';
 import axios from 'axios';
 
 const customStyle = {
 width: '300px',
 margin: '0 auto'
 }

 class editEmployee extends Component {

 constructor(props) {
 super(props);
 this.state = {
 firstName: '',
 lastName: '',
 email: '',
 phone: ''
 }
 }
 

 componentDidMount = () => {
    axios.get('http://localhost:4000/detailsOfOneUser/'+this.props.match.params.id)
    .then((response)=>{
        console.log(response.data,"data")
        this.setState({
            firstName:response.data.firstName,
            lastName:response.data.lastName,
            email:response.data.email,
            phone:response.data.phone,
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}

 render() {
     console.log(this.state)
 return (
 <div className="container">
 <form style={customStyle} onSubmit={this.handleSubmit}>
 <label>
 First Name
 <input
 name="firstName"
 type="text"
 value={this.state.firstName}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Last Name
        <input name="lastName"
            value={this.state.lastName}
            className="form-control"
        />
 </label>
 <br />
 <label>
 Email
 <input
 name="email"
 type="text"
 value={this.state.email}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Phone No
 <input
 name="phone"
 type="text"
 value={this.state.phone}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 </form>
 </div>
 );
 }
 }
 
 export default editEmployee;