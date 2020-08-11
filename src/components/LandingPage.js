import React from "react";
import "./css/landpage.css";
import inventory from './images/inventory.jpg'

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


        <div>
          <img style={{width:'400px',height:'400px',borderRadius:'300px'}} src={inventory}/>
          </div>

          <button
          style={{
            width: "400px",
            marginTop: "30px",
            backgroundColor: "lightyellow",
          
          }}
          onClick={this.SignUpFunction}
        >
          <i style={{ fontSize: "40px" }} class="fas fa-step-forward"></i>
          <b>Click here to Login or Sign up</b>
        </button>
        

      
      </div>
    );
  }
}

export default LandingPage;
