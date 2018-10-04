import React from "react";
import { Link } from 'react-scroll';
// import * as Scroll from 'react-scroll';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 
// import ScrollableAnchor, {goToAnchor} from "react-scrollable-anchor";
// import ScrollIntoView from 'react-scroll-into-view';

// var Scroll = require('react-scroll');
// var Link  = Scroll.Link;
// var Element = Scroll.Element;
// var scroller = Scroll.scroller;


// scrollToBottom: function() {

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
                {/* <ScrollIntoView smooth="true" alignToTop="true" selector={`#section-${item.replace(/\s/g, "")}`}> */}
                  <Link
                  to={`section-${item.replace(/\s/g, "")}`} spy={true} smooth={true} duration={500}
                    id={`${item.replace(/\s/g, "")}`}
                    className="Nav__list-item-link">
                    {item}
                  </Link>
                {/* </ScrollIntoView> */}
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
