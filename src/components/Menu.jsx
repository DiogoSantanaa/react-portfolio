import React, { Component } from "react";

class Menu extends Component {
  render() {
    const menus = ["Home", "About me", "Portfolio", "Contact"];
    const navLinks = menus.map(menuText => {
      // this will this code for each word of the array menu
      return (
        <li className="nav-item">
          <a className="page-link" href={"#" + menuText}>
            <span className="hover-line">
              <span>{menuText}</span>
            </span>
          </a>
        </li>
      );
    });
    return (
      <div id="menu">
        {/* container that fills all the page */}
        <div className="container-fuild">
          {/* nav text with links and a line above the text when its active  */}
          <ul className="menu-nav">{navLinks}</ul>

          {/* social links align to the right   */}
          <ul className="list-socials">
            <li>
              <a href="#" rel="external" target="_blank">
                <i className="icon">
                  <svg />
                </i>
              </a>
            </li>
          </ul>

          {/* contacts with option of the phone number open call*/}
          <div className="contact">
            <a href="tel:+(351)962 350 734" rel="external" className="phone">
              +(351)962 350 734
            </a>
            <br />
            <a
              href="mailto:diogosantana1997@outlook.pt"
              rel="external"
              class="mail"
            >
              diogosantana1997@outlook.pt
            </a>
          </div>
        </div>

        {/* CV download link */}
        <a className="cvLink" href="#" target="_blank" rel="external">
          <i className="arrow">
            <span className="line">
              <span className="inner" />
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="13"
              viewBox="0 0 7.57 12.88"
            >
              <polygon points="1.05 12.88 0 11.81 5.44 6.44 0 1.07 1.05 0 7.57 6.44 1.05 12.88" />
            </svg>
          </i>
          <span className="block-title">Download CV</span>
        </a>
      </div>
    );
  }
}

export default Menu;
