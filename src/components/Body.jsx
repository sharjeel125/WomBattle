import React from "react";
import companyLogo from "../assets/images/center-logo.png";
import Sidecard from "./Sidecard";
import "../App.css";

export default function Body() {
  return (
    <>
      <div
        className="my-5"
        style={{
          width: "100%",
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={companyLogo}
            style={{ height: "100%", width: "100%" }}
            alt="BigCo Inc. logo"
          />
        </div>

        <Sidecard />
      </div>
    </>
  );
}
