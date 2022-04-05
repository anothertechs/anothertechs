import * as React from "react";
import { useEffect, useState } from "react";
import { product } from "./Deals.module.css";
import firebase from "../../../firebase";

export function AmazonHomePageAds() {
  const [loading, setLoading] = useState(false);
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    const getOffers = () => {
      const ref = firebase
        .firestore()
        .collection("offers")
        .orderBy("date", "desc")
        .limit(4);
      setLoading(true);
      ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setOffers(items);
        setLoading(false);
      });
    };
    getOffers();
  }, []);
  return (
    <div>
      {loading === true ? (
        <div />
      ) : (
        offers.map((ads, index) => (
          <div className="d-none d-sm-block">
            <div className={product}>
              <div className="row mt-1 pt-2">
                <div className="col-md-6 ">
                  <div className="d-flex justify-content-center">
                    <img src={ads.img} width="100px" height="100px" />
                  </div>
                </div>
                <div className="col-md-6 mt-sm-2 mt-md-0">
                  <div className="text-center">
                    <a href={ads.link} style={{ color: "black" }}>
                      <p> {ads.title}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
