import React from "react";
import "../css/login.css";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailcorrect: false,
      passwordcorrect: false,
      passthroughsignup: false,
      emailthroughsignup: false,
      verifiedemail: "",
      id: 0,
      array: "",
      pass: "",
    };
  }

  componentWillMount() {
    console.log(this.props);
    if (this.props.history.location.state === undefined) {
      alert("please try later");
      this.props.history.push("/signup");
    }
  }

  checkValidation = () => {
    console.log("chek");
    let nameerror = "";
    let sinceerror = "";

    if (this.state.email === "") {
      nameerror = "Please enter email";
    }

    if (this.state.password === "") {
      nameerror = "Please enter password";
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

  emailChange = (event) => {
    console.log(event.target.value);

    // if (this.props.history.location.state.loginbutton === undefined) {
    //   alert("please try later");
    //   this.props.history.push("/signup");
    // }

    if (this.props.history.location.state.loginbutton) {
      if (this.props.history.location.state.loginbutton === undefined) {
        alert("please try later");
        this.props.history.push("/signup");
      }

      console.log("loginbutton");
      console.log(this.props.history.location.state.dataArray);
      this.props.history.location.state.dataArray.filter((email) => {
        if (email.email === event.target.value) {
          alert("email verified");
          this.setState({
            emailcorrect: true,
            verifiedemail: email.email,
            id: email.id,
          });

          this.checkValidation();
        }
      });
    }

    if (this.props.history.location.state.signupbutton) {
      console.log("signupbutton");
      console.log(this.state.emailthroughsignup);

      if (this.props.history.location.state.email === event.target.value) {
        alert("email verified through signup");
        this.setState({
          emailthroughsignup: true,
        });
        console.log(this.state.emailthroughsignup);
        this.checkValidation();
      }
    }
  };

  passwordChange = (event) => {
    console.log(event.target.value);
    if (
      this.props.history.location.state.loginbutton &&
      this.state.emailcorrect === true
    ) {
      console.log("loginbutton");
      var d = this.props.history.location.state.dataArray.filter((password) => {
        return password.id === this.state.id;
      });
      this.setState(
        {
          array: d[0].password,
        },
        () => console.log(this.state.array[0].password)
      );
      console.log(this.state.array);
      if (this.state.array === event.target.value) {
        alert("password verified");
        this.setState({
          passwordcorrect: true,
        });

        console.log(this.state.passwordcorrect);
        this.checkValidation();
      }
    }

    if (this.props.history.location.state.signupbutton) {
      console.log("signupbutton");

      if (this.props.history.location.state.password === event.target.value) {
        alert("password verified through signup");
        this.setState(
          {
            passthroughsignup: true,
          },
          () => console.log(this.state.passthroughsignup)
        );

        this.checkValidation();
      }
    }
  };
  loginButton = () => {
    if (this.checkValidation()) {
      console.log(this.state.emailthroughsignup);
      console.log(this.state.passwordthroughsignup);

      if (
        this.state.emailcorrect === true &&
        this.state.passwordcorrect === true
      ) {
        console.log("loginvalidated");
        this.props.history.push({
          pathname: "/home",

          state: { verifiedemail: this.state.verifiedemail, login: true },
        });
      } else if (
        this.state.emailthroughsignup === true &&
        this.state.passthroughsignup === true
      ) {
        console.log("loginvalidatedthroughsignup");
        this.props.history.push({
          pathname: "/home",
          state: {
            username: this.props.history.location.state.username,
            signup: true,
          },
        });
      } else {
        alert("invalid field values");
        this.props.history.push("/signup");
      }
    }
  };

  render() {
    return (
      <div className="row">
        <h2
          style={{
            textAlign: "center",
            color: "lightgoldenrodyellow",
            marginTop: "80px",
            fontFamily: "TimesNewRoman",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Welcome
        </h2>
        <div className="wrap">
          <h3>Sign In</h3>
          <form>
            <input
              type="email"
              onChange={this.emailChange}
              placeholder="Email"
              required
            />

            <input
              type="password"
              onChange={this.passwordChange}
              placeholder="Password"
              required
            />

            <button onClick={this.loginButton}>Continue</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
