import React from "react";
import {Link} from 'react-scroll';

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
          >
            {this.props.listItem.map(item => {
              return (
                <li key={`Nav ${item}`} className="Nav__list-item ">
                  <Link  onClick={this.ToggleMenu}
                  activeClass="active"
                  to={`section-${item.replace(/\s/g, "")}`} 
                  offset={-50}  isDynamic={true} spy={true} smooth={true} duration={300} ignoreCancelEvents={true}
                    id={`${item.replace(/\s/g, "")}`}
                    className="Nav__list-item-link">
                    {item}
                  </Link>
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
