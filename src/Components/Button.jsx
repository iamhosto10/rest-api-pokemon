import React from "react";
import { Boton } from "../Cover/cover.elements";

function Button({ text, handleClick }) {
  return (
    <>
      <Boton>
        <button onClick={handleClick}>{text ? text : "h"}</button>
        <div className="shadow"></div>
      </Boton>
    </>
  );
}

export default Button;
