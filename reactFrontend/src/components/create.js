import React, { Component } from 'react';
 import axios from 'axios';
 
 const customStyle = {
 width: '300px',
 margin: '0 auto'
 }

 var boxStyle={
    width: 229
   }
 
 class AddEmployee extends Component {

 constructor(props) {
 super(props);
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }
 }
 

 // To add new employee when user submits the form
 handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData()
  formData.append('firstName',this.state.firstName)
  formData.append('lastName',this.state.lastName)
  formData.append('email',this.state.email)
  formData.append('phone',this.state.phone)
 //  const { firstName, lastName, email, phone } = this.state;
  axios.post('http://localhost:4000/createUser',
  formData,{})
  .then((response) => {
  console.log(response,"donr");
  this.props.history.push('/');
  })
  .catch((error) => {
  console.log(error);
  });
  }

    // handleChange = (event) => {

    //     this.setState({ [event.target.name]: event.target.value})
    //     console.log(this.setState({ [event.target.name]: event.target.value}))
    
    //     }
 
        handleChange = event => { 
          const { value }  = event.target;
          this.setState({ [event.target.name]: value})
          console.log(this.setState({ [event.target]: value}));
      }
 render() {
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
          <input
          name="lastName"
          type="text"
          value={this.state.lastName}
          onChange={this.handleChange}
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
          

          <input
          type="submit"
          value="submit"
          className="btn btn-primary"
          />
          </form>
          </div>
          );
          }
 }
 
 export default AddEmployee;