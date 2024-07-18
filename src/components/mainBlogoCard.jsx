import { Link } from "react-router-dom";
import { blogCard } from "../assets";

const BlogCard = () => {
  return (
   <div className="flex flex-col">
  <Link to='/blog/1' className="text-2xl font-bold text-[#1D8751]">
    <img src={blogCard} alt="" className="w-full h-auto" />

    <div className="flex-1 flex flex-col gap-2 mt-4">
      <div className="flex items-center justify-between">
        <span className="text-xl text-slate-500 text-xs">15-June-2024</span>

        <div className="flex text-xs text-slate-500 gap-2 mr-6">
        <button className="bg-slate-800 p-1 rounded-2xl w-16 ">forex</button>
        <button className="bg-slate-800 p-1 rounded-2xl  ">investment</button>
        <button className="bg-slate-800 p-1 rounded-2xl w-16 ">news</button>
            
        </div>

      </div>
      <p style={{
        fontSize:'16px'
      }} className="text-white">Article Name Placeholder</p>
        <p className="text-xl mr-6 text-slate-500 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
   <button style={{
        fontSize:'16px'
      }} className="w-40 border-green-600 rounded-3xl p-1 border">Read Article </button>
    </div>
  </Link>
</div>

  );
};

export default BlogCard;
