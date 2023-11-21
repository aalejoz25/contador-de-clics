import React from "react";
import "./../stylesheets/Button.css";

class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.isClickButton ? "click-button" : "reset-button"}
        onClick={this.props.handleClick}
      >
        {this.props.Buttontext}
      </button>
    );
  }
}

export default Button;
