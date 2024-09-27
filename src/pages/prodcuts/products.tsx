import { Hero, Product } from "@/components/shared";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  useGetBrandsQuery,
  useGetColorsQuery,
  useGetProductsQuery,
} from "@/context/context/api/productApi";
import { ArrowDown } from "@/icons";
import { IProduct } from "@/interfaces";
import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const Products = () => {
  const [sort, setSort] = useState<string | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [currentColor, setCurrentColor] = useState<string>("");
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const { data: productsRes } = useGetProductsQuery(
    `${
      selectedBrands.length > 0
        ? `&brand_name=${selectedBrands.join("&brand_name=")}`
        : ""
    }${
      currentColor
        ? `&color_options_like=${encodeURIComponent(currentColor)}`
        : ""
    }`
  );

  const { data: brands } = useGetBrandsQuery();
  const { data: colors } = useGetColorsQuery();

  const { t } = useTranslation();

  useEffect(() => {
    setProducts(productsRes as IProduct[]);
  }, [productsRes]);

  const handleSelectBrand = (brand: string) => {
    if (selectedBrands.some((item) => item === brand)) {
      setSelectedBrands((prev) => prev.filter((item) => item !== brand));
    } else {
      setSelectedBrands((prev) => [...prev, brand]);
    }
  };
  console.log(selectedBrands);
  document.title = t("products");
  return (
    <section id="products">
      <Hero />
      {/* sort */}
      <div className="w-full bg-[#D5F8CF] h-[85px] flex items-center ">
        <div className="container flex justify-between items-center whitespace-nowrap text-[#0BA42D] font-hammersmith font-normal tracking-[2px] text-[18px]">
          <h1>{t("filter_text")}:</h1>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-[6px]">
              <ArrowDown className="w-[25px] h-[25px]" />
              {t(sort ?? "sort_by_text")}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Button
                  variant={"ghost"}
                  className="px-2 w-full text-[18px]"
                  onClick={() => {
                    setSort("default_text");
                    setProducts(productsRes as IProduct[]);
                  }}
                >
                  {t("default_text")}
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  variant={"ghost"}
                  className="px-2 w-full text-[18px]"
                  onClick={() => {
                    setSort("A~Z");
                    setProducts((prev) => {
                      const copy = JSON.parse(JSON.stringify(prev));
                      return copy?.sort((a: IProduct, b: IProduct) =>
                        a.brand_name.localeCompare(b.brand_name)
                      );
                    });
                  }}
                >
                  A ~ Z
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  variant={"ghost"}
                  className="px-2 w-full text-[18px]"
                  onClick={() => {
                    setSort("price_text");
                    setProducts((prev) => {
                      const copy = JSON.parse(JSON.stringify(prev));
                      return copy?.sort(
                        (a: IProduct, b: IProduct) => a.price - b.price
                      );
                    });
                  }}
                >
                  {t("price_text")}
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="container">
        <div className="flex gap-[61px] justify-between w-full pt-[63px] pb-[169px] md:flex-row flex-col">
          <div className="w-full lg:w-[300px]">
            <div>
              {/* <span className="w-full h-[2px] inline-block border border-dashed border-[rgba(69,68,68,0.80)]"></span> */}
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {t("brand_text").toUpperCase()}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-[22.88px]">
                    {brands?.map((brand: string) => (
                      <div className="flex items-center space-x-2" key={brand}>
                        <Checkbox
                          id={brand}
                          className="checked:bg-[red_!important] w-[20px] h-[20px]"
                          onCheckedChange={() => handleSelectBrand(brand)}
                        />
                        <label
                          htmlFor={brand}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-readex text-[18px] cursor-pointer w-full select-none"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {t("colors_text").toUpperCase()}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-wrap w-full gap-[22.88px]">
                    {colors?.map((color: string) => (
                      <button
                        title={color}
                        key={color}
                        className={`w-[24px] h-[24px] rounded-full flex justify-center items-center ${
                          color.toLowerCase() === "#ffffff"
                            ? "border-2 border-black"
                            : ""
                        }`}
                        style={{
                          background: color,
                        }}
                        onClick={() => {
                          if (currentColor === color) {
                            setCurrentColor("");
                          } else {
                            setCurrentColor(color);
                          }
                        }}
                      >
                        {currentColor === color ? <Check size={16} /> : ""}
                      </button>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[36px] gap-y-[68px]">
            {products?.map((product: IProduct) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
