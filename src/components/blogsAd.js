import AdSense from "react-adsense";
import React from "react";

export const BlogsAd = ({ slot }) => {
  return (
    <div>
      <AdSense.Google
        client="ca-pub-2965086569594457"
        slot={slot}
        style={{ display: "block" }}
        format="auto"
        responsive="true"
      />
    </div>
  );
};
