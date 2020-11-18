import React from "react";
import "./Spiner.css";

export const Spiner = () =>
  <div className="sk-chase">
    {[1, 2, 3, 4, 5].map(index =>
      <div key={index} className="sk-chase-dot" />
    )}
  </div>
