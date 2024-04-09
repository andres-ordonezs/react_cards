import React from "react";

import "./Card.css";
/**Card:
 *
 * Props: img(url)
 *
 *State: none
 *
 * App-> CardsDeck => Card
 */
function Card({ img }) {
  return (
    <div className="Card">
      <img src={img}></img>
    </div>
  );
}

export default Card;
