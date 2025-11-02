import React from "react";
import portrait from "../../assets/Hunterpill.png";
import placeholder from "../../assets/image.svg";

export function Group() {
  return (
    <div style={{
      height: 88, width: 150, borderRadius: 100,
      background: "#04040f", border: "6px solid #040612",
      boxShadow: "#0d0d0d85 6px 6px 16px", overflow: "hidden",
      display:"flex", alignItems:"center", justifyContent:"center"
    }}>
      <img
        src={portrait}
        alt="Portrait"
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = placeholder;
        }}
        style={{ width:"100%", height:"100%", objectFit:"cover" }}
      />
    </div>
  );
}
