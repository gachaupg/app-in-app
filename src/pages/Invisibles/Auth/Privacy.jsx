/* eslint-disable no-unused-vars */
import axios from "axios";
import { Check, Cross } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import io from 'socket.io-client';
import Bowser from 'bowser';

const socket = io(); // Connect to the WebSocket server

const Privacy = () => {
  const [signedInDevices, setSignedInDevices] = useState([]);
  const [error, setError] = useState(null);

  const [ip, setIp] = useState('');
  const [browserDetails, setBrowserDetails] = useState({
    name: '',
    version: '',
    os: '',
    platform: '',
  });
  const [screenResolution, setScreenResolution] = useState('');
  const [language, setLanguage] = useState('');
  const [referrer, setReferrer] = useState('');

  useEffect(() => {
    // Get IP Address
    axios.get('https://api.ipify.org?format=json')
      .then(response => {
        setIp(response.data.ip);
      })
      .catch(error => {
        console.error('Error fetching IP:', error);
      });

    // Get Browser and Device Details
    const browser = Bowser.getParser(window.navigator.userAgent);
    const browserInfo = browser.getBrowser();
    const osInfo = browser.getOS();
    const platformInfo = browser.getPlatform();

    setBrowserDetails({
      name: browserInfo.name,
      version: browserInfo.version,
      os: osInfo.name,
      platform: platformInfo.type,
    });

    // Get Screen Resolution
    setScreenResolution(`${window.screen.width} x ${window.screen.height}`);

    // Get Language
    setLanguage(navigator.language || navigator.userLanguage);

    // Get Referrer
    setReferrer(document.referrer);
  }, []);

  return (
    <div style={{
      width:'100%'
    }} className="flex w-full privacy small wrap items-center flex-col">
      <p className="g">Privacy & Security</p>
      <div className="flex w-full flex-col border gap-3 border-slate-700 rounded-lg p-2">
        <p className="white">2 Factor Authentication</p>
        <div className="flex small wrap flex-row items-center w-full gap-10">
          <button className="greenbg flex w-full p-2 items-center justify-center gap-1 white p-1 rounded-lg">
            <p className="border border-slate-50 rounded-full p-1">
              <Check size={15} />
            </p>{" "}
            Yes
          </button>
          <button className="border border-green-700 flex w-full p-2 items-center justify-center gap-1 white p-1 rounded-lg">
            <p className="border border-slate-50 rounded-full p-1">
              <FaTimes size={15} />
            </p>{" "}
            No
          </button>
        </div>
        <button className="border border-green-700 flex w-full p-2 items-center justify-center gap-1 white p-1 rounded-3xl">
          Update
        </button>
        <button className="border border-green-700 flex w-full p-2 items-center justify-center gap-1 white p-1 rounded-3xl">
          Sign out from all devices
        </button>
        <div>
          <p className="white">Active Browser Sessions:</p>
          <div>
          <div className="g">
      <h1>Your IP Address is: {ip}</h1>
      <h1>Your Browser is: {browserDetails.name}</h1>
      <h1>Your Browser Version is: {browserDetails.version}</h1>
      <h1>Your Operating System is: {browserDetails.os}</h1>
      <h1>Your Device Type is: {browserDetails.platform}</h1>
      <h1>Your Screen Resolution is: {screenResolution}</h1>
      <h1>Your Language is: {language}</h1>
      <h1>Your Referrer URL is: {referrer || "No Referrer"}</h1>
    </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
