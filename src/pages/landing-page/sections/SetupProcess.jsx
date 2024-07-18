/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  appleStore,
  createAccount,
  googlePlay,
  identity,
  phone,
  startExchanging,
  transferMoney,
} from "../../../assets";
import { setupData } from "../data";

const Process = ({ process }) => (
  <div className="text-white border border-[#1D8751] rounded-3xl py-4 md:py-7 px-3 md:px-0 flex flex-col items-center justify-center gap-5 w-full sm:w-fit">
    <img
      src={process.img}
      alt="createAccount"
      className="object-contain w-20 h-20"
    />

    <div className="flex flex-col text-center items-center gap-3 w-full">
      <h4 className="capitalize font-semibold text-lg md:text-2xl">
        {process.title}
      </h4>
      <p className="text-base md:text-lg font-normal text-[#788099]">
        {process.desc}
      </p>
    </div>
  </div>
);

const SetupProcess = () => {
  return (
    <div className="text-white flex flex-col gap-14 py-4 lg:py-6 2xl:py-9 px-6 lg:px-14 2xl:px-28">
      <div className="flex flex-col items-center md:items-start gap-6">
        <span className="text-[#027A48] px-4 py-2.5 bg-[#35353E] w-fit rounded-3xl font-semibold text-base">
          ● Simple.Quick.Secure
        </span>

        <h5 className="text-4xl">
          Get Set Up And{" "}
          <span className="text-[#1D8751]">Start Exchanging</span>
        </h5>
      </div>

      <div className="flex items-center flex-wrap lg:flex-nowrap flex-col md:flex-row gap-6">
        {setupData.map((process) => (
          <Process key={process.id} process={process} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center w-full">
        <img
          src={phone}
          alt="phone"
          className="object-contain w-full md:w-1/2 h-[550px] mt-6 md:mt-0"
        />

        <div className="py-3 flex flex-col items-center md:items-start justify-between gap-12 lg:gap-16 w-full md:w-1/2 h-full ">
          <span className="text-[#027A48] px-4 py-2.5 bg-[#35353E] w-fit rounded-3xl font-semibold text-base">
            ● Why Choose Us
          </span>

          <h5 className="text-center md:text-left text-4xl font-bold md:max-w-md">
            <span className="text-[#1D8751]">Fast</span> and{" "}
            <span className="text-[#1D8751]">Secure</span> Crypto Exchange{" "}
          </h5>

          <ul className="flex flex-col px-3 md:px-6 space-y-8">
            <li className="flex items-center space-x-4 text-base text-[#788099] font-semibold">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.818 1.86667C14.7499 1.10264 13.5418 0.556471 12.2626 0.259338C10.9835 -0.037795 9.65831 -0.0800688 8.36281 0.13493C7.06731 0.349929 5.82684 0.81799 4.71223 1.51239C3.59763 2.20679 2.6307 3.11393 1.86667 4.18201C1.10264 5.25009 0.556471 6.45821 0.259338 7.73737C-0.0377951 9.01653 -0.0800688 10.3417 0.13493 11.6372C0.349929 12.9327 0.817991 14.1732 1.51239 15.2878C2.20679 16.4024 3.11393 17.3693 4.18201 18.1333L15.818 1.86667Z"
                  fill="#32A86C"
                />
                <path
                  d="M4.18201 18.1333C5.2501 18.8974 6.45821 19.4435 7.73737 19.7406C9.01653 20.0378 10.3417 20.08 11.6372 19.865C12.9327 19.65 14.1732 19.182 15.2878 18.4876C16.4024 17.7932 17.3693 16.8861 18.1333 15.818C18.8974 14.7499 19.4435 13.5418 19.7407 12.2626C20.0378 10.9834 20.0801 9.65829 19.8651 8.36279C19.6501 7.06729 19.182 5.82682 18.4876 4.71221C17.7932 3.59761 16.8861 2.6307 15.818 1.86667L4.18201 18.1333Z"
                  fill="#1D8751"
                />
              </svg>
              <span>Low transfer fee</span>
            </li>

            <li className="flex items-center space-x-4 text-base text-[#788099] font-semibold">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.818 1.86667C14.7499 1.10264 13.5418 0.556471 12.2626 0.259338C10.9835 -0.037795 9.65831 -0.0800688 8.36281 0.13493C7.06731 0.349929 5.82684 0.81799 4.71223 1.51239C3.59763 2.20679 2.6307 3.11393 1.86667 4.18201C1.10264 5.25009 0.556471 6.45821 0.259338 7.73737C-0.0377951 9.01653 -0.0800688 10.3417 0.13493 11.6372C0.349929 12.9327 0.817991 14.1732 1.51239 15.2878C2.20679 16.4024 3.11393 17.3693 4.18201 18.1333L15.818 1.86667Z"
                  fill="#32A86C"
                />
                <path
                  d="M4.18201 18.1333C5.2501 18.8974 6.45821 19.4435 7.73737 19.7406C9.01653 20.0378 10.3417 20.08 11.6372 19.865C12.9327 19.65 14.1732 19.182 15.2878 18.4876C16.4024 17.7932 17.3693 16.8861 18.1333 15.818C18.8974 14.7499 19.4435 13.5418 19.7407 12.2626C20.0378 10.9834 20.0801 9.65829 19.8651 8.36279C19.6501 7.06729 19.182 5.82682 18.4876 4.71221C17.7932 3.59761 16.8861 2.6307 15.818 1.86667L4.18201 18.1333Z"
                  fill="#1D8751"
                />
              </svg>
              <span>Secure Payment Service</span>
            </li>

            <li className="flex items-center space-x-4 text-base text-[#788099] font-semibold">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.818 1.86667C14.7499 1.10264 13.5418 0.556471 12.2626 0.259338C10.9835 -0.037795 9.65831 -0.0800688 8.36281 0.13493C7.06731 0.349929 5.82684 0.81799 4.71223 1.51239C3.59763 2.20679 2.6307 3.11393 1.86667 4.18201C1.10264 5.25009 0.556471 6.45821 0.259338 7.73737C-0.0377951 9.01653 -0.0800688 10.3417 0.13493 11.6372C0.349929 12.9327 0.817991 14.1732 1.51239 15.2878C2.20679 16.4024 3.11393 17.3693 4.18201 18.1333L15.818 1.86667Z"
                  fill="#32A86C"
                />
                <path
                  d="M4.18201 18.1333C5.2501 18.8974 6.45821 19.4435 7.73737 19.7406C9.01653 20.0378 10.3417 20.08 11.6372 19.865C12.9327 19.65 14.1732 19.182 15.2878 18.4876C16.4024 17.7932 17.3693 16.8861 18.1333 15.818C18.8974 14.7499 19.4435 13.5418 19.7407 12.2626C20.0378 10.9834 20.0801 9.65829 19.8651 8.36279C19.6501 7.06729 19.182 5.82682 18.4876 4.71221C17.7932 3.59761 16.8861 2.6307 15.818 1.86667L4.18201 18.1333Z"
                  fill="#1D8751"
                />
              </svg>
              <span>Fast Transactions</span>
            </li>

            <li className="flex items-center space-x-4 text-base text-[#788099] font-semibold">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.818 1.86667C14.7499 1.10264 13.5418 0.556471 12.2626 0.259338C10.9835 -0.037795 9.65831 -0.0800688 8.36281 0.13493C7.06731 0.349929 5.82684 0.81799 4.71223 1.51239C3.59763 2.20679 2.6307 3.11393 1.86667 4.18201C1.10264 5.25009 0.556471 6.45821 0.259338 7.73737C-0.0377951 9.01653 -0.0800688 10.3417 0.13493 11.6372C0.349929 12.9327 0.817991 14.1732 1.51239 15.2878C2.20679 16.4024 3.11393 17.3693 4.18201 18.1333L15.818 1.86667Z"
                  fill="#32A86C"
                />
                <path
                  d="M4.18201 18.1333C5.2501 18.8974 6.45821 19.4435 7.73737 19.7406C9.01653 20.0378 10.3417 20.08 11.6372 19.865C12.9327 19.65 14.1732 19.182 15.2878 18.4876C16.4024 17.7932 17.3693 16.8861 18.1333 15.818C18.8974 14.7499 19.4435 13.5418 19.7407 12.2626C20.0378 10.9834 20.0801 9.65829 19.8651 8.36279C19.6501 7.06729 19.182 5.82682 18.4876 4.71221C17.7932 3.59761 16.8861 2.6307 15.818 1.86667L4.18201 18.1333Z"
                  fill="#1D8751"
                />
              </svg>
              <span>We Work 24/7</span>
            </li>
          </ul>

          <div className="flex items-center flex-col md:flex-row gap-5 md:gap-3">
            <img
              src={appleStore}
              alt="appleStore"
              className="object-contain cursor-pointer"
            />
            <img
              src={googlePlay}
              alt="googlePlay"
              className="object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupProcess;
