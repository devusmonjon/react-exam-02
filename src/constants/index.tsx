import { useTranslation } from "react-i18next";

import blog1 from "@/assets/blogs/blog-1.png";
import blog2 from "@/assets/blogs/blog-2.png";
import blog3 from "@/assets/blogs/blog-3.png";
import { IBlog } from "@/interfaces";

const BLOGS = () => {
  const { t } = useTranslation();

  const BLOGS: IBlog[] = [
    {
      id: 1,
      image: blog1,
      title: t("blog_1_title"),
      description: t("blog_1_desc"),
    },
    {
      id: 2,
      image: blog2,
      title: t("blog_2_title"),
      description: t("blog_2_desc"),
    },
    {
      id: 3,
      image: blog3,
      title: t("blog_3_title"),
      description: t("blog_3_desc"),
    },
  ];
  return BLOGS;
};

export { BLOGS };
