import React from "react";
import "../css/signup.css";
import { Link } from "react-router-dom";
import axios from "axios";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      signupbutton: false,
      nameError: "",
      errorname:false,
      errorpass:false,
      passError:'',
      firstnameError:""
    };
  }

  componentWillMount() {
    console.log("signup");
  }

  checkValidation = () => {
    console.log("chek");
    let nameerror = "";
    let passerror = "";
    let firstnameerror=""
    if (this.state.firstName === "") {
      nameerror = "enter first name";
    }
    if (this.state.firstName.length<5) {
      firstnameerror = "First Name should have more than 5 characters";
    }

    if (this.state.lastName === "") {
      nameerror = "enter last name";
    }
    if (this.state.userName === "") {
      nameerror = "enter username";
    }
    if (this.state.email === "") {
      nameerror = "enter pasword";
    }
    if (!this.state.email.includes("@")) {
      nameerror = "Email should contain @";
    }

    if (this.state.password === "") {
      nameerror = "password";
    }
    if (!this.state.password.includes("@"||"$"||"*")) {
      passerror = "Password should include atleast one special character";
    }
    if (firstnameerror) {
      console.log("set state for nameError");
      this.setState({
        firstnameError: firstnameerror,
      });

      return false;
    }

    if (nameerror) {
      console.log("set state for nameError");
      this.setState({
        nameError: nameerror,
      });

      return false;
    }
    if (passerror) {
      console.log("set state for nameError");
      this.setState({
        passError: passerror,
      });

      return false;
    }

    this.setState({
      passError: "",nameError:"",firstnameError:""
    });
    return true;
  };

  firstNameChange = (event) => {
    console.log(event.target.value);
    this.setState({ firstName: event.target.value,errorname:false });
    console.log(this.state.firstName);
    this.checkValidation();
  };
  lastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
    console.log(this.state.lastName);
    this.checkValidation();
  };
  userNameChange = (event) => {
    this.setState({ userName: event.target.value });
    console.log(this.state.userName);
    this.checkValidation();
  };
  emailChange = (event) => {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
    this.checkValidation();
  };
  passwordChange = (event) => {
    this.setState({ password: event.target.value,errorpass:false });
    console.log(this.state.password);
    this.checkValidation();
  };

  loginButton = () => {
    axios.get("http://localhost:3000/allusers").then(
      (response) => {
        console.log(response.data);
        var dataarray = response.data;

        this.props.history.push({
          pathname: "/login",
          state: {
            dataArray: dataarray,
            loginbutton: true,
          },
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  signUpfun = (event) => {
    this.setState({
      errorname:true,
    },()=>console.log(this.state.error))
    if (this.checkValidation()) {
     
      event.preventDefault();
      console.log(this.state);
      var RequestBody = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
      };

      axios.post("http://localhost:3000/allusers", RequestBody).then(
        (response) => {
          console.log(response);
          this.setState({
            value: true,
          });

          console.log(this.state.value);
          this.props.history.push({
            pathname: "/login",
            state: {
              signupbutton: true,
              email: this.state.email,
              password: this.state.password,
              username: this.state.userName,
            },
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };
  render() {
    return (
      <div className="row">
        <h2
          style={{
            textAlign: "center",
            color: "lightgoldenrodyellow",
            marginTop: "50px",
            fontFamily: "TimesNewRoman",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Sign Up to Explore
        </h2>
        <div className="wrap">
          <h3>Sign up here</h3>
          <form>
            {/* {this.state.nameError} */}

            <input
              type="text"
              onChange={this.firstNameChange}
              placeholder="First Name"
              required
            />
            {this.state.errorname && <div>{this.state.firstnameError}</div>}
            

            <input
              type="text"
              onChange={this.lastNameChange}
              placeholder="Last Name"
              required
            />
            <input
              type="text"
              onChange={this.userNameChange}
              placeholder="Username"
              required
            />
            <input
              type="email"
             
              onChange={this.emailChange}
              placeholder="Email"
              required
            />
            {/* {this.state.nameError} */}
            <input
              type="password"
              onChange={this.passwordChange}
              placeholder="Password"
              required
            />

        {this.state.errorpass && <div>{this.state.passError}</div>}

            <button type="submit" onClick={this.signUpfun}>
              Continue
            </button>

            <h3>OR</h3>

            <p style={{ textAlign: "center" }}>
              Already have an account?
              <span
                onClick={this.loginButton}
                style={{ cursor: "pointer", color: "white" }}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
