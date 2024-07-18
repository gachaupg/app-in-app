import { Minus, Plus } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";

const SellAsset = () => {
  return (
    <div>
      <div className="w-full  flex flex-col p-1 gap-3">
        <p className="text-slate-300">Type & Price</p>
        <div className="p-2 border bg border-slate-800  secondary rounded-lg w-full  wrap ">
          <div className="flex flex-row wrap   w-full justify-between ">
            <div
              style={{ width: "100%" }}
              className="flex flex-col   justify-between p-2 flex-wrap"
            >
              <p className="text-slate-400">Asset</p>
              <div
                // style={{
                //   background: "#0c0c0f",
                //   width: "100%",
                // }}
                className="border border-slate-800 primary rounded-lg p-2 flex flex-row  items-center justify-between"
              >
                <div className="flex flex-row items-center gap-1">
                  <img
                    src="https://res.cloudinary.com/pitz/image/upload/v1720978153/TRC20_w1holx.png"
                    alt=""
                  />
                  <p className="text-white">
                    Tether USDT <span className="text-slate-600">TRC20</span>{" "}
                  </p>
                </div>
                <IoMdArrowDropdown color="green" size={30} />
              </div>
            </div>
            <div
              style={{ width: "100%" }}
              className="flex flex-col  justify-between p-2 flex-wrap"
            >
              <p className="text-slate-400">Asset</p>
              <div
                // style={{
                //   background: "#0c0c0f",
                //   width: "100%",
                // }}
                className="border border-slate-800 primary rounded-lg p-2 flex flex-row justify-between"
              >
                <div className="flex flex-row items-center gap-1">
                  <img
                    src="https://res.cloudinary.com/pitz/image/upload/v1720977989/coins-rotate_halqzn.png"
                    alt=""
                  />
                  <p className="text-white">
                    {" "}
                    1.22 <span className="text-slate-600">USD</span>
                  </p>
                </div>
                <div className="text-green-600 flex flex-row items-center justify-center gap-2">
                  <Plus /> <Minus />
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <p className="text-slate-400">Type & Price</p>
        <div className="p-2 border border-slate-800 rounded-lg w-full wrap secondary">
          <div className="flex flex-row  w-full justify-between wrap">
            <div
              style={{ width: "100%" }}
              className="flex flex-col  justify-between p-2 flex-wrap"
            >
              <p className="text-slate-400">I want to sell</p>
              <div
                // style={{
                //   background: "#0c0c0f",
                //   width: "100%",
                // }}
                className="border border-slate-800 primary rounded-2xl p-2 flex flex-row  items-center justify-between"
              >
                <div className="flex flex-row items-center gap-1">
                  <img
                    src="https://res.cloudinary.com/pitz/image/upload/v1720978153/TRC20_w1holx.png"
                    alt=""
                  />
                  <input
                    style={{
                      background: "#0c0c0f",
                      width: "100%",
                    }}
                    type="text"
                    className=" w-full p-1 text-white"
                    placeholder="1,000 USDT"
                  />
                </div>
                <IoMdArrowDropdown color="green" size={30} />
              </div>
            </div>
            <div
              style={{ width: "100%" }}
              className="flex flex-col  justify-between p-2 flex-wrap"
            >
              <p className="text-slate-400">Order min</p>
              <div
                style={{
                  background: "#0c0c0f",
                  width: "100%",
                }}
                className="border border-slate-800 rounded-2xl p-2 flex flex-row justify-between"
              >
                <div className="flex flex-row items-center gap-1">
                  <img
                    src="https://res.cloudinary.com/pitz/image/upload/v1720977989/coins-rotate_halqzn.png"
                    alt=""
                  />
                  <input
                    style={{
                      background: "#0c0c0f",
                      width: "100%",
                    }}
                    type="text"
                    className=" w-full p-1 text-white"
                    placeholder="20.00 USDT"
                  />
                </div>
                <div className="text-slate-400 flex flex-row items-center justify-center gap-2">
                  USD <IoMdArrowDropdown color="" size={30} />
                </div>
              </div>
            </div>{" "}
            <div
              style={{ width: "100%" }}
              className="flex flex-col  justify-between p-2 flex-wrap"
            >
              <p className="text-slate-400">Asset</p>
              <div
                style={{
                  background: "#0c0c0f",
                  width: "100%",
                }}
                className="border border-slate-800 rounded-2xl p-2 flex flex-row  items-center justify-between"
              >
                <div className="flex flex-row items-center gap-1">
                  <img
                    src="https://res.cloudinary.com/pitz/image/upload/v1720978153/TRC20_w1holx.png"
                    alt=""
                  />
                  <input
                    style={{
                      background: "#0c0c0f",
                      width: "100%",
                    }}
                    type="text"
                    className=" w-full p-1 text-white"
                    placeholder="20.00 USDT"
                  />
                </div>
                <div className="text-slate-400 flex flex-row items-center justify-center gap-2">
                  USD <IoMdArrowDropdown color="" size={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row  w-full justify-between wrap">
            <div
              style={{ width: "100%" }}
              className="flex flex-col  justify-between p-2 flex-wrap"
            >
              <p className="text-slate-400">Payment Method</p>
              <div
                style={{
                  background: "#0c0c0f",
                  width: "100%",
                }}
                className="border border-slate-800 rounded-2xl p-2 flex flex-row  items-center justify-between"
              >
                <div className="flex flex-row items-center gap-1">
                  <img
                    src="https://res.cloudinary.com/pitz/image/upload/v1721025707/Icon_cr4c7m.png"
                    alt=""
                  />
                  <select
                    style={{
                      background: "#0c0c0f",
                      width: "20rem",
                    }}
                    type="text"
                    className=" w-full p-1 text-white"
                    placeholder=""
                  >
                    <option value="">Bank Transfer</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              style={{ width: "100%" }}
              className="flex flex-col  justify-between p-2 flex-wrap"
            >
              <p className="text-slate-400">Provider</p>
              <div
                style={{
                  //   background: "#0c0c0f",
                  width: "100%",
                }}
                className="border border-slate-800 rounded-2xl  primary p-2 flex flex-row justify-between"
              >
                <div className="flex flex-row items-center gap-1">
                  <img
                    src="https://res.cloudinary.com/pitz/image/upload/v1721025705/Premier_bank_ktew2w.png"
                    alt=""
                  />
                  <select
                    style={{
                      //   background: "#0c0c0f",
                      width: "20rem",
                    }}
                    type="text"
                    className=" w-full primary p-1 text-white"
                    placeholder=""
                  >
                    <option value="">Bank Transfer</option>
                  </select>
                </div>
              </div>
            </div>{" "}
            <div
              style={{ width: "40%" }}
              className="flex flex-col small  justify-between p-2 flex-wrap"
            >
              <p className="text-slate-400">Time Limit</p>
              <div
                style={{
                  //   background: "#0c0c0f",
                  width: "100%",
                }}
                className="border border-slate-800 primary rounded-2xl small p-2 flex flex-row  items-center justify-between"
              >
                <div className="flex flex-row items-center gap-1">
                  <img
                    src="https://res.cloudinary.com/pitz/image/upload/v1720978153/TRC20_w1holx.png"
                    alt=""
                  />
                  <select
                    style={{
                      //   background: "#0c0c0f",
                      width: "100%",
                    }}
                    type="text"
                    className=" w-full primary p-1 primary text-white"
                    placeholder=""
                  >
                    <option value="">5 min</option>
                    <option value="">10 min</option>
                    <option value="">15 min</option>
                    <option value="">20 min</option>
                    <option value="">30 min</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row  w-full justify-between wrap">
            <div
              style={{ width: "100%" }}
              className="flex flex-col  justify-between p-2 flex-wrap"
            >
              <p className="text-slate-400">Your Account</p>
              <div
                style={{
                  //   background: "#0c0c0f",
                  width: "100%",
                }}
                className="border border-slate-800 primary rounded-2xl p-2 flex flex-row  items-center justify-between"
              >
                <div className="flex flex-row items-center gap-1">
                  {/* <img
                          src="https://res.cloudinary.com/pitz/image/upload/v1720978153/TRC20_w1holx.png"
                          alt=""
                        /> */}
                  <input
                    style={{
                      //   background: "#0c0c0f",
                      width: "100%",
                    }}
                    type="text"
                    className=" w-full primary p-1  text-white"
                    placeholder="Your Account"
                  />
                </div>
                {/* <IoMdArrowDropdown color="green" size={30} /> */}
              </div>
            </div>
            <div
              style={{ width: "100%" }}
              className="flex flex-col  justify-between p-2 flex-wrap"
            >
              <p className="text-slate-400">Account Number</p>
              <div
                style={{
                  //   background: "#0c0c0f",
                  width: "100%",
                }}
                className="border primary border-slate-800 rounded-2xl p-2 flex flex-row justify-between"
              >
                <div className="flex flex-row items-center gap-1">
                  {/* <img
                          src="https://res.cloudinary.com/pitz/image/upload/v1720977989/coins-rotate_halqzn.png"
                          alt=""
                        /> */}
                  <input
                    style={{
                      //   background: "#0c0c0f",
                      width: "100%",
                    }}
                    type="text"
                    className=" w-full  primary p-1 text-white"
                    placeholder="07835252362351"
                  />
                </div>
                {/* <div className="text-slate-400 flex flex-row items-center justify-center gap-2">
                        USD   <IoMdArrowDropdown color="" size={30} />
                      </div> */}
              </div>
            </div>{" "}
            {/* <div
                      style={{ width: "100%" }}
                      className="flex flex-col  justify-between p-2 flex-wrap"
                      >
                      <p className="text-slate-600">Asset</p>
                      <div
                      style={{
                        background: "#0c0c0f",
                        width: "100%",
                      }}
                      className="border border-slate-800 rounded-2xl p-2 flex flex-row  items-center justify-between"
                      >
                      <div className="flex flex-row items-center gap-1">
                        <img
                          src="https://res.cloudinary.com/pitz/image/upload/v1720978153/TRC20_w1holx.png"
                          alt=""
                        />
                        <input  style={{
                        background: "#0c0c0f",
                        width: "100%",
                      }} type="text" className=" w-full p-1 text-white"  placeholder="20.00 USDT"/>
                      </div> */}
            {/* <div className="text-slate-600 flex flex-row items-center justify-center gap-2">
                        USD   <IoMdArrowDropdown color="" size={30} />
                       </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
          <button
            className="bg-green-600 mb-2 h-9 ml-3 p-1 rounded-2xl text-white"
            style={{ width: "17rem" }}
          >
            Add a payment method
          </button>
        </div>{" "}
        <p className="text-slate-600">Terms & Auto Reply</p>
        <div className="border secondary p-2 rounded-2xl border-slate-600">
          <p className="text-slate-600">Terms (Optional)</p>
          <textarea
            style={{
              background: "#0c0c0f",
              width: "100%",
              height: "150px",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "start",
              paddingTop: "0.5rem",
              color: "white", // Ensure the text is visible on the dark background
              padding: "0.5rem",
            }}
            className="w-full rounded-2xl h-32"
            placeholder="comments from advertiser"
          />
          <p className="text-slate-600">Auto reply (Optional)</p>
          <textarea
            style={{
              background: "#0c0c0f",
              width: "100%",
              height: "150px",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "start",
              paddingTop: "0.5rem",
              color: "white", // Ensure the text is visible on the dark background
              padding: "0.5rem",
            }}
            className="w-full rounded-2xl h-32"
            placeholder="comments from advertiser"
          />{" "}
          <div className="flex flex-row mt-3 wrap">
            <button
              style={{
                background: "",
              }}
              className=" primary w-full mb-2 h-9 ml-3 p-1 rounded-2xl text-white"
            >
              cancel the post
            </button>
            <button className="bg-green-600 w-full mb-2 h-9 ml-3 p-1 rounded-2xl text-white">
              Add the post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellAsset;
