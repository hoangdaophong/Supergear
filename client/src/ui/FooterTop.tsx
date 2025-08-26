import Container from "./Container";
import { useTranslation } from "react-i18next";

const FooterTop = () => {
  const { t } = useTranslation();

  const incentives = [
    {
      name: t("footer.incentives.freeShipping.name"),
      imageSrc: "https://www.svgrepo.com/show/352446/shipping-fast.svg",
      description: t("footer.incentives.freeShipping.description"),
    },
    {
      name: t("footer.incentives.warranty.name"),
      imageSrc: "https://www.svgrepo.com/show/486165/invoice-warranty-line.svg",
      description: t("footer.incentives.warranty.description"),
    },
    {
      name: t("footer.incentives.exchanges.name"),
      imageSrc: "https://www.svgrepo.com/show/470380/exchange.svg",
      description: t("footer.incentives.exchanges.description"),
    },
  ];

  return (
    <Container className="py-0">
      <div className=" rounded-2xl bg-[#f6f6f6] px-6 py-16 sm:p-16">
        <div className="mx-auto max-w-xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              {t("footer.title")}
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none lg:grid-cols-3">
          {incentives.map((item) => (
            <div
              key={item?.name}
              className="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className=" sm:flex-shrink-0">
                <div className="flex-root">
                  <img
                    src={item?.imageSrc}
                    alt="image"
                    className="mx-auto h-16 w-16"
                  />
                </div>
              </div>
              <div className="mt-3 sm:ml-6 lg:ml-0">
                <h3 className="text-base font-medium text-gray-900">
                  {item?.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FooterTop;
