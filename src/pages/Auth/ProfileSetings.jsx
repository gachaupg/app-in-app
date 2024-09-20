/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BsQrCode } from 'react-icons/bs';
import { FaRegCopy } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Select } from '@mui/material';
import { CiLight } from 'react-icons/ci'
import { endpoint } from '../../utils/APIRoutes';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  country: "",
  date_of_birth: "",
  photo: ""
};

const Test = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialState);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  console.log('data', data);

  useEffect(() => {
    // Populate form fields with user data on component mount
    if (user) {
      setData({
        first_name: user?.user?.first_name || '',
        last_name: user?.user?.last_name || '',
        email: user?.user?.email || '',
        phone: user?.user?.phone_number || '',
        date_of_birth: user?.user?.date_of_birth || '',
        country: user?.user?.country || '',
        photo: user?.user?.photo || ''
      });
    }

    // Fetch country list
    fetch("https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code")
      .then((response) => response.json())
      .then((data) => setCountries(data.countries));
  }, [user]);
  console.log(user);

  const [profile, setprofile] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData1 = async () => {
      const token = user?.access;

      if (!token) {
        toast.error("Authentication token is missing. Please log in again.");
        navigate("/login");
        return;
      }

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      try {
        const res = await axios.put(
          `${endpoint}/api/update/profile/`,
          {}, // Send any profile data to update here, otherwise send an empty object
          { headers } // Headers go here as the third argument
        );
        setprofile(res.data); // Corrected: setProfile, not setprofile
        console.log('result');
      } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 401) {
          toast.error("Unauthorized. Please log in again.");
          navigate("/login");
        }
      }
    };

    fetchData1();

    const interval = setInterval(fetchData1, 5000);

    return () => clearInterval(interval);
  }, [user?.access, navigate]);

  console.log('profile', profile);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = user?.access;
      if (!token) {
        toast.error("Authentication token is missing. Please log in again.");
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const formData = new FormData();
      formData.append('first_name', data.first_name);
      formData.append('last_name', data.last_name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('date_of_birth', data.date_of_birth);
      formData.append('country', data.country);
      if (data.photo) {
        formData.append('photo', data.photo);
      }

      const response = await fetch(`${endpoint}/api/update/profile/`, {
        method: "PATCH",
        headers,
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Profile updated successfully!");

      } else {
        toast.error(`Update failed: ${result.error || "Unknown error"}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message || "An unknown error occurred."}`);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Text copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="flex flex-col w-full primary small">
      <div className="justify-around w-full">
        <div className="flex flex-col w-full gap-5">
          <div className="border w-full border-slate-700 secondary rounded-lg p-4 flex flex-col justify-center">
            <h2 className="text-white">Your Client Id</h2>
            <div className="flex w-full flex-row items-center justify-between gap-3">
              <div className="border border-green-600 rounded-2xl p-1 w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-1">
                  <p className="h-3 w-3 rounded-full bg-green-600"></p>
                  <p className="text-green-600">{user.user.id}</p>
                </div>
                <div className="pr-2">
                  <BsQrCode color="green" />
                </div>
              </div>
              <button onClick={() => copyToClipboard(user.user.id)} className="text-green-600 w-32 rounded-2xl p-1 flex flex-row items-center justify-between pl-2 pr-2 primary">
                Copy <FaRegCopy />
              </button>
            </div>
          </div>

          <h2 className="text-white">Basic Info</h2>
          <div className="border border-slate-700 w-full secondary rounded-lg p-4 flex flex-col justify-center">
            <div className="flex flex-row gap-2 items-center">
              <p className='g'>Pick your image profile</p>
              <input style={{
                color: 'white'
              }} onChange={(e) => setData({ ...data, photo: e.target.files[0] })} className="primary border border-green-700" type="file" />
            </div>
            <div className="gap-6 items-center gap-12 secondary rounded-lg p-4 w-full flex flex-row justify-center">
              <div className="flex w-full flex-col">
                <label className="text-white mt-1" htmlFor="first_name">First name</label>
                <input
                  onChange={(e) => setData({ ...data, first_name: e.target.value })}
                  value={data.first_name}
                  placeholder="Enter First name"
                  className="p-1 pl-2 w-full rounded-2xl border secondary text-white border-slate-500"
                  type="text"
                />
              </div>
              <div className="flex w-full flex-col">
                <label className="text-white mt-1" htmlFor="last_name">Last name</label>
                <input
                  onChange={(e) => setData({ ...data, last_name: e.target.value })}
                  value={data.last_name}
                  placeholder="Enter Last name"
                  className="p-1 pl-2 w-full rounded-2xl border secondary text-white border-slate-500"
                  type="text"
                />
              </div>
            </div>

            <div className="gap-6 items-center gap-12 secondary rounded-lg p-4 w-full flex flex-row justify-center">
              <div className="flex w-full flex-col">
                <label className="text-white mt-1" htmlFor="phone">Phone number</label>
                <input
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  value={data.phone}
                  placeholder="Enter Phone number"
                  className="p-1 pl-2 w-full rounded-2xl border secondary text-white border-slate-500"
                  type="text"
                />
              </div>
              <div className="flex w-full flex-col">
                <label className="text-white mt-1" htmlFor="email">Email</label>
                <input
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  value={data.email}
                  placeholder="Enter Email"
                  className="p-1 pl-2 w-full rounded-2xl border secondary text-white border-slate-500"
                  type="email"
                />
              </div>
            </div>

            <div className="gap-6 items-center gap-12 secondary rounded-lg p-4 w-full flex flex-row justify-center">
              <div className="flex w-full flex-col">
                <label className="text-white mt-1" htmlFor="date_of_birth">Date of birth</label>
                <input
                  onChange={(e) => setData({ ...data, date_of_birth: e.target.value })}
                  value={data.date_of_birth}
                  placeholder="Date of birth"
                  className="p-1 pl-2 w-full rounded-2xl border secondary text-white border-slate-500"
                  type="date"
                />
              </div>
              <div className="flex w-full flex-col">
                <label className="text-white mt-1" htmlFor="country">Country</label>
                <select
                  className="p-1 pl-2 w-full rounded-2xl border secondary text-white border-slate-500"
                  value={data.country}
                  onChange={(e) => setData({ ...data, country: e.target.value })}
                >
                  {countries.map((i) => (
                    <option key={i.label} value={i.label}>{i.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <button onClick={handleSubmit} className="text-green-600 w-full mt-6 text-center rounded-2xl p-1 flex flex-row items-center justify-center pl-2 pr-2 secondary border border-slate-500">
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>

        <h2 className="text-white ">Password</h2>
        <div className="  secondary  items-centerrounded-lg p-4 w-full  flex flex-col   justify-center">
          <h2 className="text-white">Password</h2>
          <div className="flex flex-row gap-12 justify-between w-full ">
            <div className="w-full flex flex-col">
              <label className="text-white mt-1" htmlFor="">
                {" "}
                Enter Password
              </label>
              <input
                placeholder="Enter Password"
                className="p-1 pl-2 w-full   rounded-2xl border secondary text-white border-slate-500"
                type="password"
              />
            </div>
            <div className="w-full flex flex-col">
              <label className="text-white mt-1" htmlFor="">
                {" "}
                Confirm Password
              </label>
              <input
                placeholder="Enter Password"
                className="p-1 pl-2 w-full   rounded-2xl border secondary text-white border-slate-500"
                type="password"
              />
            </div>
          </div>
          <button className="text-green-600 w-full mt-6 text-center secondary border-slate-700 border rounded-2xl p-1 flex flex-row items-center justify-center pl-2 pr-2 bg-slate-600">
            update
          </button>
        </div>
        <h2 className="text-white ">System Theme</h2>
        <div className="border secondary border-slate-800 rounded-lg p-4  flex flex-col   justify-center">
          <div className="flex flex-row items-center gap-2  jus justify-between">
            <button className="text-white w-full md:w-1/2 p-2 lg:w-1/3 mt-6 text-center rounded-2xl p-1 flex flex-row items-center justify-center pl-2 pr-2 bg-green-600">
              {" "}
              <CiLight /> Light
            </button>
            <button className="text-green-600 border p-2 border-green-600 w-full md:w-1/2 primary lg:w-1/3 mt-6 text-center rounded-2xl p-1 flex flex-row items-center justify-center pl-2 pr-2 bg-slate-600">
              <CiLight /> Dark
            </button>
          </div>
          <button className="text-green-600  w-full mt-6 text-center rounded-2xl p-1 flex flex-row items-center justify-center pl-2 pr-2 primary">
            Update
          </button>
        </div>
      </div>

      {/* <ProfileCard /> */}
    </div>

  );
};

export default Test;
