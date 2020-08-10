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
    };
  }

  componentWillMount() {
    console.log("signup");
  }

  checkValidation = () => {
    console.log("chek");
    let nameerror = "";
    let sinceerror = "";
    if (this.state.firstName === "") {
      nameerror = "";
    }
    if (this.state.lastName === "") {
      nameerror = "";
    }
    if (this.state.userName === "") {
      nameerror = "";
    }
    if (this.state.email === "") {
      nameerror = "";
    }
    if (!this.state.email.includes("@")) {
      nameerror = "Email should contain @";
    }

    if (this.state.password === "") {
      nameerror = "";
    }

    if (nameerror) {
      console.log("set state for nameError");
      this.setState({
        nameError: nameerror,
      });

      return false;
    }

    this.setState({
      nameError: "",
    });
    return true;
  };

  firstNameChange = (event) => {
    console.log(event.target.value);
    this.setState({ firstName: event.target.value });
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
    this.setState({ password: event.target.value });
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
              id="email"
              name="email"
              onChange={this.emailChange}
              placeholder="Email"
              required
            />
            {this.state.nameError}
            <input
              type="password"
              onChange={this.passwordChange}
              placeholder="Password"
              required
            />

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
