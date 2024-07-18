import { Link } from "react-router-dom";
import { blogCard } from "../assets";

const BlogCard = () => {
  return (
   <div className="flex flex-col">
  <Link to='/blog/1' className="text-2xl font-bold text-[#1D8751]">
    <img src={blogCard} alt="" className="w-full h-auto" />

    <div className="flex-1 flex flex-col gap-2 mt-4">
      <div className="flex items-center justify-between">
        <span className="text-sm">15-June-2024</span>

        <div className="flex"></div>
      </div>
    </div>
  </Link>
</div>

  );
};

export default BlogCard;
