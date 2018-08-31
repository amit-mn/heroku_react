import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { login, setUserId } from '../services';

class Login extends Component {
    constructor(props) {
    super(props)
    this.state = {
      email : '',
      password : ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  handleInputChange(event) {
    
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  checkLogin() {

    var data = {
      email : this.state.email,
      password : this.state.password
    };

    /*login(data).then((response) => {
    
      if(response.status === "success") {
        // alert(response.message);
        setUserId(response.data.user_id);
        this.props.history.push('/dashboard');
      } else {
        alert(response.message);
      }
      
    });*/
  }
      
  componentDidMount() {
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="card card-login mx-auto mt-5">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input className="form-control" id="exampleInputEmail1" type="email" placeholder="Enter email" name="email" onChange={this.handleInputChange} value={this.state.email} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input className="form-control" id="exampleInputPassword1" type="password" placeholder="Password" name="password" onChange={this.handleInputChange} value={this.state.password}/>
                </div>
                <button type="button" className="btn btn-primary btn-block" onClick={this.checkLogin}>Login</button>
              </form>
              <div className="text-center">
                <Link className="d-block small mt-3" to="/signup">Register an Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;