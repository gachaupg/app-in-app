import { banner1 } from "../../../assets";
import { coinsOffered } from "../data";

const ContactUs = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r to-[#197345] from-[#278D59]">
        <div className=" flex justify-between items-center lg:pt-6 2xl:pt-9 pl-6 lg:pl-14 2xl:pl-28">
          <div className="flex flex-col items-center md:items-start py-6 px-4 text-center md:text-left gap-6 max-w-3xl">
            <h4 className="text-base md:text-lg font-semibold">
              Invite your friend, and earn commission
            </h4>

            <p className="text-2xl md:text-3xl font-bold">
              Refer and Invite your friends and earn commission on each
              transaction they make with us!
            </p>

            <button
              type="button"
              className="capitalize bg-white text-[#1D8751] px-5 py-3 rounded-3xl w-fit"
            >
              Contact us
            </button>
          </div>

          <img
            src={banner1}
            alt="banner"
            className="object-cover hidden md:flex"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 py-6 2xl:py-9">
        <h3 className="font-bold text-3xl">We Support</h3>

        <div className="bg-[#1D1D23] w-full py-8 px-3 md:px-0 flex items-stretch md:justify-evenly sm:flex-wrap overflow-auto snap-mandatory gap-12">
          {coinsOffered.map(({ id, name, img }) => (
            <div
              className="flex flex-col items-center gap-4 text-center"
              key={id}
            >
              <img src={img} alt={name} className="object-cover h-12 md:h-20" />
              <span className="text-sm md:text-lg font-normal md:font-semibold">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
