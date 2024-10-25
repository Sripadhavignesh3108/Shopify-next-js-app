"use client";
import React, { useEffect, useState } from "react";
import cardStyles from "../dataFetching.module.css";
import Link from "next/link";
function DataFetching() {
  const [apidata, setData] = useState({});
  const ArrayOfKeys = Object.keys(apidata);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const seperatedData = {};
        if (data.length > 0) {
          for (let i of data) {
            if (seperatedData[i.category]) {
              seperatedData[i.category] = [...seperatedData[i.category], i];
            } else {
              seperatedData[i.category] = [i];
              setData(seperatedData);
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // console.log(apidata);
  return (
    <div className={cardStyles.backGroundOfProductData}>
      {ArrayOfKeys.length > 0 ? (
        ArrayOfKeys.map((each, index1) => {
          return (
            <div key={each} className={cardStyles.eachRowStyle}>
              <div>
                <p className={cardStyles.rowTitle}>{each}</p>
                <p className={`${cardStyles.rowTitle2} ${cardStyles.rowTitle}`}>
                  {each}
                </p>
              </div>
              <div className={cardStyles.collectionOfFasion}>
                {apidata[each].map((every, index2) => {
                  if (
                    !(
                      (index1 == 0 && index2 == 0) ||
                      (index1 == 1 && index2 == 0)
                    )
                  ) {
                    return (
                      <Link
                        key={every.id}
                        href={`/products/${every.id}`}
                        className={cardStyles.LinkStyles}
                      >
                        <div
                          className={cardStyles.eachProductStyle}
                          style={{ backgroundImage: `url(${every.image})` }}
                        >
                          <p>{every.title}</p>
                          <p className={cardStyles.price}>{every.price} $</p>
                        </div>
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default DataFetching;
