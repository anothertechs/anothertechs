import AdSense from "react-adsense";
import React from "react";

export const BlogsAd = () => {
  return (
    <div>
      <AdSense.Google
        client="ca-pub-2965086569594457"
        slot="4363772608"
        style={{ display: "block" }}
        format="auto"
        responsive="true"
      />
    </div>
  );
};
