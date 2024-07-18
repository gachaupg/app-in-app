import { Link } from "react-router-dom";
import {
  dollar,
  heroBg,
  mobile,
  referral,
  safety,
  watch,
} from "../../../assets";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroBg})` }}
      className="text-white bg-center bg-cover w-full h-full relative overflow-hidden"
    >
      <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-8 border-red-600 lg:py-6 2xl:py-9 px-6 lg:px-14 2xl:px-28">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 pt-12 md:pt-0 md:mt-14 xl:mt-28  2xl:max-w-[740px]">
          <h1 className="text-lg lg:text-4xl 2xl:text-5xl font-bold">
            Welcome to OMAYA Exchange
          </h1>

          <p className="text-sm md:text-base text-[#788099] leading-6 font-medium">
            Dollar Soars and Stocks Hit Records as Markets Rethink Rate Cut Timing
            <br />
            EUR/USD’s fall from 1.1138 resumed to 1.0843 last week, then recovered. Initial bias stays neutral this week for some consolidations. But further decline is expected as long as 1.0995 resistance holds. Below 1.0843 will target 1.0722 support next. Decisive break there will argue that whole rise from 1.0447 has completed, and target this low
          </p>

          <div className="flex items-center flex-col md:flex-row gap-6 md:gap-5 mt-6">
           {/* <Link to="/market"></Link> */}
            <button
              type="button"
              className="rounded-3xl md:rounded-3xl  btn text-base bg-[#1D8751] px-5 py-3"
            >
              <Link to="/contact">

                Contact Us

              </Link>
            </button>

            <button
              type="button"
              className="flex flex-row items-center gap-3 text-lg leading-6 font-medium"
            >
              <span>Watch Video</span>
              <img
                src={watch}
                alt="watch"
                className="h-10 w-10 object-contain"
              />
            </button>
          </div>
        </div>

        <img src={mobile} alt="mobile" className="object-cover w-72 xl:w-96" />
      </div>

      <div className="bg-[#1D1D23] flex flex-col gap-4 md:gap-5 xl:gap-10 py-8 md:py-16 px-4 md:px-8 w-full md:rounded-l-[36px] mt-12 md:absolute bottom-0 left-6 lg:left-14 2xl:left-28">
        <div className="flex items-center flex-col md:flex-row justify-start capitalize gap-12 pb-6 md:pb-0 md:gap-[120px]">
          <div className="flex flex-col gap-1">
            <h3 className="text-[#1D8751] text-5xl font-bold">10M+</h3>
            <p className="text-base text-[#788099] font-medium">
              USD Total Transactions
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[#1D8751] text-5xl font-bold">100,000+</h3>
            <p className="text-base text-[#788099] font-medium">
              Sucessful Transactions
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[#1D8751] text-5xl font-bold">5500+</h3>
            <p className="text-base text-[#788099] font-medium">
              Satisfied Clients
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[#1D8751] text-5xl font-bold">3+</h3>
            <p className="text-base text-[#788099] font-medium">
              Years of Experience
            </p>
          </div>
        </div>

        <div className="bg-[#35353E] h-[1px] my-6 md:my-0" />

        <div className="flex items-center flex-col md:flex-row gap-12 2xl:gap-16">
          <div className="flex items-center gap-4 2xl:gap-12 ">
            <div className="flex flex-col gap-3 md:gap-4 w-80">
              <h5 className="capitalize text-base lg:text-xl font-semibold">
                Absolute safety
              </h5>

              <p className="text-[#788099] text-sm lg:text-base leading-5">
                Exchange confidently with OMAYA, where safety is our top
                priority.
              </p>
            </div>

            <img
              src={safety}
              alt="safety"
              className="object-contain h-20 w-20 md:h-24 md:w-24"
            />
          </div>

          <div className="flex items-center  gap-4 2xl:gap-12">
            <div className="flex flex-col gap-4 w-80">
              <h5 className="capitalize text-base lg:text-xl font-semibold">
                Fast Deposits & Withdrawals
              </h5>

              <p className="text-[#788099] text-sm lg:text-base leading-5">
                Enjoy swift and seamless deposits and withdrawals
              </p>
            </div>

            <img
              src={dollar}
              alt="dollar"
              className="object-contain h-20 w-20 md:h-24 md:w-24"
            />
          </div>

          <div className="flex items-center gap-4 2xl:gap-12">
            <div className="flex flex-col gap-4 w-80">
              <h5 className="capitalize text-base lg:text-xl font-semibold">
                Invite your friend and earn
              </h5>

              <p className="text-[#788099] text-sm lg:text-base leading-5">
                Refer and Invite your friends and earn commission on each
                transaction they make with us!
              </p>
            </div>

            <img
              src={referral}
              alt="referral"
              className="object-contain h-20 w-20 md:h-24 md:w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
