import React from "react";
import img from "./41iHN9Y07cS.jpg";
import earphone from "./31NmWpDfMZL.jpg";
import appliances from "./41PMN18ru2L.jpg";
import protien from "./51JU8ZlLATL.jpg";
import { product } from "./Deals.module.css";

export default function DealOfDay() {
  return (
    <div>
      <div>
        <p className="text-uppercase text-muted text-center">
          Hurry Up !! Check Out Todays Deal
        </p>
      </div>
      <div className="d-flex ">
        <div className={product}>
          <a href="https://amzn.to/3N6pwAA">
            <img src={img} width="50%" alt="amazon deal" />
          </a>
        </div>
        <div className={product}>
          <a href="https://amzn.to/3JyCHrS">
            <img src={earphone} width="50%" alt="amazon deal" />
          </a>
        </div>
        <div className={product}>
          <a href="https://amzn.to/3N3IFmx">
            <img src={appliances} width="50%" alt="amazon deal" />
          </a>
        </div>
        <div className={product}>
          <a href="https://amzn.to/3wnk5XK">
            <img src={protien} width="50%" alt="amazon deal" />
          </a>
        </div>
      </div>
    </div>
  );
}
