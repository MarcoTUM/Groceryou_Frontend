import React from "react";

import { Link } from "react-router-dom";

import Logo from "../img/GroceryouLogo.png";
import UserService from "../services/UserService";

import styles from "./NavBar.module.css";
import LoginRegisterButtons from "./LoginRegisterButtons";
import LogoutButton from "./LogoutButton";

class NavBar extends React.Component {
  render() {
    let isLoggedIn = UserService.isAuthenticated();
    let content;
    if (isLoggedIn) content = <LogoutButton />;
    else content = <LoginRegisterButtons />;

<<<<<<< HEAD
    return (
      <nav className={styles.nav}>
        <Link to="/">
          <img src={Logo} alt="Groceryou Logo" />
        </Link>
        {content}
      </nav>
    );
  }
=======
    render() {
        return (
            <nav>
                <Link to="/"><img src={Logo} alt="Groceryou Logo" /></Link>
                <div class="LoginRegisterButtonDiv">
                    <Link to="/login"><button class="LoginRegisterButton">Login</button></Link>
                    <Link to="/register"><button class="LoginRegisterButton">Register</button></Link>
                </div>
            </nav>
        );
    }
>>>>>>> Navbar now only with login and register button, fixed AcceptRequest scrollbar bug.
}

export default NavBar;
