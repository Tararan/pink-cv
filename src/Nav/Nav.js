import React from "react";
import ScrollIntoView from 'react-scroll-into-view';

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
                <li key={`Nav ${item}`} className="Nav__list-item ">
                <ScrollIntoView alignToTop="true" selector={`#section-${item.replace(/\s/g, "")}`}>
                  <a
                    id={`${item.replace(/\s/g, "")}`}
                    className="Nav__list-item-link"
                    // onClick={ScrollToElement}
                  >
                    {item}
                  </a>
                </ScrollIntoView>
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
