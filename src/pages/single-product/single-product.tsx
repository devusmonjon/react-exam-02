import BreadCrumb from "@/components/shared/breadcrumb/breadcrumb";
import { useGetProductByIdQuery } from "@/context/context/api/productApi";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

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
  document.title = product?.name ?? "Loading...";
  return (
    <div>
      <div className="container border-t-[#E9E7E7] border-t-2 pt-[98.25px]">
        <BreadCrumb breadcrumb={breadcrumb} />
      </div>
    </div>
  );
};

export default SingleProduct;
