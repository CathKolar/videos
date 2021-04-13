import "./Footer.css";
import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <hr />
      <small>
        <a href="https://github.com/CathKolar/videos" target="_blank" rel="noreferrer">
          <span className="link"> Open-source code </span>
        </a>
        by
        <a href="https://www.catherinekolar.dev" target="_blank" rel="noreferrer">
          <span className="link"> Catherine Kolar </span>
        </a>
      </small>
    </div>
  );
}
