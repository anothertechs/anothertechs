import React from "react";
import { Image } from "react-bootstrap";
import img from "./affilate.jpg";

export const AmazonAffilateLink = ({}) => {
  return (
    <div>
      <a href="https://amzn.to/3uej9SU" target="_blank">
        <Image src={img}></Image>
      </a>
    </div>
  );
};
