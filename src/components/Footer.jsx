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
    <footer className="secondary text-white py-4">
      <div className="container footer mx-auto flex justify-between flex-wrap items-center">
        <div className="flex space-x-4 flex-col  w-56 gap-6 items-center justify-center">
          <div className="log">
            <img
              height={100}
              style={{
                height: "3rem",
                // width: '3rem',
              }}
              src="https://res.cloudinary.com/pitz/image/upload/v1721285628/_Group__issm2q.png"
              alt=""
            />
          </div>
          <p className="text-white"> Follow us on </p>
          <div className="flex space-x-4">
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
          <div className="flex space-x-4">
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
          <h3 className="hover:text-gray-300 font-bold">
            Quick Links
          </h3>
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
        <div className="flex  flex-col gap-6  mt-10 justify-center">
          <a href="#" className="hover:text-gray-300  font-bold">
            Legal Policies
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

        <div className="flex space-x-4 flex-col gap-6 mt-10  justify-center">
          <a href="#" className="hover:text-gray-300  font-bold">
            Contact us{" "}
          </a>
          <a href="#" className="hover:text-gray-300  flex text-xs center gap-2  ">
            <FaPhone />
            <p>25212345668</p>{" "}
          </a>
          <a href="#" className="hover:text-gray-300  flex text-xs center gap-2  ">
            <FaWhatsapp /> <p>25212345668</p>{" "}
          </a>
          <a href="#" className="hover:text-gray-300  flex text-xs center gap-2  ">
            <FaEnvelope /> <p> info@OMAYAExpress.com</p>
          </a>
          <a href="#" className="hover:text-gray-300  flex text-xs center gap-2  ">
            <FaLocationPin /> <p> KM4,Mogadishu, Somalia</p>
          </a>
        </div>

        <div className="flex space-x-4 flex-col gap-6  justify-center">
          <div className="flex t bg-  space-x-4">
            <img
              className="w-1.5 h-1 ml-2 object-cover"
              src="data:image/png;base64,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"
              alt="App Store"
            />
            <img
            style={{
                objectFit:"fill"
            }}
              className="ml-2 object-cover"
              src="https://res.cloudinary.com/pitz/image/upload/v1721285624/qr-code-bc94057f452f4806af70fd34540f72ad_3_xksqgt.png"
              alt="QR Code"
            />
          </div>
          <div className="flex t space-x-4">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACiCAMAAAD84hF6AAABUFBMVEX///9fY2hChfQ0qFPqQzX7vARUWF5ZXmNQVVtXXGHk7f0ufPPR0tP7+/uZm57t7u6usLJ/goa2t7lqbnOQk5bW19j7uACipKeytLZDg/uEh4rLzM3e3t/19fWcnqFucXZ3en7ExcczqkTn6Ogap1b8wADqPS4aokM0qUy9vsD935tDg/yLjpFNgen+68HxPh3pNiT4zcr2vLjh8eVyv4VVtG2z271ErmDH5c7T6tgIoDxZtmnu9/Dx9f8okaeMypsuefo8lLg9ksE+j8w/jNab0KdBiOc1pWNZpjL5y1j/+Og2onNxrUP91XWGrz3+5a84nomVsDn8xDc5nJM6maGxsy38z2PNugk/RUzNTGz2bB/uZyvTT1zbSk7tWy7iRj1hfNv5rQ57dMWKbrb0q6aZaajymJKmY5rwhX3ubmX7392xX43sXVK7Wn7EVnHud2/+Tc2aAAAJJUlEQVR4nO2aaZvjRhGALc+4j11JvqSxR5Ysez3xjImHdchFFkIIOThCSAgQEkiyHEtYQoD//42qllq3L41nnHmeer/sum23W6+6u6pa02gQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQxB3y42MP4B7y8iuXTy5ffe3Yw7hnvPbk6gS4fP2Hxx7JfeKNJycxl6++fOzB3B9+dJJy+Qptcrvx5k8eZbxdXb5lHXtE94IHP3076+3k6opiww48eHj+s5w3ig278OBhs+gNYsMbxx7Wdx3Q1jx/p+ANYgMF1Y2gtub5u1cFbxAbKKhuQGmr8Abi3tu3L8sdjm17sPBvY6DfLSJt4O2kJO7yZK+gai4Fkxxggo/bBxpesLRtZ0tO5Dt2QsfUrVPHdnoHGkWZWFvz/P3XS972Cap+KLiRwMXgMMNrC87FFm2m4AmSyWHU2hGc2YcZRAVaW7NZ5W3noDpQ0mDUgERx0pgdYnhtAV1t08aMLKyvpnpHGvwutDWvf17h7eIXv/zV9l48pqaY1zN9fzRQE09ODjG8nbWJCAa/zBl6uzNtzeYHJW8Xv261zj7cVnB5OMHEINCv3QmT3YMMb1dtfStA2qMJDIVPGneqreQNrSHf29jHAMbNjVz8HB7G2u7aklc2eBPTu9XW/CCX+F78JrLWOmt9tL4LX+CWcqjYmWd/bY0Q7qF3x9rOP854u/htK+Hsk++v62KCO9lBAkCZGtqmuEzvWFvz/HePqqyhuDWxwcUrG97S8Gpo8+El5Cx3qy31VrCG4j6s6sHG1GPbz1i+afrFy69sDFzTTWJLQVsbPh80imzXFrjTqXnQXaSkrXn+e+Xt4g9Fa+Dt04oeMPXYktyOPCkYE9JxM41u3LjMNo66mPkxb9buet44p83q9PHzbFms3QrahlK9TLW5nupThEPsqDPpdpfpIODVxG3sTVlb80U88K2yBt7KG9wMLoxt/OGgqwsILpJCKdu41I2WFzdyNpAcc5hUm8ul/nwn339eW4CZm53RZiflC+vPcLxQdyTj9aAc7Df2p0Jb88W3H1Vba7XK083FNZEugPawlzLECrHNcdgyqh5kP1pkgbGlES8+q20klE2G+awYr9c26+MHZqk2h0V9qoRcwkA9bnA93QK859MDaQNvf6y21nqh1AEOWmQsCpnCIBFooAHZH5pmh8cugL5uHOIk4qFqDKNG1+wwVapltOG/hnBM3/RElJcVtC0UvSV+jqHWWJv7GfxrDF13EbKoS8yX9H3u4F2r8/SkUlvz8z+9UK3tk1IHo2gHTrRlC0Qc5QDTz3hZOfB/toiHy+IN0YZvMDyrGLKk0ZoUZhtMEYNFm9qUFYKrKq7iG4W6WbeRamu0B7rM6+FIfZXYyfi38T4VlvwNtH2+Ov1ztbdyLFWBK83a0tkWXTguA5lEDLx6WE8WXnmy0hwe3XJpZFKG/GzDDVRE1todXkh48qW8PnzJRFLteMnVF/FGR1MM/yfLobmetusvVqen1d7OyqlbYXto631tYas9BOcGT9+NbjheKE8mTCBVUFGNyTVA0prRBtERM39Q5KmNT3hFbSxCcDu+hRlt7ngC+4BtTuMmQ4+4y+vmdmVt11+itdPTryqsVZVYWMwsK9ph3DDNxvmRweKDVQoLlztpY1fNgnwjBMSMNpgncKHtjgGbHmd8nKtJ1N7mmor0jUSb22cqKHEVFPAXFjKq9rFzUa+8KWm7/nJ+GvHVWX7CnbUq6yu1T1XkkhN1T+OFoQGLsJk4PLelDMDFGNPmbGNukYJtPlhGE20yLezhhbwtHZbSthA8CsFq31ParHijHOg5vD9FbddPtbWCt7N1xyB4ZRXTDfc8sFnQZq/X5mzQ1sVLx4lmjMsPKjZqm6nEZbkwR8OujLXpiY2pSo1UFylo+8s8tQbe/pp6W3/oZuv4mAP3Da9RvUg7NRZp5URTbNSG8aYfL8Se/gXcTXkAAUGt1TrkteWtAbG3s083HPFazCgnjWMZ3cpRbvefrQsJYnNIWOB79ponYhu14dBGcRPIj28Mzuyhx+ulukhOW8la5G3d2YfGVTlmti4N8JRcqn2EVSUg3MjMrGV8FoCNSVaST0AwAstkQi/zK2ujNpbke2rbiH91pg5WdziCWEdW299WRWnorbX+pE2zEOqhyyKeK+2oHuir+YRHv0ynuyzO8DOZrWosprtBMd11ZFIbWB4T42K6u1ZbmKhyk5DQiO7fTc67Mtr+/rjC2up0w7luwlSVy1KEzmC87AssWbgRS8Q6ivU75mhgFIurDlRchj78j4orBhXXaCCLxVWAVym6i7iXXDW/URuWBnLSMxeeOoPW2tQCMbY9StxFW5W11erZbt34/ShVx2eVRnSJ+q181R5a6xst3cjLpbyv8ojoPShOs7+9OQEJk+/JSWZrUNO5/sPcRNs/ytbmq693vx09gyXPlyFRyOy1VuaMKAmqyRlR9jQpc3DU0ZFUP15uh7p/KfJP2/HxcoU2xiX+WhDGtZewR4IznSmN8gc3+6K1/bNkbf74+X7l2sgxhCpwDGeUf8eF7UgdU2ZTcncZN2YDpOkJwYRYtiEIKG1dz+vGVqddgV8wBoWr9eEz5bxxAa3RUl6E2Gc4bbiO7ejdDCdjVW2zI7G2krX54399s39vbd90K46t8fzbdctlzKyi0fLVQTmEvfJlwXtunRkS+H7ha5aRRtg6RNr+XbS2+val+n3WJ704yNTqHensRk/WT3URpe0/BWurpz841Pj2wBp108Iaywlz06dvRt+4Wfeo7b95a6v5s6P8uTjEAx7GK7yXnIndCtPK4LsHoC1vDcJnrYO7m4On1dyAstOa2Zkc+TYIq6rofXjw8ItVTtrzGpHgQPRUkSb7hsrRwtv7IfPGc/nNrLX5qk74PBy99E8LWXiLc37CbxxvnqfaVk+PEj4z+F0h1d9E3uYKbbifQXZ5w4f0gT71WM2PET6LzHpjx+6YtxqT1J/C3bSTb75dzefznatPQvPS1/97/uxI4ZMgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCGIj/wezTMTzrIwQSAAAAABJRU5ErkJggg=="
              alt="App Store"
            />
            <img
            style={{
                objectFit:"fill"
            }}
              className="object-cover"
              src="https://res.cloudinary.com/pitz/image/upload/v1720087882/a86940a4ed8a69539b341f3c414c47b3_odtaz5.png"
              alt="QR Code"
            />
          </div>
        </div>
      </div>{" "}
      <div className="flex space-x-4 flex-col gap-6  justify-center">
        <p className="text-gray-400 text-center">
          © {new Date().getFullYear()} OMAYA Exchange. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
