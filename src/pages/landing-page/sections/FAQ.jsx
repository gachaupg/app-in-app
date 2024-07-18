import { faqHero } from "../../../assets";
import { AccordionCom } from "../../../components";

const FAQ = () => {
  return (
    <div className="py-6 2xl:py-12 px-6 lg:px-8 2xl:px-28 gap-5 lg:gap-10 flex md:gap-8 flex-col md:flex-row h-full">
      <div className="flex-1">
        <img src={faqHero} alt="faq" className="md:my-auto" />
      </div>

      <div className="flex-1 flex flex-col gap-4 py-4">
        <span className="text-[#027A48] px-4 py-2.5 bg-[#35353E] w-fit rounded-3xl font-semibold text-base">
          ● Contact Us
        </span>

        <h5 className="text-4xl leading-tight font-bold md:max-w-lg">
          Need Answers to Your Questions? Contact Us
        </h5>

    
          <AccordionCom />
          <AccordionCom />
          <AccordionCom />
          <AccordionCom />
      
      </div>
    </div>
  );
};

export default FAQ;
