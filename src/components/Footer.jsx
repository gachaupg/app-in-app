import { Divider } from "@mui/material";
import {
  FaWhatsapp,
  FaSnapchatGhost,
  FaTwitter,
  FaTiktok,
  // FaTelegram,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import {
  TelegramIcon,
  YoutubeIcon,
  FacebookIcon,
  WhatsappIcon,
  InstagramIcon,
  SnapchatIcon,
  TwitterIcon,
  TiktokIcon,
  PhoneIcon,
  EmailIcon,
  LocationIcon,
  WhatsIcon,
} from "./Icons";

const Footer = () => {
  return (
    <footer className="primary small wrap text-white py-4">
      <div className=" container mx-auto small wrap flex justify-between  items-center">
        <div className="flex flex-col   gap-6 items-start justify-start">
          <div className="log mt-12">
            <img
              className="  w-64  h-[86px]"
              src="https://res.cloudinary.com/pitz/image/upload/v1721366723/Frame_rmtgyx.png "
              alt=""
            />
          </div>
          <p className="text-white"> Follow us on : </p>
          <div className="flex wrap small gap-4">
            <a href="#" className="hover:text-gray-300">
              <img
                className="h-[24px] w-25 "
                src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721664488/Telegram_auibdu.png"
                alt="Telegram"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              {/* <FaYoutube /> */}
              <img
                className="h-[24px] w-25 "
                src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721664570/Youtube_xrzkof.png"
                alt="YouTube"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img
                className="h-[24px] w-25 "
                src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721664650/Facebook_ls7rxb.png"
                alt="Facebook"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img
                className="h-[24px] w-25 "
                src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721664610/Instagram_w4q0f0.png"
                alt="Instagram"
              />
            </a>
          </div>
          <div className="flex  gap-4">
            <a href="#" className="hover:text-gray-300">
              {/* <FaWhatsapp /> */}
              <img
                className="h-[24px] w-25 "
                src=" https://res.cloudinary.com/dkqqg46sx/image/upload/v1721670746/Vector_4_i92pxd.png"
                alt="whatsapp"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img
                className="h-[24px] w-25 "
                src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721664650/Facebook_ls7rxb.png"
                alt="Snapchat"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img
                className="h-[23px] w-23 "
                src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721673628/Vector_5_dgbfrh.png"
                alt="Twitter"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img
                className="h-[24px] w-25 "
                src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721664205/Vector_3_qxcbf9.png"
                alt="TikTok"
              />
            </a>
          </div>
        </div>
        {/* Quick links */}
        <div className="flex  flex-col gap-6  justify-center">
          <h3 className="hover:text-gray-300 font-bold">Quick Links</h3>
          <a href="#" className="hover:text-gray-300 text-xs">
            Support Center
          </a>
          <a href="#" className="hover:text-gray-300 text-xs text-lg">
            Our Partners
          </a>
          <a href="#" className="hover:text-gray-300 text-xs text-lg">
            FAQ
          </a>
        </div>
        {/* company */}
        <div className="flex  flex-col gap-6  justify-center">
          <h3 className="hover:text-gray-300  font-bold">Company</h3>
          <a href="#" className="hover:text-gray-300 text-xs">
            Blog
          </a>
          <a href="#" className="hover:text-gray-300 text-xs">
            Contact us
          </a>
          <a href="#" className="hover:text-gray-300 text-xs">
            About us
          </a>
        </div>
        {/* legalpolicies */}
        <div className="flex  flex-col gap-6   mt-20 justify-center">
          <a href="#" className="hover:text-gray-300  font-bold">
            Legal Policies
          </a>
          <a href="#" className="hover:text-gray-300 text-xs">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-300 text-xs">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300 text-xs">
            Cookies Policy
          </a>
          <a href="#" className="hover:text-gray-300 text-xs">
            Disclaimer Policy
          </a>
          <a href="#" className="hover:text-gray-300 text-xs">
            Payment Policy
          </a>
        </div>
        {/* <div className="flex space-x-4 flex-col gap-6 mt-10 justify-center">
                    <a href='#' className="hover:text-gray-300">Legal Policies</a>
                    <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-300">Cookies Policy</a>
                    <a href="#" className="hover:text-gray-300">Disclaimer Policy</a>
                    <a href="#" className="hover:text-gray-300">Payment Policy</a>
                </div> */}
        {/* contact us */}
        <div className="flex flex-col gap-6 mt-10  justify-center">
          <a href="#" className="hover:text-gray-300  font-bold">
            Contact us{" "}
          </a>
          <a
            href="#"
            className="hover:text-gray-300  flex text-xs items-center gap-2  "
          >
            <img
              className="h-[24px] w-25 "
              src=" https://res.cloudinary.com/dkqqg46sx/image/upload/v1721670211/phone_ws8osw.png"
              alt="Phone"
            />
            <p>25212345668</p>{" "}
          </a>
          <a
            href="#"
            className="hover:text-gray-300  flex text-xs items-center gap-2  "
          >
            <img
              className="h-[24px] w-25 "
              src=" https://res.cloudinary.com/dkqqg46sx/image/upload/v1721670746/Vector_4_i92pxd.png"
              alt="whatsapp"
            />
            {/* <WhatsIcon className="size-[34px]" />  */}
            <p>25212345668</p>{" "}
          </a>
          <a
            href="#"
            className="hover:text-gray-300  flex text-xs items-center gap-2  "
          >
            <img
              className="h-[24px] w-25 "
              src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721670143/email_dx5vrt.png"
              alt="Email"
            />

            {/* <EmailIcon className="size-[34px]"/>  */}
            <p> info@OMAYAExpress.com</p>
          </a>
          <a
            href="#"
            className="hover:text-gray-300  flex text-xs items-center gap-2  "
          >
            <img
              className="h-[24px] w-25 "
              src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721670274/ci_location_toretk.png"
              alt="Location"
            />

            {/* <LocationIcon className="size-[34px]"/> */}
            <p> KM4,Mogadishu, Somalia</p>
          </a>
        </div>
        {/* qrcode */}
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex t bg-  space-x-4">
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1721378030/Frame_34421_ytkmif.png"
              alt=""
            />
          </div>
          <div className="flex t space-x-4">
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1721378155/Frame_34422_aeu2cj.png"
              alt=""
            />
          </div>
        </div>
      </div>{" "}
      {/* copyright */}
      <div className="flex space-x-4 flex-col gap-6  justify-center">
        <div className="mt-2"></div>
        <Divider className="bg-gray-800 mt-2 " />
        <p className="text-gray-400 flex items-center justify-center flex-col text-center">
          Copyright © {new Date().getFullYear()} , OMAYA.io
          <p className="flex flex-row gap-2 mt-2">
            {" "}
            Powered By:{" "}
            <img
              className="h-[24px] w-25 items-center"
              src="https://res.cloudinary.com/pitz/image/upload/v1721366723/Frame_rmtgyx.png"
              alt=""
            />
          </p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
