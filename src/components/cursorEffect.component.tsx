"use client";
import React, { useEffect, useRef, useState } from "react";
interface Coords {
  x: number;
  y: number;
}
function CursorEffect() {
  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });

  useEffect(() => {
    const handleBodyMouseMove = (event: MouseEvent) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleBodyMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleBodyMouseMove);
    };
  }, []);
  return (
    coords.x !== 0 &&
    coords.y !== 0 && (
      <div
        className="-z-20 shadow-cstm "
        style={{
          position: "fixed",
          left: coords.x,
          top: coords.y,
        }}
      ></div>
    )
  );
}

export default CursorEffect;
