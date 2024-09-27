import { Button } from "@/components/ui/button";
import { Facebook, Help, Instagram, LinkedIn, Twitter } from "@/icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0D2612] text-white pt-[70px]">
      <div className="container">
        <div className="flex w-full justify-between lg:flex-row flex-col lg:gap-0 gap-10">
          <div>
            <div>
              <h1 title="Game Geek" className="font-nico-moji text-[30px]">
                Game
                <br />
                Geek
              </h1>
              <span className="font-hammersmith text-[22px] bg-[linear-gradient(90deg,_#EBE2F4_0%,_#14FF00_100%)] inline-block w-[319px] bg-clip-text text-transparent mt-[15px]">
                Start your game
                <br />
                with the best
              </span>
            </div>
          </div>
          <div className="flex md:gap-[125px] gap-[50px] flex-wrap justify-between w-full">
            <div className="font-inter whitespace-nowrap">
              <h1 className="font-bold text-[24px] capitalize">
                {t("services_text")}
              </h1>
              <ul className="flex flex-col gap-[19px] font-inter text-[18px] mt-[29px]">
                <li>
                  <Link to={"/gift-card"}>{t("gift_card_text")}</Link>
                </li>
                <li>
                  <Link to={"/mobile"}>{t("mobile_app_text")}</Link>
                </li>
                <li>
                  <Link to={"/delivery"}>{t("shopping_delivery_text")}</Link>
                </li>
                <li>
                  <Link to={"/order"}>{t("order_pickup_text")}</Link>
                </li>
                <li>
                  <Link to={"/signup"}>{t("account_signup_text")}</Link>
                </li>
              </ul>
            </div>
            <div className="font-inter whitespace-nowrap">
              <h1 className="font-bold text-[24px] capitalize">{t("help")}</h1>
              <ul className="flex flex-col gap-[19px] font-inter text-[18px] mt-[29px]">
                <li>
                  <Link to={"/cart-help"}>{t("shopcart_help_text")}</Link>
                </li>
                <li>
                  <Link to={"/resturns-card"}>{t("returns_text")}</Link>
                </li>
                <li>
                  <Link to={"/track-orders"}>{t("track_orders_text")}</Link>
                </li>
                <li>
                  <Link to={"/contact-us"}>{t("contact_us_text")}</Link>
                </li>
                <li>
                  <Link to={"/feedback"}>{t("feedback_text")}</Link>
                </li>
                <li>
                  <Link to={"/security"}>{t("security_fraud_text")}</Link>
                </li>
              </ul>
            </div>
            <div className="font-inter whitespace-nowrap">
              <h1 className="font-bold text-[24px] capitalize">
                {t("about_us_text")}
              </h1>
              <ul className="flex flex-col gap-[19px] font-inter text-[18px] mt-[29px]">
                <li>
                  <Link to={"/about-us"}>{t("about_us_text")}</Link>
                </li>
                <li>
                  <Link to={"/help"}>{t("help")}</Link>
                </li>
                <li>
                  <Link to={"/press-center"}>{t("press_center")}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[22px] lg:mt-0 mt-[100px]">
          <Button variant={"link"} className="px-2">
            <Twitter />
          </Button>
          <Button variant={"link"} className="px-2">
            <LinkedIn />
          </Button>
          <Button variant={"link"} className="px-2">
            <Facebook />
          </Button>
          <Button variant={"link"} className="px-2">
            <Instagram />
          </Button>
        </div>
        <div className="mt-[55px] pb-[31.2px]">
          <div className="w-full h-[1px] bg-white mb-[41.42px]"></div>
          <div className="flex justify-between items-center whitespace-nowrap flex-wrap gap-10">
            <h1 className="font-nico-moji text-[30px]">GG</h1>
            <span className="flex items-center gap-[18px] font-semibold text-[18px] font-inter">
              <div className="relative w-[30px] h-[30px]">
                <Help />
                <span className="absolute bottom-1/2 translate-y-[55%] left-1/2 -translate-x-1/2 font-inter text-[24px] font-semibold">
                  ?
                </span>
              </div>
              {t("help_center")}
            </span>
            <span className="font-semibold text-[18px] font-inter">
              {t("privacy_policy")}
            </span>
            <span className="font-semibold text-[18px] font-inter">
              {t("terms_of_service")}
            </span>
            <span className="font-semibold text-[16px] font-inter whitespace-pre-wrap">
              {t("copyright")}{" "}
              <span className="font-normal font-nico-moji">GameGeek</span> |{" "}
              {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
