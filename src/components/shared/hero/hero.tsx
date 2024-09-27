import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[659px] bg-[url('/hero-bg.png')] bg-no-repeat bg-cover bg-right">
      <div className="container text-white pt-[230px]">
        <div className="font-hammersmith text-[16px] sm:text-[20px]">
          <h1 className="capitalize">/ Start / {t("categories")}</h1>
          <h1>/ {t("hero_title")}</h1>
        </div>
        <h1 className="uppercase text-[22px] sm:text-[26px] md:text-[36px] lg:text-[46px] w-[45%] font-hammersmith mt-[32.48px]">
          {t("hero_title")}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
