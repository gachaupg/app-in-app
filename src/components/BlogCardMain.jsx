// import { Link } from "lucide-react";
import { Link } from "react-router-dom";
import { blogCard } from "../assets";

const BlogCard = () => {


    return (
        <div className="flex flex-col text-sm pb-4 max-w-screen-lg mx-auto">
            <Link to='/blog/1' className="font-bold text-[#1D8751]">

                <img src={blogCard} alt="" className="flex-1 w-full max-w-full" />
                <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs">
                        <span>15-June-2024</span>

                        <div className="flex text-grey mr-2 mt-2">
                            <div className="blog-btn flex flex-wrap">
                                <button style={{ background: '#1f1f27' }} className="blog-btn">
                                    Forex
                                </button>
                                <button>
                                    Investment
                                </button>
                                <button>
                                    News
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="text-white">
                        
                        <h3 className="mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl">BITCOIN ETHIREIUM AND CRYPTO</h3>
                        <p>
                            Key takeaways Dogecoin has been underperforming over the last few days and could drop below the $0.080 region soon.
                        </p>
                        <button className="article-btn text-sm  md:text-lg lg:text-xl h-12">
                            <Link to='/blogContent'>Read Article</Link>
                        </button>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default BlogCard;
