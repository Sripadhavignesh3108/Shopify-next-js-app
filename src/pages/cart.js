import React, { useContext, useEffect, useState } from "react";
import { contextData } from "../globalState/store/Store";
import Image from "next/image";
import Button from "../components/buttons/Button.js";
import { useRouter } from "next/navigation";
function Cart() {
  const Router = useRouter();
  const [productInCart, setProductInCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);
  const contextValues = useContext(contextData);
  console.log(productInCart);
  useEffect(() => {
    setProductInCart(contextValues?.currentState?.ProductsInCart);
    if (contextValues?.currentState?.ProductsInCart?.length > 0) {
      let total = 0;
      for (let i of contextValues?.currentState?.ProductsInCart) {
        total += Number(i.price);
      }
      setTotalPrice(total.toFixed(2));
    }
  }, [contextValues]);
  return (
    <div>
      <h1 id="Cart-title">Shopping Cart</h1>
      <div id="cart-container">
        {productInCart.length > 0 ? (
          <div id="fullCartDiv">
            {productInCart.map((product, index) => (
              <div key={index} className="EachProdctDiv">
                <div
                  style={{ backgroundImage: `url(${product.image})` }}
                  className="imageDivInCart"
                ></div>
                <div className="EachProductDetails">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p className="CartRating">
                    Rating - <span>{product.rating.rate}/5</span>
                  </p>
                  <p className="inCartPrice">{product.price}$ /-</p>
                </div>
              </div>
            ))}
            <div className="totalPriceInCart">
              <p>
                Total Products <span> : {productInCart?.length}</span>
              </p>
              <p>
                Total Price <span> : {totalPrice} $</span>
              </p>
              <p>
                Discount % <span> : N/A</span>
              </p>
              <p>
                Final Price <span> : {totalPrice} $</span>
              </p>
            </div>
            <div className="totalPriceInCartButton ">
              <Button
                content="Proceed Payment"
                style={{
                  boxShadow: "0px 0px 10px 1px rgba(0,0,0,.205)",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              />
              <Button
                content="Continue Shopping"
                style={{
                  boxShadow: "0px 0px 10px 1px rgba(0,0,0,.205)",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
                onClick={() => Router.push("/products")}
              />
            </div>
          </div>
        ) : (
          <div id="empty-cart">
            <Image src={"/images/shopping.png"} width={250} height={250} />
            <p>Your Cart is Empty</p>
            <Button
              content="Shop Now"
              style={{
                // boxShadow: "0px 0px 10px 1px rgba(0,0,0,.105)",
                fontWeight: 500,
                margin: "10px 0px 0px 0px",
                textTransform: "uppercase",
              }}
              onClick={() => Router.push("/products")}
            ></Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
