import React from "react";
import { Group } from "./Group";
import callMade from "../../assets/call-made.svg";
import variant2 from "../../assets/Bluepill.png";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="frame">
        <div className="div">
          <div className="frame-2">
            <p className="div-2" style={{ marginTop: 0, marginBottom: 0 }}>
              <span className="text-wrapper">I’m </span>
              <span className="span">Hunter</span>
            </p>
            <div className="frame-3">
              <Group />
              <div className="text-wrapper-2">,</div>
            </div>
          </div>
          <div className="frame-2">
            <p className="div-2" style={{ marginTop: 0, marginBottom: 0 }}>
              <span className="text-wrapper">a </span>
              <span className="span">product</span>
            </p>
            <img className="group-variant" alt="Variant" src={variant2} />
            <div className="div-2">Designer</div>
          </div>
        </div>
        <p className="p">
          For the past 7 years, I’ve been designing meaningful digital experiences
          that connect user needs with business strategy.
        </p>
      </div>
      <button className="button" type="button">
        <div className="state-layer">
          <div className="label-text">Let’s connect</div>
          <img className="call-made" alt="Call made" src={callMade} />
        </div>
      </button>
    </div>
  );
}
