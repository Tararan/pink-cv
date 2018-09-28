import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component/index";

const ScrollToElement = e => {
  console.log(e.target.id);
  const ScrollHere = document.getElementById("section-" + e.target.id);
  console.log(ScrollHere);
  scrollToComponent(ScrollHere, {
    offset: 0,
    align: "top",
    // ease: "outExpo",
    ease: "inOutCube",
    duration: 1400
  });
};

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: true };
  }

  ToggleHamburger = e => {
    this.setState({ isActive: !this.state.isActive });
  };

  ToggleMenu = e => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <div className="container">
        <a
          className={`hamburger hamburger--collapse js-hamburger ${
            this.state.isActive ? "" : "is-active"
          }`}
          onClick={this.ToggleHamburger}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner" />
          </div>
        </a>
        <div className="container">
          <ul
            className={`Nav__list ${
              this.state.isActive ? "" : "Nav__list--open"
            }`}
            onClick={this.ToggleMenu}
          >
            {this.props.listItem.map(item => {
              return (
                <li
                  key={`Nav ${item}`}
                  className="Nav__list-item "
                >
                  <a
                    id={`${item.replace(/\s/g, "")}`}
                    className="Nav__list-item-link"
                    onClick={ScrollToElement}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
