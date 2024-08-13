/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { CheckBox } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { CiLock } from "react-icons/ci";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../redux/features/authSlice";

const initialState = {
  password: "",
  email: "",
};

export default function SignInSide() {
  const [verified, setVerified] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    let tempErrors = {};
    tempErrors.email = user.email ? "" : "Email is required";
    tempErrors.password = user.password ? "" : "Password is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate() && verified) {
      try {
        setLoading(true);
        await dispatch(login({ user, navigate, toast }));
      } catch (error) {
        toast.error("Error");
      } finally {
        setLoading(false);
      }
    } else if (!verified) {
      toast.error("Please complete the CAPTCHA");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="main-login g ">
      <div className="log test" style={{ height: "80vh" }}>
        <div className="flex flex-row items-center  justify-evenly ">
          <div className="mt-10 image-none">
            <img
              style={{
                height: "33rem",
                objectFit: "fill",
              }}
              src="https://res.cloudinary.com/pitz/image/upload/v1723127986/Frame_34357_uyqvfq.png"
              alt=""
            />
            <p className="g">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
          <div
            className=" "
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1 className="text-xl white ">Welcome</h1>
            <h1 className="text-xm mt-1 g">Please login</h1>
            <form
              className="flex flex-col w-full g-4 pt-4"
              noValidate
              onSubmit={handleSubmit}
              style={{ marginTop: "1rem" }}
            >
              <div className="flex border mb-5 border-slate-700  pl-2 rounded-3xl items-center h-12 flex-row  gap-1 w-full secondary small">
                <MdOutlineMailOutline
                  size={28}
                  className="text-green-600"
                  color="green"
                />
                <input
                  className={` small w-full no-border border-slate-700 rounded-tr-3xl rounded-br-3xl  secondary  h-11 ${
                    errors.email && "border-red-500"
                  }`}
                  required
                  placeholder="Email"
                  id="email"
                  name="email"
                  autoComplete=""
                  onChange={handleInputChange}
                />
              </div>
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <div className="flex pr-2 border mb-5 border-slate-700  pl-2 border-slate-200 rounded-3xl items-center h-12 flex-row  gap-1 w-full secondary small">
                <CiLock size={28} className="text-green-600" color="green" />
                <input
                  className={`border border-slate-700 no-border secondary w-full h-11 ${
                    errors.password && "border-red-500"
                  }`}
                  required
                  placeholder="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleInputChange}
                  id="password"
                  autoComplete="current-password"
                />
                <div onClick={toggleShowPassword} style={{ cursor: "pointer" }}>
                  {showPassword ? (
                    <FaEyeSlash color="green" size={28} />
                  ) : (
                    <FaRegEye color="green" size={28} />
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
              <div className="flex mb-2 items-center justify-between flex-wrap mt-3 gap-10">
                <label className="flex gap-2 g">
                  <CheckBox className="green"/>
                  Remember me
                </label>

                <div>
                  <Link className="green" to="/reset-password">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
              />
              {loading ? (
                <div className="flex items-center mt-2 justify-center">
                  <CircularProgress className="green" />
                </div>
              ) : (
                <button
                  type="submit"
                  className="login-btn green"
                  style={{
                    marginTop: "1rem",
                    borderBlockColor: "red",
                    marginBottom: "1rem",
                    width: "100%",
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    padding: "0.75rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  Login
                </button>
              )}
              <Link
                className="w-full text-center g login-text mb-3"
                to="/register"
              >
                <p className="text-center">
                  Don't have an account? <span className="green">Sign Up</span> 
                </p>
              </Link>
            </form>
            <hr />
            <p className="login-text mt-10 g mb-3">OR sign up with</p>
            <div className="social-buttons1 mb-5 gap-6 flex w-full flex-wrap">
              <MDBBtn
                className="social-btn1 w-full p-6 btn-full flex items-center justify-center ml-4"
                size="lg"
                style={{ backgroundColor: "#dd4b39" }}
              >
                <img
                  className="h-8 w-12"
                  src="https://res.cloudinary.com/pitz/image/upload/v1707291175/download-removebg-preview_rfrd5r.png"
                  alt=""
                />
                <h1 className="text-slate-500">Google</h1>
              </MDBBtn>
              <MDBBtn
                className="social-btn1 p-6 flex btn-full ml-4 items-center justify-center"
                size="lg"
                style={{ backgroundColor: "#3b5998" }}
              >
                <img
                  className="h-8 w-10"
                  src="https://res.cloudinary.com/pitz/image/upload/v1707291572/images-removebg-preview2_vcqc3q.png"
                  alt=""
                />
                <h1 className="text-slate-500">Facebook</h1>
              </MDBBtn>
              <div className="t"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
