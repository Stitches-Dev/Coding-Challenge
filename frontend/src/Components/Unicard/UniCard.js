import React, { useEffect, useState } from "react";
import "./UniCard.scss";
import location from "../../Assets/Images/location.svg";

function UniCard(props) {
  return (
    <div className="uniCard_main_div" style={{ width: props.width }}>
      <img src={props.image} alt="uniImage" className="uniCard_image" />
      <div className="uniCard_content">
        <div className="uniCard_content_header">
          <div className="uniCard_content_header_title">
            <img
              src={props.logo}
              className="uniCard_content_header_logo"
              alt="uniLogo"
            />
            <h3 className="uniCard_uniName">{props.uniName}</h3>
          </div>
          <div className="uniCard_content_header_location">
            <img src={location} alt="location" className="uniCard_location" />
            <div className="uniCard_location_text">{props.uniLocation}</div>
          </div>
        </div>
        <div className="uniCard_content_body">
          <div className="uniCard_content_body_description">
            {props.uniDescription}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniCard;
