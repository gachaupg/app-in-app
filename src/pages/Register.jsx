/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { Call } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { Dot } from "lucide-react";
import { MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidInstitution } from "react-icons/bi";
import { BsEye, BsFillPeopleFill } from "react-icons/bs";
import { FaLock, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../redux/features/authSlice";

const Register = () => {
  const initialState = {
    username: "",
    email: "",
    user_type: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
    refferal_code: "55555",
  };

  const navigate = useNavigate();
  const { error } = useSelector((state) => ({ ...state.auth }));
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passerror, setPassError] = useState("");
  const [type, setType] = useState("Individual");
  useEffect(() => {
    setUser((prevUser) => ({
      ...prevUser,
      refferal_code: "5353535",
    }));
  }, []);
  console.log("====================================");
  console.log(user);
  console.log("====================================");
  const handleType = () => {
    setType((prevType) =>
      prevType === "Individual" ? "Institution" : "Individual"
    );
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const isLengthValid = user.password.length >= 8;
  const hasNumberOrSymbol = /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(
    user.password
  );
  const hasUpperCase = /[A-Z]/.test(user.password);
  const hasLowerCase = /[a-z]/.test(user.password);
  const passwordsMatch = user.password === user.confirmPassword;
  console.log("====================================");
  console.log(user);
  console.log("====================================");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.confirmPassword !== user.password) {
      setPassError("Password did not match");
      toast.error("Password did not match");
      return;
    }

    if (!isLengthValid) {
      setPassError("Password must be 8 characters long");
      toast.error("Password must be 8 characters long");
      return;
    }
    if (!hasNumberOrSymbol) {
      setPassError("Password must contain a number or symbol");
      toast.error("Password must contain a number or symbol");
      return;
    }
    if (!hasUpperCase) {
      setPassError("Password must contain an uppercase letter");
      toast.error("Password must contain an uppercase letter");
      return;
    }
    if (!hasLowerCase) {
      setPassError("Password must contain a lowercase letter");
      toast.error("Password must contain a lowercase letter");
      return;
    }
    if (error) {
      toast.error(error);
    }

    if (!user.username || !user.email || !user.password || !user.user_type) {
      toast.error("All fields are required");
      return;
    }
    try {
      setLoading(true);
      await dispatch(register({ user, navigate, toast }));
    } catch (error) {
      toast.error("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" primary flex p-4 g justify-around w-full small wrap">
      <div className="image-none ">
        <img
        className="mt-5"
          style={{
            height: "27rem",
            objectFit: "fill",
            marginBottom: "5rem",
          }}
          src="https://res.cloudinary.com/pitz/image/upload/v1723127986/Frame_34357_uyqvfq.png"
          alt=""
        />
      </div>
      <div className="p-4 ">
        <p>Please Register with correct information</p>
        <h6>Account Type*</h6>
        <div className="account-type mb-10">
          <button
            onClick={handleType}
            style={{
              background:
                type === "Individual" ? "#1D8751" : "#1f1f27 ",
            }}
            className="type-btn"
          >
            <BsFillPeopleFill color="white" />
            <span style={{ marginLeft: "3px", color:type === "Individual" ? "white" : " ", }}>Individual</span>
          </button>
          <button
            onClick={handleType}
            style={{
              background:
                type === "Institution" ? "#1D8751              " : "#1f1f27 ",
            }}
            className="type-btn1"
          >
            <BiSolidInstitution color="white" />
            <span style={{ marginLeft: "5px", color: "white" }}>
              Institution
            </span>
          </button>
        </div>
        {type === "Individual" && (
          <form onSubmit={handleSubmit} className="">
            <div className="name-email flex flex-col md:flex-row gap-4">
              <div className="name max-w-screen-md">
                <label htmlFor="">User Name*</label>
                {user.name}
                <div className="input-group">
                  <AiOutlineUser color="green" className="input-icon" />
                  <input
                    style={{
                      border: user.name
                        ? "1px solid rgba(255, 255, 255, 0.5)"
                        : "1px solid red",
                    }}
                    type="text"
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="name max-w-screen-md">
                <label htmlFor="">Email*</label>
                <div className="input-group">
                  <MdOutlineMailOutline color="green" className="input-icon" />
                  <input
                    style={{
                      border: user.email
                        ? "1px solid rgba(255, 255, 255, 0.5)"
                        : "1px solid red",
                    }}
                    type="email"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="name-email flex mt-5 flex-col md:flex-row gap-4">
              <div className="name-email flex flex-col md:flex-row gap-14">
                <div className="name max-w-screen-md">
                  <label htmlFor="">Phone number</label>
                  <div className="input-group">
                    <Call color="green" className="input-icon text-green-500" />
                    <input
                      style={{
                        border: user.email
                          ? "1px solid rgba(255, 255, 255, 0.5)"
                          : "1px solid red",
                      }}
                      type="tel"
                      inputMode="numeric"
                      onChange={(e) =>
                        setUser({ ...user, phone_number: e.target.value })
                      }
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>
              <div className="name  max-w-md">
                <label htmlFor="">Registration Type*</label>
                <div className="input-group">
                  <select
                    style={{
                      width: "26rem",
                      border: user.confirmPassword
                        ? "1px solid rgba(255, 255, 255, 0.5)"
                        : "1px solid red",
                    }}
                    className="w-full select select secondary p-2 rounded-2xl"
                    name="registration type"
                    value={user.user_type}
                    onChange={(e) =>
                      setUser({ ...user, user_type: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Registration Type
                    </option>
                    <option value="individual">Individual</option>
                    <option value="company">Company</option>
                    <option value="agent">Agent</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="name-email mt-5 flex flex-col md:flex-row gap-4">
              <div className="name max-w-md">
                <label htmlFor="">Password*</label>
                <div className="input-group">
                  <FaLock color="green" className="input-icon" />
                  <input
                    style={{
                      border: user.password
                        ? "1px solid rgba(255, 255, 255, 0.5)"
                        : "1px solid red",
                    }}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    placeholder="Password"
                  />
                  {showPassword ? (
                    <FaRegEyeSlash
                      color="green"
                      className="input-icon1 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <BsEye
                      color="green"
                      className="input-icon1 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
              </div>
              <div className="name">
                <label htmlFor="">Confirm Password*</label>
                <div className="input-group">
                  <FaLock color="green" className="input-icon" />
                  <input
                    style={{
                      border: user.confirmPassword
                        ? "1px solid rgba(255, 255, 255, 0.5)"
                        : "1px solid red",
                    }}
                    type={showConfirmPassword ? "text" : "password"}
                    onChange={(e) =>
                      setUser({ ...user, confirmPassword: e.target.value })
                    }
                    placeholder="Confirm Password"
                  />
                  {showConfirmPassword ? (
                    <FaRegEyeSlash
                      color="green"
                      className="input-icon1 cursor-pointer"
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  ) : (
                    <BsEye
                      color="green"
                      className="input-icon1 cursor-pointer"
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  )}
                </div>
              </div>
            </div>
            <p className="flex flex-row items-center ">
              <Dot color="green" size="40" />
              <p className="g">At least 8 characters</p>
            </p>
            <p className="flex flex-row items-center ">
              <Dot color="green" size="40" />
              <p className="g">At least one number or symbol</p>
            </p>
            <p className="flex flex-row items-center ">
              <Dot color="green" size="40" />
              <p className="g">Both uppercase and lowercase</p>
            </p>
            <div
              style={{
                background: "#18181d",
              }}
              className="btn-submit mt-5 flex border border-slate-600  rounded-3xl  items-center flex-row p-2 rounded-3xl justify-between"
            >
              <div
                style={{
                  width: "100%",
                }}
                className="flex flex-row   items-center "
              >
                <img
                  className="h-6 w-10 object-contain"
                  src="https://res.cloudinary.com/pitz/image/upload/v1721210400/Icon_1_j9lkms.png"
                  alt=""
                />
                <input
                  type="text"
                  placeholder="Referral code"
                  className="p-1 bg border border-slate-800"
                  style={{
                    background: "#18181d",
                    width: "100%",
                    border: "none", // hide the border initially
                    outline: "none", // remove the outline on focus
                  }}
                  onFocus={(e) => {
                    e.target.style.border = "none"; // hide the border on focus
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "none"; // ensure border stays hidden on blur
                  }}
                />
              </div>
              <img
                className="h-6 w-10 object-contain"
                src="https://res.cloudinary.com/pitz/image/upload/v1721210398/Help_icon_1_wwvolq.png"
                alt=""
              />
            </div>
            {loading ? (
              <>
                <div className="flex items-center justify-center">
                  <CircularProgress />
                </div>
              </>
            ) : (
              <>
                <div className="btn-submit white mt-5 flex greenbg p-2 rounded-3xl justify-center">
                  <button type="submit" className="submit-btn">
                    {loading ? "Submitting" : "Register"}
                  </button>
                </div>
              </>
            )}

            <div className="flex flex-col items-center justify-center">
              <p className="mt-5 mb-3 flex g text-center">
                Already have an account?{" "}
                <Link to="/login" className="green">
                  Login here
                </Link>
              </p>
              <p>Or </p>
              <p className="mt-5 mb-3 flex text-center">Sign up with</p>
              <div className="social-buttons1 mb-5 gap-6 flex w-full flex-wrap items-center justify-center">
                <MDBBtn
                  className="social-btn1 w-full btn-full flex items-center justify-center ml-4"
                  size="lg"
                  style={{ backgroundColor: "#dd4b39" }}
                >
                  <img
                    className="h-15 w-10"
                    src="https://res.cloudinary.com/pitz/image/upload/v1707291175/download-removebg-preview_rfrd5r.png"
                    alt=""
                  />
                  <h1 className="text-slate-500">Google</h1>
                </MDBBtn>
                <MDBBtn
                  className="social-btn1 flex btn-full  ml-4 items-center justify-center"
                  size="lg"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <img
                    className="h-15 w-10"
                    src="https://res.cloudinary.com/pitz/image/upload/v1707291572/images-removebg-preview2_vcqc3q.png"
                    alt=""
                  />
                  <h1 className="text-slate-500">Facebook</h1>
                </MDBBtn>
                <div className="t"></div>
              </div>
            </div>
          </form>
        )}
        {type === "Institution" && (
          <form onSubmit={handleSubmit} className="form">
            <div className="name-email flex flex-col md:flex-row gap-4">
              <div className="name max-w-screen-md">
                <label htmlFor="">Institution Name*</label>
                {user.name}
                <div className="input-group">
                  <AiOutlineUser color="green" className="input-icon" />
                  <input
                    style={{
                      border: user.name
                        ? "1px solid rgba(255, 255, 255, 0.5)"
                        : "1px solid red",
                    }}
                    type="text"
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    placeholder="Institution Name"
                  />
                </div>
              </div>
              <div className="name">
                <label htmlFor="">Established date*</label>
                <div className="input-group">
                  <input
                    style={{
                      border: user.establishedDate
                        ? "1px solid rgba(255, 255, 255, 0.5)"
                        : "1px solid red",
                    }}
                    type="date"
                    onChange={(e) =>
                      setUser({ ...user, establishedDate: e.target.value })
                    }
                    placeholder="Established date"
                  />
                </div>
              </div>
            </div>
            <div className="name-email mt-3 flex flex-col md:flex-row gap-4">
              <div className="name max-w-screen-md">
                <label htmlFor="">Email*</label>
                <div className="input-group">
                  <MdOutlineMailOutline color="green" className="input-icon" />
                  <input
                    style={{
                      border: user.email
                        ? "1px solid rgba(255, 255, 255, 0.5)"
                        : "1px solid red",
                    }}
                    type="email"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="name">
                <label htmlFor="">Registration*</label>
                <div className="input-group">
                  <input
                    style={{
                      border: user.registration
                        ? "1px solid rgba(255, 255, 255, 0.5)"
                        : "1px solid red",
                    }}
                    type="text"
                    onChange={(e) =>
                      setUser({ ...user, registration: e.target.value })
                    }
                    placeholder="Country of registration"
                  />
                </div>
              </div>
            </div>
            <div className="name-email flex mt-5 flex-col md:flex-row gap-4">
              <div className="name-email flex flex-col md:flex-row gap-14">
                <div className="name max-w-screen-md">
                  <label htmlFor="">Phone number</label>
                  <div className="input-group">
                    <Call color="green" className="input-icon text-green-500" />
                    <input
                      style={{
                        border: user.email
                          ? "1px solid rgba(255, 255, 255, 0.5)"
                          : "1px solid red",
                      }}
                      type="tel"
                      onChange={(e) =>
                        setUser({ ...user, phone_number: e.target.value })
                      }
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>
              <div className="name  max-w-md">
                <label htmlFor="">Registration Type*</label>
                <div className="input-group">
                  <select
                    style={{
                      width: "26rem",
                      border: user.confirmPassword
                        ? "1px solid rgba(255, 255, 255, 0.5)"
                        : "1px solid red",
                    }}
                    className="w-full select select bg-slate-700 p-2 rounded-2xl"
                    name="registration type"
                    value={user.user_type}
                    onChange={(e) =>
                      setUser({ ...user, user_type: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Registration Type
                    </option>
                    <option value="individual">Individual</option>
                    <option value="company">Company</option>
                    <option value="agent">Agent</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="name-email mt-5 flex flex-col md:flex-row gap-4">
              <div className="name max-w-md">
                <label htmlFor="">Password*</label>
                <div className="input-group">
                  <FaLock color="green" className="input-icon" />
                  <input
                    style={{
                      border: user.password
                        ? "1px solid rgba(255, 255, 255, 0.5)"
                        : "1px solid red",
                    }}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    placeholder="Password"
                  />
                  {showPassword ? (
                    <FaRegEyeSlash
                      color="green"
                      className="input-icon1 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <BsEye
                      color="green"
                      className="input-icon1 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
              </div>
              <div className="name">
                <label htmlFor="">Confirm Password*</label>
                <div className="input-group">
                  <FaLock color="green" className="input-icon" />
                  <input
                    style={{
                      border: user.confirmPassword
                        ? "1px solid rgba(255, 255, 255, 0.5)"
                        : "1px solid red",
                    }}
                    type={showConfirmPassword ? "text" : "password"}
                    onChange={(e) =>
                      setUser({ ...user, confirmPassword: e.target.value })
                    }
                    placeholder="Confirm Password"
                  />
                  {showConfirmPassword ? (
                    <FaRegEyeSlash
                      color="green"
                      className="input-icon1 cursor-pointer"
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  ) : (
                    <BsEye
                      color="green"
                      className="input-icon1 cursor-pointer"
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  )}
                </div>
              </div>
            </div>
            <p className="flex flex-row items-center ">
              <Dot color="green" size="40" />
              <p>At least 8 characters</p>
            </p>
            <p className="flex flex-row items-center ">
              <Dot color="green" size="40" />
              <p>At least one number or symbol</p>
            </p>
            <p className="flex flex-row items-center ">
              <Dot color="green" size="40" />
              <p>Both uppercase and lowercase</p>
            </p>
            <div
              style={{
                background: "#18181d",
              }}
              className="btn-submit mt-5 flex border border-slate-600  rounded-3xl  items-center flex-row p-2 rounded-3xl justify-between"
            >
              <div
                style={{
                  width: "100%",
                }}
                className="flex flex-row   items-center "
              >
                <img
                  className="h-6 w-10 object-contain"
                  src="https://res.cloudinary.com/pitz/image/upload/v1721210400/Icon_1_j9lkms.png"
                  alt=""
                />
                <input
                  type="text"
                  placeholder="Referral code"
                  className="p-1 bg border border-slate-800"
                  style={{
                    background: "#18181d",
                    width: "100%",
                    border: "none", // hide the border initially
                    outline: "none", // remove the outline on focus
                  }}
                  onFocus={(e) => {
                    e.target.style.border = "none"; // hide the border on focus
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "none"; // ensure border stays hidden on blur
                  }}
                />
              </div>
              <img
                className="h-6 w-10 object-contain"
                src="https://res.cloudinary.com/pitz/image/upload/v1721210398/Help_icon_1_wwvolq.png"
                alt=""
              />
            </div>
            <div className="btn-submit white mt-5 flex greenbg p-2 rounded-3xl justify-center">
              <button type="submit" className="submit-btn">
                {loading ? "submitting" : "Register"}
              </button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="mt-5 mb-3 flex text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  Login here
                </Link>
              </p>
              <p>Or </p>
              <p className="mt-5 mb-3 flex text-center">Sign up with</p>
              <div className="social-buttons1 mb-5 gap-6 flex w-full flex-wrap">
                <MDBBtn
                  className="social-btn1 w-full btn-full flex items-center justify-center ml-4"
                  size="lg"
                  style={{ backgroundColor: "#dd4b39" }}
                >
                  <img
                    className="h-15 w-10"
                    src="https://res.cloudinary.com/pitz/image/upload/v1707291175/download-removebg-preview_rfrd5r.png"
                    alt=""
                  />
                  <h1 className="text-slate-500">Google</h1>
                </MDBBtn>
                <MDBBtn
                  className="social-btn1 flex btn-full  ml-4 items-center justify-center"
                  size="lg"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <img
                    className="h-15 w-10"
                    src="https://res.cloudinary.com/pitz/image/upload/v1707291572/images-removebg-preview2_vcqc3q.png"
                    alt=""
                  />
                  <h1 className="text-slate-500">Facebook</h1>
                </MDBBtn>
                <div className="t"></div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
