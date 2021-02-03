import "./Footer.css";
import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <hr />
      <small>
        <a href="https://github.com/CathKolar/videos" target="blank">
          <span className="link"> Open-source code </span>
        </a>
        by
        <a href="https://www.linkedin.com/in/catherinekolar/" target="blank">
          <span className="link"> Catherine Kolar </span>
        </a>
      </small>
    </div>
  );
}
