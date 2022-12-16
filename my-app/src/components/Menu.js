/** @format */

import { NavLink, useLocation } from "react-router-dom";

function Menu(props) {
  let { lang } = props;
  return (
    <ul className="menu flex justify-center">
      <li
        className={lang === `All` ? `current` : `menuLi`}
        onClick={() => props.handleMenu(`All`)}
      >
        all
      </li>
      <li
        className={lang === `JavaScript` ? `current` : `menuLi`}
        onClick={() => props.handleMenu(`JavaScript`)}
      >
        javaScript
      </li>
      <li
        className={lang === `Ruby` ? `current` : `menuLi`}
        onClick={() => props.handleMenu(`Ruby`)}
      >
        ruby
      </li>
      <li
        className={lang === `Java` ? `current` : `menuLi`}
        onClick={() => props.handleMenu(`Java`)}
      >
        java
      </li>
      <li
        className={lang === `Css` ? `current` : `menuLi`}
        onClick={() => props.handleMenu(`Css`)}
      >
        css
      </li>
      <li
        className={lang === `Python` ? `current` : `menuLi`}
        onClick={() => props.handleMenu(`Python`)}
      >
        python
      </li>
    </ul>
  );
}

export default Menu;
