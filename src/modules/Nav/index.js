import React from "react";
import {
  NavLink
} from "react-router-dom";

export default function Nav({
  links, invertColours
}) {
  return (
    <nav className={`nav ${invertColours ? 'nav--inverted': ''}`}>
      <ul className="nav__list desktop">
        {links.map((link, i) => {
          const isHome = link.object_slug === 'home';

          return (
          <li key={i} className={link.classes}>
            <NavLink exact={isHome} to={isHome ? '/' : link.object_slug}>{link.title}</NavLink>
          </li>
        )})}
      </ul>
    </nav>
  )
}