import { useState } from "react";
import { BlogCard } from "../../../components";

const ArticlesSection = () => {
  const [value, setValue] = useState("news");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className="lg:py-6 2xl:py-9 px-6 lg:px-14 2xl:px-28 flex flex-col gap-8">
    <div className="flex flex-col gap-5 text-center md:text-left items-center md:items-start">
        <span className="text-[#027A48] px-4 py-2.5 bg-[#35353E] w-fit rounded-3xl font-semibold text-base">
            ● Articles
        </span>

        <h5 className="text-4xl leading-tight font-bold md:max-w-lg">
            Enjoy Our <span className="text-[#1D8751]">Blog</span> On the{" "}
            <span className="text-[#1D8751]">Latest Company Updates</span>
        </h5>

        <form className="flex flex-wrap gap-2 justify-center md:justify-start">
            <label
                className={`cursor-pointer flex items-center gap-2 px-4 py-2.5 ${
                    value === "news" && "bg-[#1D8751] text-white"
                } border border-[#788099] rounded-l-3xl text-[#788099] font-semibold`}
                onClick={() => handleChange("news")}
            >
                <input
                    type="radio"
                    name="category"
                    value={value}
                    checked={value === "news"}
                    onChange={() => handleChange("news")}
                />
                News
            </label>

            <label
                className={`cursor-pointer flex items-center gap-2 px-4 py-2.5 ${
                    value === "blog" && "bg-[#1D8751] text-white"
                } border border-[#788099] rounded-r-3xl text-[#788099] font-semibold`}
                onClick={() => handleChange("blog")}
            >
                <input
                    type="radio"
                    name="category"
                    value={value}
                    checked={value === "blog"}
                    onChange={() => handleChange("blog")}
                />
                Blog
            </label>
        </form>
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
    </div>

    <div className="mx-auto py-6">
        <button type="button" className="bg-[#1D8751] rounded-3xl px-6 md:px-10 py-3">
            Go to News
        </button>
    </div>
</div>

  );
};

export default ArticlesSection;
