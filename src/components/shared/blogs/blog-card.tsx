import { IBlog } from "@/interfaces";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div>
      <div className="w-full h-[322px] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover duration-300 hover:scale-105"
        />
      </div>
      <h1
        title={blog.title}
        className="font-hammersmith text-[23px] font-normal mt-[27px]"
      >
        {blog.title}
      </h1>
      <p className="font-readex text-[18px] font-normal mt-[15px]">
        {blog.description}
      </p>
      <a
        href={"#"}
        className="font-readex font-medium underline text-[18px] capitalize h-[37px]"
      >
        See More
      </a>
    </div>
  );
};

export default BlogCard;
