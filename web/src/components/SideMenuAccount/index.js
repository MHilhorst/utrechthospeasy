import React from "react";
import "./style.css";
import { Row, Nav } from "react-bootstrap";
class SideMenuAccount extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <img src={this.props.userImg} className="user-profile-img " />
        <p className="img-support">Foto aanpassen</p>
      </>
    );
  }
}

export default SideMenuAccount;
