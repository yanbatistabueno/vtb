"use client";
import "./SoftwareSnapshot.css";
import { useState } from "react";
export default function SoftwareSnapshot(props) {
  let [visibility, setVisibility] = useState(false);
  function showImage() {
    setVisibility((prevVisibility) => (visibility = !prevVisibility));
  }

  return (
    <div className="software-snapshot-container">
      <button onClick={props.click}>
        <img src={props.Slide} alt="" />
      </button>
    </div>
  );
}
