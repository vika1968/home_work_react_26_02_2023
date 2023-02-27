import React, { useState } from "react";

 //----- Change color of the circle -----
function ChangeColor() {
  const [color, setColor] = useState("");
  return (
    <div className="circle">
      <br />
      <h1 style={{color: "#6c6cbd"}}>-------------  Click on the color palette to change the color of the circle  -------------</h1>  
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "150px",
            height: "150px",
            border: "3px solid #a44848",
            backgroundColor: color,
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <br /> 
      <input type="color" onChange={(e) => setColor(e.target.value)} />
    </div>
  );
}
export default ChangeColor;
