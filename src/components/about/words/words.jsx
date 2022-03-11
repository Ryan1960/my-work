import React from "react";
import "./words.css";
export function Words({ listItems }) {
  return (
    <div>
      <ul className="img-right-text">
        {listItems.map((item) => (
          <li className="li-word">
            <span className="img-right-text-color">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
