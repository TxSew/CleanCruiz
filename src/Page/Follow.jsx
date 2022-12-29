import React from "react";
import { Klarna, Mastercard, Netewer, Strpe , Amazon } from "../assets";

function Follow() {
  return (
    <div className="flex">
      <div className="items-follow">
        <Amazon width={"130px"} height={"77px"} />
      </div>
      <div className="items-follow">
        <Mastercard width={'130px'} height={'77px'} />
      </div>
      <div className="items-follow">
        <Klarna width={"130px"} height={"77px"} />
      </div>
      <div className="items-follow">
        <Mastercard width={"130px"} height={"77px"} />
      </div>
      <div className="items-follow">
        <Strpe />
      </div>
      <div className="items-follow">
        <Netewer />
      </div>
    </div>
  );
}

export default Follow;
