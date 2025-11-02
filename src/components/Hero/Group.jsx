import React from "react";
import portrait from "../../assets/image.svg";

export function Group() {
  return (
    <div style={{
      height: 88, width: 150, borderRadius: 100,
      background: "#04040f", border: "6px solid #040612",
      boxShadow: "6px 6px 28px rgba(13,13,13,0.32)", overflow: "hidden",
      display:"flex", alignItems:"center", justifyContent:"center"
    }}>
      <img src={portrait} alt="Portrait" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
    </div>
  );
}
