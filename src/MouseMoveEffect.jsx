import React, { useState, useEffect } from "react";

const MouseMoveEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const circleStyle = {
    position: "absolute",
    left: position.x - 25 + "px",
    top: position.y - 25 + "px",
    width: "100px",
    height: "100px",
    backgroundColor: "blue",
    borderRadius: "50%",
    pointerEvents: "none", // Prevents the circle from blocking mouse events
  };

  return <div style={circleStyle}></div>;
};

export default MouseMoveEffect;
