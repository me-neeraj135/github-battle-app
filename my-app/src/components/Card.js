/** @format */
import React from "react";

function Card(props) {
  console.log(props);
  let { owner, stargazers_count, forks, open_issues, clone_url } = props.data;
  return (
    <>
      <li className="flex-20 textCenter">
        <span className="secondaryHeading">#{props.index + 1}</span> <br />
        <img
          style={{ width: `10rem`, height: `10rem` }}
          src={owner.avatar_url}
          alt={owner.login}
        />
        <h2>
          <a className="secondaryHeading" href={clone_url}>
            {owner.login}
          </a>
        </h2>
        <div className="spnBx flex align-center">
          <span>
            <i className="fa-solid fa-user"></i>
          </span>
          <span>
            <a style={{ fontSize: `1.2rem` }} href={owner.html_url}>
              {owner.login}
            </a>
          </span>
        </div>
        <div className="spnBx flex align-center">
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span> {stargazers_count} starts</span>
        </div>
        <div className="spnBx flex align-center">
          <span>
            <i className="fa-solid fa-code-fork"></i>
          </span>
          <span>{forks} forks</span>
        </div>
        <div className="spnBx flex align-center">
          <span>
            <i className="fa-solid fa-triangle-exclamation"></i>
          </span>
          <span>{open_issues} open issues</span>
        </div>
      </li>
    </>
  );
}
export default Card;
