import React from "react";
import s from "./Header.module.css";
import Logo from "../../img/header-logo.svg";

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src={Logo} alt=""/>
        </header>
    );
};

export default Header;
