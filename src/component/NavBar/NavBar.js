import React from "react";
import NavItems from "./NavItem";

const NavBar = () => {
    return (
        <nav className="navigation ">
            <input type="checkbox" className=" navigation__checkbox" id="checkbox" />
            <label htmlFor="checkbox" className=" navigation__button">
                <span className=" navigation__button--icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <div className="navigation__logo-con">
                <img src="img/logo-small.png" alt="E-logo" className="navigation__logo" />
            </div>

            <div className="navigation__con">
                <div className="navigation__nav">
                    <ul className="navigation__links">
                        <NavItems href="#section-about" text='About'/>
                        <NavItems href="#section-services" text='Service' />
                        <NavItems href="#section-portfolio" text='Portfolio' />
                        <NavItems href="#section-contacts" text='contact' />
                    </ul>

                    <button className="navigation__nav--btn">Get Quote</button>
                </div>
            </div>

            <button className="navigation__btn">Get Quote</button>
        </nav>
    )
}

export default NavBar