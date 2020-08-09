import React from "react";
import "./css/landpage.css";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  SignUpFunction = () => {
    console.log(this.props);
    this.props.history.push("/signup");
  };

  render() {
    return (
      <div>
        <div style={{ color: "white" }}>
          <h1 style={{ fontSize: "80px", fontFamily: "TimesNewRoman" }}>
            Welcome
          </h1>
        </div>
        <div style={{ color: "white" }}>
          <p style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
            Explore the world of products!!!!!!!Manage them....You are in the
            right place !!
          </p>
        </div>

        <button onClick={this.SignUpFunction}>SignUp</button>
      </div>
    );
  }
}

export default LandingPage;
