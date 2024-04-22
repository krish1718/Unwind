import React, { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
// import { cartPriceContext } from "../../../App";

export default function PaymentMethod() {
  // const { cartPrice, setcartPrice } = useContext(cartPriceContext);
  // const [coupons, setCoupons] = useState(["NEWYEAR60"]);
  // const [couponInputVal, setcouponInputVal] = useState();
  // const discount = 0.4; // i.e 60 % discount
  // const [discountedPrice, setdiscountedPrice] = useState();

  const couponInputRef = useRef();

  // useEffect(() => {
  //   // setcartPrice(15000);
  //   setdiscountedPrice(cartPrice);
  // }, []);

  // useEffect(() => {
  //   coupons.includes(couponInputRef.current.value) &&
  //     cartPrice &&
  //     setdiscountedPrice(cartPrice * discount);
  // }, [couponInputVal]);

  const { id } = useParams();

  return (
    <div className="bg-gray-200 min-h-[60vh]">
      <div className="flex p-4">
        {/* left part  */}
        <div className="w-3/5 bg-white rounded-xl text-left p-3 text-black">
          <div className="text-2xl mb-3 font-semibold">
            Select a payment method
          </div>
          <hr />
          <div className="mt-4">
            <div className="my-2 font-semibold text-gray-700">GOOGLE PAY</div>
            <div className="flex border rounded-md p-4">
              <input type="checkbox" className="mr-4 w-4" />
              <div className="font-semibold text-xl">
                Google Pay 
                <div className="font-normal text-gray-700">
                  Get started with Google pay UPI
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="my-3 font-semibold text-gray-700">
              MORE WAYS TO PAY
            </div>
            <div className="flex border rounded-md p-4">
              <input type="checkbox" className="mr-4 w-4" />
              <div className="font-semibold text-xl">
                Pay with Debit/Credit/ATM Cards
                <div className="font-normal text-gray-700">
                  You can save your cards as per new RBI guidelines
                </div>
              </div>
            </div>
            <div className="border p-4 text-xl text-blue-600">
              Add Gift Card or Promo Code
              <div className="flex flex-wrap mt-2 space-x-4 text-black">
                <input
                  ref={couponInputRef}
                  className="border border-gray-600 py-3 px-6 rounded-md"
                  placeholder="Enter Code"
                  type="text"
                />
                <button
                  // onClick={() =>
                  //   couponInputRef.current.value != "" &&
                  //   setcouponInputVal(couponInputRef.current.value)
                  // }
                  className="border py-3 px-6 rounded-md"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* right part  */}
        <div className=" w-5/12 px-3">
          <div className="bg-white text-left rounded-xl p-4 text-black">
            <NavLink to="/paymentpage">
              <button className="bg-purple-600 text-sm text-white font-semibold py-2 w-full rounded-lg my-2 hover:bg-purple-700">
                Place Your Order And Pay
              </button>
            </NavLink>
            <div className="text-sm my-2">
              You can review this order before it's final.
            </div>
            <div className="font-semibold">Order Summary</div>
            <div className="flex">
              <div>Items:</div>
              <div className="ml-auto">₹{id}.00</div>
              {/* <div className="ml-auto">₹1000.00</div> */}
            </div>
            <div className="flex">
              <div>Total:</div>
              {/* <div className="ml-auto">₹{cartPrice}.00</div> */}
              <div className="ml-auto">₹{id}.00</div>
            </div>
            <div className="flex">
              <div>Promotion(s) Applied:</div>
              {/* <div className="ml-auto">- ₹{cartPrice}.00</div> */}
              {/* Coupon discount NEWYEAR60 below */}
              <div className="ml-auto">- ₹0.00</div>
            </div>
            <div className="flex text-xl text-red-600 font-bold my-2">
              <div>Order Total:</div>
              {/* <div className="ml-auto">₹{discountedPrice}.00</div> */}
              <div className="ml-auto">₹{id}.00</div>
            </div>
            <div className="font-semibold">
              Order Totals include GST.
              <a className="text-sm cursor-pointer ml-1 text-blue-500 hover:underline">
                See details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
