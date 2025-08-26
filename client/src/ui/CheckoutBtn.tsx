import { loadStripe } from "@stripe/stripe-js";
import { ProductProps } from "../../type";
import { store } from "../lib/store";
import { config } from "../../config";
import { useTranslation } from "react-i18next";

const CheckoutBtn = ({ products }: { products: ProductProps[] }) => {
  const { currentUser } = store();
  const { t } = useTranslation();
  const publishableKey =
    "pk_test_51PoPhCLSXlfn8fS1pJIp58JsDFxkalnP2233iwwjyrGZzVw3dXlXdZzxKjaZ5DlfQHsO81svgcKS6LR06gOMwXey00voGBWUJz";
  const stripePromise = loadStripe(publishableKey);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch(`${config?.baseUrl}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: products,
        email: currentUser?.email,
      }),
    });
    const checkoutSession = await response?.json();
    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result.error) {
      window.alert(result?.error?.message);
    }
  };

  return (
    <div className="mt-6">
      {currentUser ? (
        <button
          onClick={handleCheckout}
          type="submit"
          className="w-full rounded-md border border-transparent bg-gray-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-skyText focus:ring-offset-2 focus:ring-offset-gray-50 duration-200"
        >
          {t("checkout.checkout")}
        </button>
      ) : (
        <button className="w-full text-base text-white text-center rounded-md border border-transparent bg-gray-500 px-4 py-3 cursor-not-allowed">
          {t("checkout.checkout")}
        </button>
      )}
      {!currentUser && (
        <p className="mt-2 text-sm font-medium text-red-500 text-center">
          {t("checkout.needToSignIn")}
        </p>
      )}
    </div>
  );
};

export default CheckoutBtn;
