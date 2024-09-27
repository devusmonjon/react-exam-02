import BreadCrumb from "@/components/shared/breadcrumb/breadcrumb";
import { useGetProductByIdQuery } from "@/context/context/api/productApi";
import { Cart, Star } from "@/icons";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import lineSmall from "@/assets/line-small.png";
import { CartItem } from "@/interfaces";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementCart } from "@/context/context/slices/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const { data: product } = useGetProductByIdQuery(id!);
  const { t } = useTranslation();
  const breadcrumb = [
    { id: 1, name: t("products"), link: "/products", isActive: false },
    {
      id: 2,
      name: product?.brand_name ?? "Loading..."!,
      isActive: false,
    },
    {
      id: 3,
      name: product?.name ?? "Loading..."!,
      isActive: true,
    },
  ];
  useEffect(() => {
    // behavior="smooth"
    window.scrollTo(0, 0);
  }, [id]);
  const cart = useSelector(
    (state: { cart: { value: CartItem[] } }) => state.cart.value
  );
  const isAdded = cart.some((item) => item.id === product?.id!);
  const cartProduct = cart[cart.findIndex((item) => item.id === product?.id!)];

  const dispatch = useDispatch();

  document.title = product?.name ?? "Loading...";
  return (
    <div>
      <div className="container border-t-[#E9E7E7] border-t-2 pt-[98.25px] pb-[100px]">
        <BreadCrumb breadcrumb={breadcrumb} />
        <div className="mt-[42px] flex gap-[39px] lg:flex-row flex-col">
          <div className="max-w-[500px] w-full flex flex-col justify-between">
            <div className="max-w-[500px] w-full h-[450px] border-[#F4F4F4] border-2">
              <img
                src={product?.image_url}
                alt={product?.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex overflow-x-auto gap-[37px] scroll-hide">
              {new Array(5).fill(0).map((_, idx) => (
                <div key={idx} className="min-w-[100px] h-[100px]">
                  <img
                    src={product?.image_url}
                    alt={product?.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="text-[48px] font-normal text-[#190D26] font-hammersmith">
              {product?.name}
            </h1>
            <p className="text-[#190D26] text-[18px] font-semibold mt-[16px]">
              {product?.description}
            </p>
            <div className="flex gap-[5px] mt-[18.1px] items-center">
              {new Array(5).fill(0).map((_, idx) => (
                <Star key={idx} />
              ))}{" "}
              ({product?.rating_counts})
            </div>
            <img
              src={lineSmall}
              alt="line"
              className="w-full h-[2px] mt-[28.07px] mb-[30.93px]"
            />
            <h1 className="text-[#190D26] font-readex font-bold text-[36px]">
              $ {product?.price}
            </h1>
            <img
              src={lineSmall}
              alt="line"
              className="w-full h-[2px] my-[30px]"
            />
            <div>
              <h1 className="text-[#0E020C] font-readex font-semibold text-[24px]">
                Choose a color
              </h1>
              <div className="flex gap-[31px]">
                {product?.color_options?.map((color) => (
                  <div
                    key={color}
                    className="mt-[30px] w-[66px] h-[66px] border-2 border-[#190D26] rounded-full"
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                ))}
              </div>
              <img
                src={lineSmall}
                alt="line"
                className="w-full h-[2px] my-[30px]"
              />
              {isAdded && (
                <div className="flex w-[193px] h-[69px] rounded-[40px] justify-between items-center px-[40px] border-2 border-[#0BA42D] text-[#0D2612] bg-[#F5F5F5]">
                  <button
                    disabled={cartProduct?.quantity <= 1 ? true : false}
                    title="Decrement"
                    onClick={() => dispatch(decrementCart(cartProduct))}
                    className="py-[10px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                    >
                      <path
                        d="M15.5 0.75H0.5V3.25002H15.5V0.75Z"
                        fill="#0D2612"
                      />
                    </svg>
                  </button>
                  <span className="inline-block text-[#0D2612] font-inter text-[26px] font-semibold">
                    {
                      // @ts-ignore
                      cartProduct?.quantity ?? 1
                    }
                  </span>
                  <button
                    title="Increment"
                    onClick={() => dispatch(addToCart(cartProduct))}
                    className="py-[10px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M9.25 6.75V0.5H6.75V6.75H0.5V9.25H6.75V15.5H9.25V9.25H15.5V6.75H9.25Z"
                        fill="#0D2612"
                      />
                    </svg>
                  </button>
                </div>
              )}
              <Button
                className={`w-full h-auto py-[10px] flex items-center select-none gap-[10px] bg-[#0BA42D] font-bold text-[22px] font-inter ${
                  isAdded ? "mt-[51px] opacity-80 pointer-events-none" : ""
                }`}
                onClick={() => dispatch(addToCart(product as CartItem))}
              >
                <Cart />
                {t(isAdded ? "added_cart_text" : "add_to_cart_text")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
