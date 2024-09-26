import { BLOGS } from "@/constants/index.tsx";
import BlogCard from "./blog-card";

const Blogs = () => {
  const blogs = BLOGS();
  return (
    <div className="bg-[#0D2612] text-white pt-[71px] pb-[80px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
