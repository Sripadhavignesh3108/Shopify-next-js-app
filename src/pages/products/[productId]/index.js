"use Client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Button from "../../../components/buttons/Button";
import { contextData } from "../../../globalState/store/Store.js";

function ProductID() {
  const contextValues = useContext(contextData);
  // console.log(contextValues);
  let params = useRef();
  const [message, setMessage] = useState({});
  const [ProductData, setProduct] = useState(null);
  const [discription, setDis] = useState([]);
  params = useParams();
  useEffect(() => {
    ApiCalling();
  }, [params]);
  const ApiCalling = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.productId}`
      );
      const data = await response.json();
      if (data) {
        setProduct(data);
        setDis(data.description.split(","));
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const AddToCartHandler = (ProductDetails) => {
    const cart = contextValues?.currentState?.ProductsInCart;
    const isExist = cart.some((each) => each?.id == ProductDetails?.id);
    if (isExist) {
      setMessage({ state: false, msg: "Product is Already exist in cart" });
    } else {
      contextValues.Dispatcher({
        type: "ADD_PRODUCTTOCART",
        payload: { ...ProductDetails },
      });
      setMessage({ state: true, msg: "Product Added to Cart Successfully" });
    }
  };
  return (
    <div id="each-Product-details">
      {ProductData ? (
        <>
          <div id="Product-details-image-part">
            <img src={ProductData.image} alt={ProductData.title} />
          </div>
          <div id="Product-details-data-part">
            <div>
              <h2>{ProductData.title}</h2>
              <p id="category">{ProductData.category}</p>
              {discription.length > 0 &&
                discription.map((list) => {
                  return <li key={list}>{list}</li>;
                })}
            </div>
            <div id="footer-of-Product-details-data">
              <p
                className="MessageInProductDetails"
                style={message.state ? { color: "green" } : { color: "red" }}
              >
                {message?.msg}
              </p>
              <p>
                Rating - <span>{ProductData.rating.rate}/5</span> Price -
                <span>{ProductData.price} $</span>
              </p>
              <div>
                <Button
                  content="Buy Now"
                  style={{
                    boxShadow: "0px 0px 5px 1px rgba(0,0,0,.155)",
                    fontWeight: 500,
                  }}
                ></Button>
                <Button
                  content="Add to Cart"
                  style={{
                    margin: "0px 0px 0px 10px",
                    boxShadow: "0px 0px 5px 1px rgba(0,0,0,.155)",
                    fontWeight: 500,
                  }}
                  onClick={() => AddToCartHandler(ProductData)}
                ></Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ProductID;
