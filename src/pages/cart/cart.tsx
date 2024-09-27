import { ArrowLeft, Close } from "@/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "@/interfaces";

import line from "@/assets/line.png";
import lineSmall from "@/assets/line-small.png";
import {
  addToCart,
  decrementCart,
  removeFromCart,
} from "@/context/context/slices/cartSlice";
import { Button } from "@/components/ui/button";

import "./cart.css";

const Cart = () => {
  const cart = useSelector((state: { cart: { value: CartItem[] } }) => {
    return state.cart.value;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container border-t-[#E9E7E7] border-t-2">
        <Link
          to={"/products"}
          className="flex items-center gap-[9px] font-readex font-semibold text-[18px] text-[#0D2612] mt-[79px]"
        >
          <ArrowLeft /> Back to shopping
        </Link>
        <h1 className="mt-[53px] font-hammersmith text-[32px] font-normal text-[#0D2612] mb-[57.33px]">
          SHOPPING CART
        </h1>
        <div className="w-full flex justify-between mb-[118px] flex-col xl:flex-row">
          <div className="w-full h-full">
            <img src={line} alt="alt" className="w-full h-[2px]" />
            <table className="w-full mt-[12.47px]">
              <thead>
                <tr className="">
                  <th className="pl-[43.2px] text-start pb-[8px] text-[#0D2612] font-hammersmith text-[22px] font-normal">
                    Product
                  </th>
                  <th className="text-start pb-[8px] text-[#0D2612] font-hammersmith text-[22px] font-normal">
                    Quantity
                  </th>
                  <th className="text-start pb-[8px] text-[#0D2612] font-hammersmith text-[22px] font-normal">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartItem, index) => (
                  <tr className="relative" key={cartItem.id}>
                    <td className="py-[35px] text-start">
                      {index === 0 && (
                        <img
                          src={line}
                          alt="alt"
                          className="w-full h-[2px] absolute top-0 left-0"
                        />
                      )}
                      <div className="flex flex-col sm:flex-row items-start gap-[36px]">
                        <div>
                          <button
                            title="Delete"
                            className="pl-[19px] pr-[22px]"
                            onClick={() =>
                              dispatch(removeFromCart(cartItem.id))
                            }
                          >
                            <Close />
                          </button>
                          <img
                            src={cartItem.image_url}
                            alt={cartItem.name}
                            className="w-[155px] h-[155px] ml-[57px] sm:ml-0"
                          />
                        </div>
                        <div className="flex flex-col gap-[7px]">
                          <h1 className="text-[20px] font-normal font-hammersmith text-[#0D2612]">
                            <Link to={`/products/${cartItem.id}`}>
                              {cartItem.brand_name.toUpperCase()}
                            </Link>
                          </h1>
                          <p className="max-h-[46px] min-h-[46px] font-readex font-[300] text-[18px] text-[#190D26] opacity-85">
                            <Link to={`/products/${cartItem.id}`}>
                              {cartItem.name}
                            </Link>
                          </p>
                          <div className="flex gap-[7px]">
                            {cartItem.color_options.map((color) => (
                              <div
                                key={color}
                                className={`w-[22px] h-[22px] rounded-full ${
                                  color.toLocaleLowerCase() === "#ffffff"
                                    ? "border-2 border-black"
                                    : ""
                                }`}
                                style={{
                                  backgroundColor: color,
                                }}
                              ></div>
                            ))}
                          </div>
                          <p className="font-readex font-[300] text-[16px] text-[#0BA42D]">
                            In stock
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-[35px] text-start w-[175px] flex items-start">
                      <div className="gap-[30px] flex justify-between items-center bg-[#F5F5F5] p-[10px] rounded-[40px]">
                        <button
                          className="px-[5.5px] text-[27px] font-inter font-semibold disabled:opacity-70 duration-300"
                          disabled={cartItem.quantity <= 1}
                          onClick={() => dispatch(decrementCart(cartItem))}
                        >
                          -
                        </button>
                        <span className="inline-bloack h-full text-[#0D2612] font-inter font-semibold text-[22px]">
                          {cartItem.quantity}
                        </span>
                        <button
                          className="px-[5.5px] text-[27px] font-inter font-semibold"
                          onClick={() => dispatch(addToCart(cartItem))}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-[35px] text-start align-top">
                      <h1 className="text-[#0D2612] text-[24px] font-readex font-bold">
                        $ {cartItem.price.toFixed()}
                      </h1>
                    </td>
                    <img
                      src={line}
                      alt="alt"
                      className="w-full h-[2px] absolute bottom-0 left-0"
                    />
                  </tr>
                ))}
                {cart.length <= 0 && (
                  <tr className="text-start pb-[8px] text-[#0D2612] font-hammersmith text-[22px] font-normal">
                    <p className="pl-[43.2px]">No items found</p>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="xl:max-w-[400px] w-full xl:mt-0 mt-[50px] xl:border-l border-[#E9E7E7] xl:pl-[31.08px] xl:ml-[28px]">
            <h1 className="pt-[0.53px] font-hammersmith text-[32px] font-normal">
              CART TOTALS
            </h1>
            <img
              src={lineSmall}
              alt="line"
              className="w-full h-[2px] mt-[8px]"
            />
            <ul className="pt-[37px] pb-[41px] flex flex-col gap-[21px]">
              <li className="flex w-full justify-between items-center">
                <span className="font-readex text-[#190D26] text-[18px] font-[300] opacity-85">
                  Shipping (3-5 Business Days)
                </span>
                <span className="text-[#190D26] text-[18px] font-readex font-semibold">
                  Free
                </span>
              </li>
              <li className="flex w-full justify-between items-start">
                <span className="font-readex text-[#190D26] text-[18px] font-[300] opacity-85">
                  TAX (estimated for the United States (US))
                </span>
                <span className="text-[#190D26] text-[18px] font-readex font-semibold">
                  $0
                </span>
              </li>
              <li className="flex w-full justify-between items-center">
                <span className="font-readex text-[#190D26] text-[18px] font-[300] opacity-85">
                  Subtotal
                </span>
                <span className="text-[#190D26] text-[18px] font-readex font-semibold">
                  ${" "}
                  {cart
                    .map((item) => item.price * item.quantity)
                    .reduce((a, b) => a + b, 0)
                    .toFixed()}
                </span>
              </li>
            </ul>
            <img
              src={lineSmall}
              alt="line"
              className="w-full h-[2px] mt-[8px]"
            />
            <div className="flex w-full justify-between items-center mt-[33px]">
              <span className="font-readex text-[#190D26] text-[18px] font-[500]">
                Total
              </span>
              <span className="text-[#190D26] text-[18px] font-readex font-semibold">
                ${" "}
                {cart
                  .map((item) => item.price * item.quantity)
                  .reduce((a, b) => a + b, 0)
                  .toFixed()}
              </span>
            </div>
            <Button className="w-full bg-[#0BA42D] font-inter text-[18px] font-semibold tracking-[1px] py-[10px] h-auto mt-[68px]">
              Proceed to Checkout
            </Button>
            <Link
              to={"/products"}
              className="flex items-center gap-[9px] font-readex font-semibold text-[18px] text-[#0D2612] mt-[46px] justify-center"
            >
              <ArrowLeft /> Back to shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
