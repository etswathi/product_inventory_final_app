import React from "react";
import "./css/common.css";
import backimage from "./images/background.jpg";


var background = {
  backgroundImage: `url(${backimage})`,
  height:'100%'
};






class Common extends React.Component {
  state = {};
  render() {
    return (

      <body style={background}>
        <input type="checkbox" id="check" />
        <header>
          <label for="check">
            <i className="fas fa-bars" id="sidebar_btn"></i>
            <div className="box">
              <table className="element">
                <tr>
                  <td>
                    <h3
                      style={{
                        color: "lightgoldenrodyellow",
                        textAlign: "center",
                        marginTop: "-7px",
                      }}
                    ></h3>
                  </td>
                </tr>
              </table>
            </div>
          </label>
          <div className="left_area">
            <h3>
              <span>Inventory.com</span>
            </h3>
          </div>
        </header>
        {/* <div className="sidebar">
          <center>
            <img src={logo} className="image" alt="image" />
          </center>
          <a href="#">
            <i className="fas fa-desktop"></i>
            <span>Dashboard</span>
          </a>
          <a href="#">
            <i className="fas fa-sign-out-alt"></i>
            <span>Signout</span>
          </a>
        </div>

        <br />
        <br />
        <br />
        <br /> */}
      </body>
    );
  }
}

export default Common;
