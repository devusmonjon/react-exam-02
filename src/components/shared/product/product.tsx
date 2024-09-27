import { Button } from "@/components/ui/button";
import { addToCart } from "@/context/context/slices/cartSlice";
import { Cart } from "@/icons";
import { CartItem, IProduct } from "@/interfaces";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = ({ product }: { product: IProduct }) => {
  const cart = useSelector(
    (state: { cart: { value: IProduct[] } }) => state.cart.value
  );

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const isAdded = cart.some((item) => item.id === product.id);

  return (
    <div className="relative">
      <img
        className="w-full h-[300px] p-[30px] object-contain object-center"
        src={product.image_url}
        alt={product.name}
      />
      <div className="flex flex-col justify-between">
        <div>
          <h1
            title={product.name}
            className="text-[22px] font-normal mt-[22px] text-[#190D26] font-hammersmith"
          >
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h1>
          <p className="font-readex mt-[12px] font-[300] text-[18px] text-[#190D26] lg:w-[80%] w-[100%] min-h-[60px] max-h-[60px] overflow-hidden">
            {product.description.slice(0, 70)}
          </p>
          <div className="flex gap-[12px] flex-wrap mt-[44px]">
            {product.color_options.map<JSX.Element>((color: string) => (
              <div
                key={color}
                className="w-[30px] h-[30px] rounded-full border-2 border-black"
                style={{ background: color }}
              ></div>
            ))}
          </div>
          <p className="text-[22px] text-[#190D26] font-[700] pt-[26px] pb-[22px]">
            ${product.price}
          </p>
        </div>
        <Button
          className={`py-[16px_!important] px-[53px_!important] flex gap-2 hover:bg-[#0ba42ccb] bg-[#0BA42D] w-[60%] text-lg select-none ${
            !isAdded ? "" : "opacity-80"
          }`}
          disabled={isAdded}
          onClick={() => dispatch(addToCart(product as CartItem))}
        >
          <Cart />
          {t(!isAdded ? "add_to_cart_text" : "added_cart_text")}
        </Button>
      </div>
    </div>
  );
};

export default Product;
