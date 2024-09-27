import { Blogs, Hero } from "@/components/shared";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  document.title = t("home.title");
  return (
    <section id="home">
      <Hero />
      <Blogs />
    </section>
  );
};

export default Home;
