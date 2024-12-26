import React from "react";

const RenderList = () => {
  const points = [
    "Use Array.map",
    "Not a for loop",
    "Give each item a unique key",
    "Avoid using array index as the key",
  ];

  return (
    <div style={{ backgroundColor: "#c4e79b", padding: "20px", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center", color: "#3e573c" }}>The "React Way" to Render a List</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {points.map((point, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              fontSize: "16px",
              color: "#3e573c",
            }}
          >
            <span style={{ marginRight: "10px", color: "green" }}>✔</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderList;
