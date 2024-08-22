import { Divider } from "@mui/material";

const Footer = () => {
  return (
    <footer className="primary small text-white py-4">
      <div className="container foo mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo and Social Links */}
        <div className="flex flex-col gap-6 items-start justify-start">
          <div className="log mt-12">
            <img
              className="w-56 "
              src="https://res.cloudinary.com/pitz/image/upload/v1721366723/Frame_rmtgyx.png"
              alt=""
            />
          </div>
          <p className="text-white">Follow us on:</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#" className="hover:text-gray-300">
              <img
                className="h-[24px] w-25"
                src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721664488/Telegram_auibdu.png"
                alt="Telegram"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img
                className="h-[24px] w-25"
                src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721664570/Youtube_xrzkof.png"
                alt="YouTube"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img
                className="h-[24px] w-25"
                src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721664650/Facebook_ls7rxb.png"
                alt="Facebook"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img
                className="h-[24px] w-25"
                src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721664610/Instagram_w4q0f0.png"
                alt="Instagram"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img
                className="h-[24px] w-25"
                src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721670746/Vector_4_i92pxd.png"
                alt="Whatsapp"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img
                className="h-[24px] w-25"
                src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721664650/Facebook_ls7rxb.png"
                alt="Snapchat"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img
                className="h-[23px] w-23"
                src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721673628/Vector_5_dgbfrh.png"
                alt="Twitter"
              />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img
                className="h-[24px] w-25"
                src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721664205/Vector_3_qxcbf9.png"
                alt="TikTok"
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6 justify-center mt-8 md:mt-0">
          <h3 className="hover:text-gray-300 font-bold">Quick Links</h3>
          <a href="#" className="hover:text-gray-300 text-xs">
            Support Center
          </a>
          <a href="#" className="hover:text-gray-300 text-xs">
            Our Partners
          </a>
          <a href="#" className="hover:text-gray-300 text-xs">
            FAQ
          </a>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-6 justify-center mt-0">
          <h3 className="hover:text-gray-300 font-bold">Company</h3>
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

        {/* Legal Policies */}
        <div style={{
          marginTop:'5rem'
        }} className="flex flex-col gap-6 justify-center mt-16">
          <h3 className="hover:text-gray-300 font-bold">Legal Policies</h3>
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

        {/* Contact Us */}
        <div style={{
          marginTop:'4.5rem'
        }} className="flex flex-col gap-6 mt-16">
          <h3 className="hover:text-gray-300 font-bold">Contact us</h3>
          <a
            href="#"
            className="hover:text-gray-300 flex items-center gap-2 text-xs"
          >
            <img
              className="h-[24px] w-25"
              src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721670211/phone_ws8osw.png"
              alt="Phone"
            />
            <p>25212345668</p>
          </a>
          <a
            href="#"
            className="hover:text-gray-300 flex items-center gap-2 text-xs"
          >
            <img
              className="h-[24px] w-25"
              src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721670746/Vector_4_i92pxd.png"
              alt="Whatsapp"
            />
            <p>25212345668</p>
          </a>
          <a
            href="#"
            className="hover:text-gray-300 flex items-center gap-2 text-xs"
          >
            <img
              className="h-[24px] w-25"
              src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721670143/email_dx5vrt.png"
              alt="Email"
            />
            <p>info@OMAYAExpress.com</p>
          </a>
          <a
            href="#"
            className="hover:text-gray-300 flex items-center gap-2 text-xs"
          >
            <img
              className="h-[24px] w-25"
              src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1721670274/ci_location_toretk.png"
              alt="Location"
            />
            <p>KM4, Mogadishu, Somalia</p>
          </a>
        </div>

        {/* QR Codes */}
        <div style={{
          marginTop:'5rem'
        }} className="flex flex-col gap-5 mt-8 md:mt-0">
          <div className="flex space-x-4">
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1721378030/Frame_34421_ytkmif.png"
              alt="QR Code"
            />
          </div>
          <div className="flex space-x-4">
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1721378155/Frame_34422_aeu2cj.png"
              alt="QR Code"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col items-center justify-center mt-10">
        <Divider className="bg-gray-800 w-full" />
        <p className="text-gray-400 text-center mt-4">
          Copyright © {new Date().getFullYear()}, OMAYA.io
        </p>
        <p className="flex items-center gap-2 mt-2">
          Powered By:
          <img
            className="h-[24px] w-25"
            src="https://res.cloudinary.com/pitz/image/upload/v1721366723/Frame_rmtgyx.png"
            alt="Powered By"
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
