import React from "react";
import companyLogo from "../assets/images/center-logo.png";
import Card from './Card'

export default function Body() {
  return <>
  <div style={{backgroundColor:'black', height:'100%', display:"flex",  justifyContent:"space-between"}}>
    hey
    <img
              src={companyLogo}
              style={{ height:"60%", width:"60%"}}
              alt="BigCo Inc. logo"
            />
<Card/>
  </div>
  </>;
}
