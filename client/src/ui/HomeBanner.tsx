import Container from "./Container";
import { homeBanner } from "../assets";
import LinkButton from "./LinkButton";
import { useTranslation } from "react-i18next";

const HomeBanner = () => {
  const { t } = useTranslation();
  return (
    <Container className="relative py-5 overflow-hidden">
      <div className="relative">
        <img
          src={homeBanner}
          alt="homeBanner"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center px-10">
        <h2 className="text-xl md:text-2xl lg:text-4xl text-whiteText font-bold">
          {t("homeBanner.title")}
        </h2>
        <p className="text-base md:text-lg font-semibold leading-6 text-whiteText/90 max-w-[350px] mt-4">
          {t("homeBanner.subtitle")}
        </p>
        <LinkButton className="w-44 flex items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200 mt-4" />
      </div>
    </Container>
  );
};

export default HomeBanner;
