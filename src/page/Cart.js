import  { useState } from "react";
// ... rest of the imports

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import CartProduct from "../component/cartProduct"; // ✅ Check path if it's correct
import emptyCartImage from "../assest/empty.gif"; // ✅ Check if file exists and path is correct

import { loadStripe } from "@stripe/stripe-js";








const Cart = () => {
  
  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handleCOD = async () => {
    if (!user.email) {
      toast("Please login first");
      return navigate("/login");
    }

    if (!address || !mobile) {
      toast.error("Please fill address and mobile number");
      return;
    }

    const orderData = {
      products: productCartItem,
      totalPrice,
      totalQty,
      address,
      mobile,
      email: user.email,
      paymentMode: "Cash on Delivery",
      date: new Date(),
    };

    const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (res.ok) {
      toast.success("Order Placed Successfully! (COD)");
      // Clear cart (if implemented in Redux)
      // dispatch(clearCart()); <-- optional
      navigate("/");
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">
        Your Cart Items
      </h2>

      {productCartItem.length > 0 ? (
        <div className="my-4 flex gap-3 flex-col md:flex-row">
          {/* Cart Items */}
          <div className="w-full max-w-3xl">
            {productCartItem.map((el) => (
              <CartProduct key={el._id} {...el} />
            ))}
          </div>

          {/* Summary & Address Input */}
          <div className="w-full max-w-md ml-auto space-y-3">
            <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
            <div className="flex justify-between text-lg">
              <p>Total Qty :</p>
              <p>{totalQty}</p>
            </div>
            <div className="flex justify-between text-lg">
              <p>Total Price:</p>
              <p>
                <span className="text-red-500">₹</span> {totalPrice}
              </p>
            </div>

            {/* Address & Mobile */}
            <div>
              <label className="block font-semibold">Address:</label>
              <textarea
                rows={3}
                className="w-full border p-2 rounded"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label className="block mt-2 font-semibold">Mobile:</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            {/* Buttons */}
            <button
              onClick={handleCOD}
              className="bg-green-600 text-white py-2 w-full font-bold"
            >
              Cash On Delivery
            </button>

            <button
              //onClick={handlePayment}
              className="bg-red-500 w-full text-lg font-bold py-2 text-white"
            >
              Payment
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col">
          <img src={emptyCartImage} className="w-full max-w-sm" alt="img" />
          <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
