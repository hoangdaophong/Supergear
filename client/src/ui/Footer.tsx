import Container from "./Container";
import { useTranslation } from "react-i18next";
import { payment } from "../assets";
import FooterTop from "./FooterTop";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-10">
      <FooterTop />
      <Container className="flex flex-col md:flex-row items-center gap-4 justify-between">
        <p>{t("footer.copyright")}</p>
        <img src={payment} alt="payment-img" className="object-cover" />
      </Container>
    </div>
  );
};

export default Footer;
