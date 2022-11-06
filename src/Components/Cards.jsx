import React from "react";
//styledComponents
import { Card } from "../Cover/cover.elements";

function Cards(props) {
  return (
    <Card>
      <p className="name">{props.name && props.name}</p>
      <section className="circle"></section>
      <img
        className="image"
        src={props.img && props.img}
        alt="imagen pokemon"
      />
    </Card>
  );
}

export default Cards;
