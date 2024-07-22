import { Divider } from "@mui/material";
import {
  FaWhatsapp,
  FaSnapchatGhost,
  FaTwitter,
  FaTiktok,
  FaTelegram,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="primary text-white py-4">
      <div className="container footer mx-auto flex justify-between flex-wrap items-center">
        <div className="flex space-x-4 flex-col  w-56 gap-6 items-center justify-center">
          <div className="log mt-12">
            <img
              className="flex pl-16 w-64 space-x-4"
              height={100}
              style={{
                height: "3rem",
              }}
              src="https://res.cloudinary.com/pitz/image/upload/v1721366723/Frame_rmtgyx.png"
              alt=""
            />
          </div>
          <p className="text-white"> Follow us on : </p>
          <div className="flex pl-20 space-x-4">
            <a href="#" className="hover:text-gray-300">
              <FaTelegram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
          <div className="flex pl-20  space-x-4">
            <a href="#" className="hover:text-gray-300">
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaSnapchatGhost />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTiktok />
            </a>
          </div>
        </div>

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

        <div className="flex flex-col gap-6 mt-10  justify-center">
          <a href="#" className="hover:text-gray-300  font-bold">
            Contact us{" "}
          </a>
          <a
            href="#"
            className="hover:text-gray-300  flex text-xs center gap-2  "
          >
            <FaPhone />
            <p>25212345668</p>{" "}
          </a>
          <a
            href="#"
            className="hover:text-gray-300  flex text-xs center gap-2  "
          >
            <FaWhatsapp /> <p>25212345668</p>{" "}
          </a>
          <a
            href="#"
            className="hover:text-gray-300  flex text-xs center gap-2  "
          >
            <FaEnvelope /> <p> info@OMAYAExpress.com</p>
          </a>
          <a
            href="#"
            className="hover:text-gray-300  flex text-xs center gap-2  "
          >
            <FaLocationPin /> <p> KM4,Mogadishu, Somalia</p>
          </a>
        </div>
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
      <div className="flex space-x-4 flex-col gap-6  justify-center">
        <div className="mt-2"></div>
        <Divider className="bg-gray-800 mt-2 " />
        <p className="text-gray-400 flex items-center justify-center flex-col text-center">
          Copyright © {new Date().getFullYear()} , OMAYA.io
          <p className="flex flex-row gap-2 mt-2">
            {" "}
            Powered By:{" "}
            <img
              className="h-10 w-24 items-center"
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
