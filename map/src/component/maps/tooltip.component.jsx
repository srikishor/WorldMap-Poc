import React from "react";

const Tooltip = ({ content, coordinates }) => {
  return (
    <div
      style={{
        position: "absolute",
        transform: "translate(-50%, -100%)",
        top: `${coordinates[1]}px`,
        left: `${coordinates[0]}px`,
        backgroundColor: "white",
        padding: "5px",
        border: "1px solid black",
        borderRadius: "5px",
        pointerEvents: "none",
      }}
    >
      {content}
    </div>
  );
};

export default Tooltip;