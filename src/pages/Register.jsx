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
    first_name: "",
    last_name: "",
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

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    setUser((prevUser) => ({
      ...prevUser,
      refferal_code: "5353535",
    }));
  }, []);

  const handleType = (e) => {
    const newType = type === "Individual" ? "Institution" : "Individual";
    setType(newType);
    setUser({ ...user, user_type: newType });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateForm = () => {
    const errors = {};
    if (!user.first_name) errors.first_name = "First name is required";
    if (!user.last_name) errors.last_name = "Last name is required";
    if (!user.email) errors.email = "Email is required";
    if (!user.password) errors.password = "Password is required";
    if (user.password !== user.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!isLengthValid) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (!hasNumberOrSymbol) {
      errors.password = "Password must contain a number or symbol";
    }
    if (!hasUpperCase) {
      errors.password = "Password must contain an uppercase letter";
    }
    if (!hasLowerCase) {
      errors.password = "Password must contain a lowercase letter";
    }
    return errors;
  };

  const isLengthValid = user.password.length >= 8;
  const hasNumberOrSymbol = /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(user.password);
  const hasUpperCase = /[A-Z]/.test(user.password);
  const hasLowerCase = /[a-z]/.test(user.password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
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
    <div className="primary flex p-4 justify-around w-full small wrap">
      <div className="image-none">
        <img
          className="mt-5"
          style={{ height: "27rem", objectFit: "fill", marginBottom: "5rem" }}
          src="https://res.cloudinary.com/pitz/image/upload/v1723127986/Frame_34357_uyqvfq.png"
          alt=""
        />
      </div>
      <div className="p-4 g">
        <p>Please Register with correct information</p>
        <h6>Account Type*</h6>
        <div className="account-type mb-10">
          <button
            onClick={handleType}
            style={{ background: type === "Individual" ? "#1D8751" : "#1f1f27" }}
            className="type-btn"
          >
            <BsFillPeopleFill color="white" />
            <span style={{ marginLeft: "3px", color: type === "Individual" ? "white" : "" }}>
              Individual
            </span>
          </button>
          <button
            onClick={handleType}
            style={{ background: type === "Institution" ? "#1D8751" : "#1f1f27" }}
            className="type-btn1"
          >
            <BiSolidInstitution color="white" />
            <span style={{ marginLeft: "5px", color: "white" }}>
              Institution
            </span>
          </button>
        </div>
        {type === "Individual" && (
          <form className="g" onSubmit={handleSubmit}>
            <div className="name-email flex flex-col md:flex-row gap-4">
              <div className="name max-w-screen-md">
                <label htmlFor="">First Name*</label>
                <div style={{ border: formErrors.first_name ? "1px solid red" : "1px solid rgba(255, 255, 255, 0.5)" }}
                  className="input-group names">
                  <AiOutlineUser color="green" className="input-icon" />
                  <input
                    className="no-border  h-full bgi "
                    style={{
                      width: '95%'
                    }}
                    type="text"
                    value={user.first_name}
                    onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                    placeholder="Full Name"
                  />
                </div>
                {formErrors.first_name && <p className="error-text text-red-600">{formErrors.first_name}</p>}
              </div>

              <div className="name max-w-screen-md">
                <label htmlFor="">Last Name*</label>
                <div style={{ border: formErrors.last_name ? "1px solid red" : "1px solid rgba(255, 255, 255, 0.5)" }}
                  className="input-group names">
                  <AiOutlineUser color="green" className="input-icon" />
                  <input
                    className="no-border  h-full bgi "
                    style={{
                      width: '95%'
                    }}
                    type="text"
                    value={user.last_name}
                    onChange={(e) => setUser({ ...user, last_name: e.target.value })}
                    placeholder="Last Name"
                  />
                </div>
                {formErrors.last_name && <p className="error-text text-red-600">{formErrors.last_name}</p>}
              </div>
            </div>

            <div className="name-email flex mt-5 flex-col md:flex-row gap-4">
              <div className="name max-w-screen-md">
                <label htmlFor="">Email*</label>
                <div className="input-group names" style={{ border: formErrors.email ? "1px solid red" : "1px solid rgba(255, 255, 255, 0.5)" }}
                >
                  <MdOutlineMailOutline color="green" className="input-icon" />
                  <input
                    className="no-border  h-full bgi "
                    style={{
                      width: '95%'
                    }}
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Email"
                  />
                </div>
                {formErrors.email && <p className="error-text text-red-600">{formErrors.email}</p>}
              </div>

              <div className="name max-w-screen-md">
                <label htmlFor="">Phone number</label>
                <div style={{ border: user.phone_number ? "1px solid rgba(255, 255, 255, 0.5)" : "1px solid red" }}
                  className="input-group names">
                  <Call color="green" className="input-icon text-green-500" />
                  <input
                    className="no-border  h-full bgi "
                    style={{
                      width: '95%'
                    }}
                    type="tel"
                    inputMode="numeric"
                    value={user.phone_number}
                    onChange={(e) => setUser({ ...user, phone_number: e.target.value })}
                    placeholder="Phone number"
                  />
                </div>
              </div>
            </div>

            <div className="name-email mt-5 flex flex-col md:flex-row gap-4">
              <div className="name max-w-md">
                <label htmlFor="">Password*</label>
                <div style={{ border: formErrors.password ? "1px solid red" : "1px solid rgba(255, 255, 255, 0.5)" }}
                  className="input-group names">
                  <FaLock color="green" className="input-icon" />
                  <input
                    className="no-border  h-full bgi "
                    style={{
                      width: '95%'
                    }}
                    type={showPassword ? "text" : "password"}
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <BsEye /> : <FaRegEyeSlash />}
                  </button>
                </div>
                {formErrors.password && <p className="error-text text-red-600">{formErrors.password}</p>}
              </div>

              <div className="name max-w-md">
                <label htmlFor="">Confirm Password*</label>
                <div style={{ border: formErrors.confirmPassword ? "1px solid red" : "1px solid rgba(255, 255, 255, 0.5)" }} className="input-group names ">
                  <FaLock color="green" className="input-icon" />
                  <input
                    className="no-border  h-full bgi "
                    style={{
                      width: '95%'
                    }}
                    type={showConfirmPassword ? "text" : "password"}
                    value={user.confirmPassword}
                    onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                    placeholder="Confirm Password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <BsEye /> : <FaRegEyeSlash />}
                  </button>
                </div>
                {formErrors.confirmPassword && <p className="error-text text-red-600">{formErrors.confirmPassword}</p>}
              </div>
            </div>


            <p className={`flex flex-row items-center`}>
              <Dot color={isLengthValid ? 'green' : 'red'} size="40" />
              <p className={isLengthValid ? 'text-green-500' : 'text-red-500'}>At least 8 characters</p>
            </p>
            <p className={`flex flex-row items-center`}>
              <Dot color={hasNumberOrSymbol ? 'green' : 'red'} size="40" />
              <p className={hasNumberOrSymbol ? 'text-green-500' : 'text-red-500'}>At least one number or symbol</p>
            </p>
            <p className={`flex flex-row items-center`}>
              <Dot color={hasUpperCase && hasLowerCase ? 'green' : 'red'} size="40" />
              <p className={hasUpperCase && hasLowerCase ? 'text-green-500' : 'text-red-500'}>Both uppercase and lowercase</p>
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
                {loading ? <CircularProgress size={24} /> : "Register"}
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
                    onChange={(e) => setUser({ ...user, first_name: e.target.value })}
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
            <p className={`flex flex-row items-center`}>
              <Dot color={isLengthValid ? 'green' : 'red'} size="40" />
              <p className={isLengthValid ? 'text-green-500' : 'text-red-500'}>At least 8 characters</p>
            </p>
            <p className={`flex flex-row items-center`}>
              <Dot color={hasNumberOrSymbol ? 'green' : 'red'} size="40" />
              <p className={hasNumberOrSymbol ? 'text-green-500' : 'text-red-500'}>At least one number or symbol</p>
            </p>
            <p className={`flex flex-row items-center`}>
              <Dot color={hasUpperCase && hasLowerCase ? 'green' : 'red'} size="40" />
              <p className={hasUpperCase && hasLowerCase ? 'text-green-500' : 'text-red-500'}>Both uppercase and lowercase</p>
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
