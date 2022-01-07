import React from 'react';
  import { Link } from 'react-router';

  export default class NavBar extends React.Component {
    render() {    
      return (
        <nav className="Nav">
          <div className="Nav__container">
            <Link to="/" className="Nav__brand">
            </Link>    
            <div className="Nav__right">
              <ul className="Nav__item-wrapper">
                <li className="Nav__item">
                  <Link className="Nav__link" to="/AboutUs">About</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/Contact">Contact</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/FAQ">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }