import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { signup } from '../services';

class Signup extends Component {
    constructor(props) {
    super(props)
    this.state = {
      firstname : '',
      lastname : '',
      email : '',
      password : '',
      confirm_password : '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.register = this.register.bind(this);
  }

  handleInputChange(event) {
    
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  register() {

    var data = {
      firstname : this.state.firstname,
      lastname : this.state.lastname,
      email : this.state.email,
      password : this.state.password,
      confirm_password : this.state.confirm_password
    };

    // signup(data).then((response) => {
    
    //   if(response.status === "success") {
        
    //     this.props.history.push('/dashboard');
    //   } else {
    //     alert(response.message);
    //   }
      
    // });
  }
      
  componentDidMount() {
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="card card-register mx-auto mt-5">
          <div className="card-header">Signup</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-6">
                    <label for="exampleInputName">First name</label>
                    <input className="form-control" id="exampleInputName" type="text" placeholder="Enter first name" name="firstname" onChange={this.handleInputChange} value={this.state.firstname}/>
                  </div>
                  <div className="col-md-6">
                    <label for="exampleInputLastName">Last name</label>
                    <input className="form-control" id="exampleInputLastName" type="text" placeholder="Enter last name" name="lastname" onChange={this.handleInputChange} value={this.state.lastname}/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input className="form-control" id="exampleInputEmail1" type="email" placeholder="Enter email" name="email" onChange={this.handleInputChange} value={this.state.email}/>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-6">
                    <label for="exampleInputPassword1">Password</label>
                    <input className="form-control" id="exampleInputPassword1" type="password" placeholder="Password" name="password" onChange={this.handleInputChange} value={this.state.password}/>
                  </div>
                  <div className="col-md-6">
                    <label for="exampleConfirmPassword">Confirm password</label>
                    <input className="form-control" id="exampleConfirmPassword" type="password" placeholder="Confirm password" name="confirm_password" onChange={this.handleInputChange} value={this.state.confirm_password}/>
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-primary btn-block"onClick={this.register} >Register</button>
            </form>
            <div className="text-center">
              <Link className="d-block small mt-3" to="/">Login</Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Signup;