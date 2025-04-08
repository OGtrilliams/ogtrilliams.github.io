import React, { useEffect, useRef, useState } from "react";

const Peel = ({ id }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const peelRef = useRef(null);

  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  const handleMove = (evt) => {
    if (!isDragging) return;

    const { clientX, clientY } = evt.touches?.[0] || evt;
    setPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    const element = peelRef.current;
    if (!element) return;

    element.addEventListener("touchmove", handleMove, { passive: false });

    return () => {
      element.removeEventListener("touchmove", handleMove);
    };
  }, [isDragging]);

  return (
    <div
      ref={peelRef}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onMouseMove={handleMove}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        userSelect: "none", // Prevent text selection during drag
      }}
    >
      Content
    </div>
  );
};

export default Peel;
