import { twMerge } from "tailwind-merge";
import { ProductProps } from "../../type";
import { store } from "../lib/store";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import PriceTag from "./PriceTag";
import { useTranslation } from "react-i18next";

const AddToCartBtn = ({
  className,
  title,
  product,
  showPrice = true,
}: {
  className?: string;
  title?: string;
  product?: ProductProps;
  showPrice?: boolean;
}) => {
  const [existingProduct, setExistingProduct] = useState<ProductProps | null>(
    null
  );
  const { addToCart, cartProduct, decreaseQuantity } = store();
  const { t } = useTranslation();

  useEffect(() => {
    const availableItem = cartProduct.find(
      (item) => item?._id === product?._id
    );

    setExistingProduct(availableItem || null);
  }, [product, cartProduct]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(
        t("addToCart.addedSuccessfully", {
          productName: product?.name.substring(0, 10),
        })
      );
    } else {
      toast.error(t("addToCart.productUndefined"));
    }
  };

  const handleDeleteProduct = () => {
    if (existingProduct) {
      if (existingProduct?.quantity > 1) {
        decreaseQuantity(existingProduct?._id);
        toast.success(
          t("addToCart.decreasedSuccessfully", {
            productName: product?.name.substring(0, 10),
          })
        );
      } else {
        toast.error(t("addToCart.cannotDecreaseLessThanOne"));
      }
    } else {
    }
  };

  const newClassName = twMerge(
    "bg-[#f7f7f7] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer",
    className
  );

  const getRegularPrice = () => {
    if (existingProduct) {
      if (product) {
        return product?.regularPrice * existingProduct?.quantity;
      }
    } else {
      return product?.regularPrice;
    }
  };

  const getDiscountedPrice = () => {
    if (existingProduct) {
      if (product) {
        return product?.discountedPrice * product?.quantity;
      }
    } else {
      return product?.discountedPrice;
    }
  };

  return (
    <>
      {showPrice && (
        <div>
          <PriceTag
            regularPrice={getRegularPrice()}
            discountedPrice={getDiscountedPrice()}
          />
        </div>
      )}
      {existingProduct ? (
        <div className="flex self-center items-center justify-center gap-2">
          <button
            onClick={handleDeleteProduct}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
            {existingProduct?.quantity}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button onClick={handleAddToCart} className={newClassName}>
          {title ? title : t("addToCart.addToCart")}
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
