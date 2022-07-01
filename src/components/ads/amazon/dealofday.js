import { useEffect, useState } from "react";
import React from "react";
import { product } from "./Deals.module.css";
import firebase from "../../../firebase";
const urlLinkInitial =
  "https://couponsandoffer.github.io/couponsandoffer/#/product/";

export default function DealOfDay() {
  const [loading, setLoading] = useState(false);
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    const getOffers = () => {
      const ref = firebase
        .firestore()
        .collection("offers")
        .orderBy("date", "desc")
        .limit(5);
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
      <div>
        <p className="text-uppercase text-muted text-center">
          Hurry Up !! Check Out Todays Deal
        </p>
      </div>
      <div className="d-flex ">
        {loading === true ? (
          <div />
        ) : (
          offers.map((ads, index) => (
            <div key={index} className="mr-1 pr-1">
              <div className={product}>
                <a
                  href={`${urlLinkInitial}${ads.id}`}
                  className="link-secondary"
                >
                  <div className="d-flex justify-content-center">
                    <img
                      className="d-flex align-items-center"
                      src={ads.img}
                      width="100px"
                      height="100px"
                      alt="amazon deal"
                    />
                  </div>
                  <p
                    className="d-none d-sm-block text-center"
                    style={{ fontSize: 16 }}
                  >
                    <u>{`${ads.title.substring(0, 30)}..`}</u>
                  </p>
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
