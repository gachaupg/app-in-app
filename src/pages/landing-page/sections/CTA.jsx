import { ctaHero, mail } from "../../../assets";

const CTA = () => {
  const handleMessage=(e)=>{
    e.preventDefault()
    alert('Message Sent')
  }
  return (
    <div className="py-6 2xl:py-12 px-6 lg:px-8 2xl:px-28 gap-5 lg:gap-10 flex flex-col-reverse md:flex-row items-center justify-between h-full bg-[#1D1D23]">
      {/* desc div */}

      <div className="flex-2 flex flex-col gap-4 py-4  items-center md:items-start text-center md:text-left">
        <span className="text-[#027A48] px-4 py-2.5 bg-[#35353E] w-fit rounded-3xl font-semibold text-base">
          ● Contact Us
        </span>

        <h5 className="text-4xl leading-tight font-bold text-white md:max-w-lg">
          Need Answers to Your Questions? Contact Us
        </h5>

        <form onSubmit={handleMessage} className="flex text-white flex-col gap-4">
          <div className="flex text-white flex-col gap-2">
            <label className="text-sm font-medium">Email</label>
            <div className="flex items-center gap-2 py-2.5 px-3 border rounded-3xl border-[#35353E]">
              <img src={mail} alt="mail" className="object-cover" />
              <input
                type="text"
                placeholder="Your email adress"
                className="placeholder:text-[#788099] bg-transparent w-full outline-none"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Text</label>
            <textarea
              className="placeholder:text-[#788099] bg-transparent w-full outline-none py-2.5 px-3 border rounded-3xl border-[#35353E]"
              cols="30"
              rows="5"
              placeholder="Your question"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-between">
            <button
              type="button"
              className="border border-[#1D8751] bg-[#1D8751] py-3 w-full rounded-3xl "
            >
              Connect with live Chat
            </button>
            <button
            
              type="submit"
              className="border border-[#1D8751] bg-transparent text-[#1d8751] py-3 w-full rounded-3xl"
            >
              Submit email
            </button>
          </div>
        </form>
      </div>

      {/* img div */}
      <div className="flex-3">
        <img src={ctaHero} alt="ctaHero" className="object-center" />
      </div>
    </div>
  );
};

export default CTA;
