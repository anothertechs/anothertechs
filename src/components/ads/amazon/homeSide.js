import * as React from "react";
import { HomePageAds } from "./adsLink";

export function AmazonHomePageAds() {
  return (
    <div>
      {HomePageAds.map((ads, index) => (
        <div className="row mt-1 pt-2">
          <div className="col-md-6 ">
            <img src={ads.img} width="100%" />
          </div>
          <div className="col-md-6 mt-sm-2 mt-md-0">
            <a href={ads.link} style={{ color: "black" }}>
              <p> {ads.title}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
