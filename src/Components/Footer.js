import React from "react";
import logo from "../images/Logo .svg";

function Footer() {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="/" />
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            tradinatal recipes served with a modern twist.
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservation</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>
              Phone: <br />+ 0123 456 789
            </li>
            <li>
              Email: <br />
              little@lemon.org
            </li>
          </ul>
        </div>
        <div>
          <h3>Soical Media Links</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
