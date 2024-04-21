import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      color="red"
      options={{
        strings: ["MERN Stack Developer", "Java Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
