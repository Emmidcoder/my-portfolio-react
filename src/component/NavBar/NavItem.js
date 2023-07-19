import React from 'react'

const NavItems = (props) => {
    return (
        <li className="navigation__item">
            <a className="navigation__link" href={props.href}>{props.text}</a>
        </li>
    )
}

export default NavItems