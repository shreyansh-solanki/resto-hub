import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from "../img/emptyCart.svg";
import CartItem from "./CartItem";

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  console.log(cartItems);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-[375px] h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md
          hover:shadow-md cursor-pointer text-textColor text-base"
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section  */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
          {/* cart Item section */}
          <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart Item  */}
            {cartItems &&
              cartItems.map((item) => <CartItem key={item.id} item={item} />)}
          </div>

          {/* cart total section  */}
          <div className="w-full flex-1 bg-gray-700 rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2 h-[50%]">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-300 text-lg">Sub Total </p>
              {<p className="text-gray-300 text-lg">$ 11</p>}
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-300 text-lg">Delivery </p>
              <p className="text-gray-300 text-lg">$ 2.5</p>
            </div>
            <div className="w-full border-b border-gray-700 my-2"></div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-200 text-lg font-semibold">Total </p>
              <p className="text-gray-200 text-lg font-semibold">$ 11.0</p>
            </div>
            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className=" my-3 w-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-xl py-3 px-3 tracking-wide md:left-0 text-white font-semibold text-lg"
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className=" my-3 w-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-xl py-3 px-3 tracking-wide md:left-0 text-white font-semibold text-lg"
              >
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
