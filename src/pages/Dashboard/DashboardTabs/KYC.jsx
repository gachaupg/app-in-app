/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import { Cancel } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Select from "react-select";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "none",
  pt: 2,
  px: 4,
  pb: 3,
};

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#1D1D23",
    color: "white",
    width: "100%",
    padding: 2,
    borderRadius: 22,
    border: "1px solid #35353E",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#1D1D23",
    width: "100%",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "gray" : "#1D1D23",
    color: "white",
    width: "100%",
    "&:hover": {
      backgroundColor: "gray",
    },
  }),
};

const KYC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
      });
  }, []);


  const [kyc, setKyc] = useState([])

  console.log('kyc', kyc);

  // useEffect(()=>{
  // if (kyc.is_verified===true) {
  //   setLoadingKyc(false)
  // }else{
  //   return
  // }
  // },[kyc]);

  const [loading1, setLoading1] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate();

  // https://omayaexchangebackend.onrender.com/api/kyc/status/
  useEffect(() => {
    fetchKyc()
  }, [user])
  async function fetchKyc() {
    const token = user.access;

    if (!token) {
      toast.error("Authentication token is missing. Please log in again.");
      navigate("/login");
      setLoading1(false);
      return;
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      const res = await axios.get(
        `https://omayaexchangebackend.onrender.com/api/kyc/status/`,
        { headers }
      );
      setKyc(res.data);
      console.log(res.data);

      setLoading1(false);
      if (res.data.is_verified === false) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }



  return (
    <div
      style={{
        height: "70vh",
      }}
      className="flex   w-full primary  items-justify-between"
    >
      <div>
        <h2 className="text-slate-400  mb-3">KYC Verification</h2>

        <Modal
          className="rounded-lg border-slate-700"
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box
            sx={{ ...style, width: "68%" }}
            className="rounded-lg primary white border-slate-700"
          >
            <h2 className="text-center mb-4" id="child-modal-title">
              KYC Verification Form
            </h2>
            <div className="p-1">
              <div className="flex flex-row items-center justify-between p-2 w-full gap-6 wrap small">
                <div className="flex flex-col items-center w-full gap-7">
                  <input
                    placeholder="Full Name"
                    required
                    type="text"
                    className="flex border border-slate-700 p-2 w-full primary text-white rounded-3xl"
                  />
                  <input
                    placeholder="Phone Number"
                    required
                    type="tel"
                    className="flex border border-slate-700 p-2 w-full primary text-white rounded-3xl"
                  />
                  <input
                    placeholder="Date of birth"
                    required
                    type="date"
                    className="flex border border-slate-700 p-2 w-full primary text-white rounded-3xl"
                  />
                  <Select
                    placeholder="Select Country"
                    className="  w-full primary text-white rounded-3xl"
                    options={countries}
                    value={selectedCountry}
                    onChange={(selectedOption) =>
                      setSelectedCountry(selectedOption)
                    }
                    styles={customStyles}
                  />
                  <input
                    placeholder="City"
                    required
                    type="date"
                    className="flex border border-slate-700 p-2 w-full primary text-white rounded-3xl"
                  />
                </div>
                <div className="flex flex-col items-center w-full gap-7">
                  <input
                    placeholder="Email"
                    required
                    type="email"
                    className="flex border border-slate-700 p-2 w-full primary text-white rounded-3xl"
                  />
                  <input
                    placeholder="Phone Number"
                    required
                    type="tel"
                    className="flex border border-slate-700 p-2 w-full primary text-white rounded-3xl"
                  />
                  <input
                    placeholder="Date of birth"
                    required
                    type="date"
                    className="flex border border-slate-700 p-2 w-full primary text-white rounded-3xl"
                  />
                  <Select
                    placeholder="Select Country"
                    className="w-full primary text-white rounded-3xl"
                    options={countries}
                    value={selectedCountry}
                    onChange={(selectedOption) =>
                      setSelectedCountry(selectedOption)
                    }
                    styles={customStyles}
                  />

                  <input
                    placeholder="City"
                    required
                    type="date"
                    className="flex border border-slate-700 p-2 w-full primary text-white rounded-3xl"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center mt-10 justify-between p-2 w-full gap-6 wrap small">
                <Button
                  className="white txt border border-slate"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button
                  className="white txt1 border border-slate"
                  onClick={handleClose}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Box>
        </Modal>

        <div className="flex w-full primary flex-col items-center p-3">
          <div
            style={{ width: "100%" }}
            className="flex flex-col gap-10 border border-slate-600 secondary p-2 rounded-lg"
          >
            <p className="text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <div className="flex flex-row gap-6">
            <RxAvatar className="g" size={35}/>

              <div className="flex flex-col gap-2">
                <p className="white">{user.user.name}</p>
                <p
                  style={{ fontSize: "12px", color: "#F79330" }}
                  className=" flex flex-row items-center gap-1 "
                >
                  {kyc.is_verified ? <p className="green">Verified</p> : 'Unerified account'} {" "}
                  <img
                    className="h-4"
                    src="https://res.cloudinary.com/pitz/image/upload/v1721370408/Frame_34216_jnzjpy.png"
                    alt=""
                  />
                </p>
              </div>
            </div>
            <button
              disabled={kyc.is_verified}
              onClick={handleOpen}
              className={`p-2 h-19 rounded-2xl ${kyc.is_verified ? 'greybg text-white cursor-not-allowed' : 'bg-green-600 text-white cursor-pointer'
                }`}
            >
              Update now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default KYC;
