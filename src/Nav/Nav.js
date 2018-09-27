import React from "react";
import scrollToComponent from "react-scroll-to-component";

const ScrollToElement = e => {
  console.log(e.target.id);
  const ScrollHere = document.getElementById("section-" + e.target.id);
  scrollToComponent(ScrollHere, {
    offset: -55,
    align: "top",
    // ease: "outExpo",
    ease:'inOutCube',
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

        <div
          className={` ${this.state.isActive ? "" : "show"}`}
          onClick={this.ToggleMenu}
          id="nav__menu"
        >
          <div className="container">
            <ul className="Nav__list">
              {this.props.listItem.map(item => {
                return (
                  <li onClick={ScrollToElement} key={`Nav ${item}`} className="Nav__list-item " >
                    <a onClick={ScrollToElement} id={`${item.replace(/\s/g, "")}`} className="Nav__list-item-link">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
