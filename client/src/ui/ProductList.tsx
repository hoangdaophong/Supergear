import { Link } from "react-router-dom";
import Container from "./Container";
import Title from "./Title";
import Pagination from "./Pagination";
import { useTranslation } from "react-i18next";

const ProductList = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <Title text={t("productList.topSelling")} />
          <Link to={"/product"}>{t("productList.viewAll")}</Link>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-2" />
      </div>
      {/* Pagination */}
      <Pagination />
    </Container>
  );
};

export default ProductList;
