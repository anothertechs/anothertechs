import React from "react";
import { product } from "./Deals.module.css";
import { BlogPageAds } from "./adsLink";

export default function DealOfDay() {
  return (
    <div>
      <div>
        <p className="text-uppercase text-muted text-center">
          Hurry Up !! Check Out Todays Deal
        </p>
      </div>
      <div className="d-flex ">
        {BlogPageAds.map((ads, index) => (
          <div className={product}>
            <a href={ads.link}>
              <img src={ads.img} width="50%" alt="amazon deal" />
            </a>
            <p style={{ fontSize: 13 }}>
              <u>{ads.title}</u>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
