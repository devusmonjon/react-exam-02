import {
  ArrowDown,
  Cart,
  EngFlag,
  Globe,
  Person,
  Phone,
  UzFlag,
} from "@/icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";

const Navbar = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [menu, setMenu] = useState<boolean>(false);
  const [menuClosing, setMenuClosing] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };
  console.log(selectedLanguage);

  const closeMenu = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenu(false);
    }, 300);
  };

  const openMenu = () => {
    setMenu(true);
    setMenuClosing(true);
    setTimeout(() => {
      setMenuClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 100) {
      setScrolled(true);
    } else if (scrollY < 60) {
      setScrolled(false);
    }
  }, [scrollY]);

  return (
    <>
      <div className="bg-[#0D2613] py-[19px]">
        <div className="container flex justify-between items-center">
          <div className="flex items-start sm:items-center justify-center gap-[32px] flex-col sm:flex-row">
            <h2 className="text-[22px] sm:text-[32px] text-white font-nico-moji">
              GG
            </h2>
            <span className="font-inter text-[14px] flex text-white items-center gap-[17px]">
              <Phone className="text-white" />{" "}
              <a href="tel:+4904-049-950">+4904-049-950</a>
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-[25px] text-white font-inter text-[14px]">
            <span>{t("header_discount")} </span>
            <div className="w-[2px] h-[30px] bg-[#14FF00]"></div>
            <a href="#">{t("shop_now")}</a>
          </div>
          <div className="flex items-center gap-2 sm:gap-[44px] flex-col sm:flex-row">
            <DropdownMenu>
              <DropdownMenuTrigger className="">
                <Button
                  className="text-white flex items-center gap-[11px] font-inter text-[14px] font-medium px-2"
                  variant={"ghost"}
                >
                  <ArrowDown />
                  {selectedLanguage === "uz-UZ" ? (
                    <>
                      <span>O'zbek</span>
                      <UzFlag />
                    </>
                  ) : (
                    <>
                      <span>English</span>
                      <EngFlag />
                    </>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[100px]">
                <DropdownMenuItem className="px-0 py-0 w-full">
                  <Button
                    className="px-0 flex items-center gap-[11px] font-inter text-[14px] font-medium w-full"
                    variant={"ghost"}
                    onClick={() => changeLanguage("en-US")}
                  >
                    <span>English</span>
                    <EngFlag />
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-0 py-0 w-full">
                  <Button
                    className="px-0 flex items-center gap-[11px] font-inter text-[14px] font-medium w-full"
                    variant={"ghost"}
                    onClick={() => changeLanguage("uz-UZ")}
                  >
                    <span>O'zbek</span>
                    <UzFlag />
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  variant={"ghost"}
                  className="text-white flex items-center gap-[11px] font-inter text-[14px] font-medium px-2"
                >
                  <Globe />
                  <span>{t(selectedLocation || "location_text")}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="">
                <DropdownMenuItem className="px-0 py-0 w-full">
                  <Button
                    className="flex items-center gap-[11px] font-inter text-[14px] font-medium w-full"
                    variant={"ghost"}
                    onClick={() => setSelectedLocation("uzbekistan_text")}
                  >
                    <span>{t("uzbekistan_text")}</span>
                    <UzFlag className="min-w-min" />
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-0 py-0 w-full">
                  <Button
                    className="flex items-center gap-[11px] font-inter text-[14px] font-medium w-full"
                    variant={"ghost"}
                    onClick={() => setSelectedLocation("usa_text")}
                  >
                    <span>{t("usa_text")}</span>
                    <EngFlag />
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <nav
        className={`sticky top-0 bg-white duration-300 z-10 ${
          scrolled ? "shadow-lg py-[20px]" : "py-[40px]"
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link
            to="/"
            className="font-nico-moji text-[30px] font-normal text-[#0D2612]"
          >
            GameGeek
          </Link>
          <ul className="hidden lg:flex item-center gap-[40px]">
            <li>
              <NavLink
                to={"/products"}
                className={"text-[#0D2612] font-inter font-medium text-[16px]"}
              >
                {t("products")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/brands"}
                className={"text-[#0D2612] font-inter font-medium text-[16px]"}
              >
                {t("brands")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Whats-new"}
                className={"text-[#0D2612] font-inter font-medium text-[16px]"}
              >
                {t("whats_new")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Sales"}
                className={"text-[#0D2612] font-inter font-medium text-[16px]"}
              >
                {t("sales")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/help"}
                className={"text-[#0D2612] font-inter font-medium text-[16px]"}
              >
                {t("help")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={"text-[#0D2612] font-inter font-medium text-[16px]"}
              >
                {t("about")}
              </NavLink>
            </li>
          </ul>
          <div
            className={`top-0 left-0 fixed w-full h-screen bg-white ${
              menuClosing ? "opacity-0" : "opacity-25"
            } ${menu ? "" : "hidden"} duration-300`}
            onClick={closeMenu}
          ></div>
          <div
            className={`w-[70%] h-screen bg-white shadow-xl fixed left-0 top-0 z-[11] duration-300 ${
              menuClosing ? "-translate-x-full" : ""
            } ${menu ? "" : "-translate-x-full"} duration-300`}
          >
            <Button
              variant={"ghost"}
              className="px-2 absolute top-8 right-10"
              onClick={closeMenu}
            >
              <X />
            </Button>
          </div>
          <ul className="flex item-center gap-4 sm:gap-[42px]">
            <li>
              <button title="Search" className="w-[20px] h-[20px]">
                <Search className="w-[20px] h-[20px]" />
              </button>
            </li>
            <li>
              <Link to={"/account"} className="inline-block w-[20px] h-[20px]">
                <Person className="w-[20px] h-[20px]" />
              </Link>
            </li>
            <li className="">
              <Link to={"/cart"} className="inline-block w-[20px] h-[20px]">
                <Cart className="w-[20px] h-[20px]" />
              </Link>
            </li>
            <li className="lg:hidden">
              <button title="menu-button" onClick={openMenu}>
                <Menu size={20} />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
