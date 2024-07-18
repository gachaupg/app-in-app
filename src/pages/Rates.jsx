/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import BlogCard from '../components/BlogCardMain';
import { MdArrowOutward } from "react-icons/md";
// import { GoArrowDownLeft } from "react-icons/go";
import { Button, Typography } from '@mui/material';
import { CiBitcoin } from "react-icons/ci";
import { GoArrowDownLeft, GoArrowRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { BsBank } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";
import Rates from './rates/App';
//import { Button } from '@mui/material';
import CryptoListings from '../components/CoinTest';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { LineChart } from '@mui/x-charts/LineChart';

import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CgEye } from 'react-icons/cg';
import { ArrowBackSharp } from '@mui/icons-material';
import PieChartWithBlankCenter from '../components/Pichart';
import TradingViewWidget from './TradeWidget';
import YourComponent from '../components/Deposits';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { CrossIcon } from 'lucide-react';
import { useSelector } from 'react-redux';
const Markets = () => {



  
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(
    Asset,
    calories,
    Type,
    Data,
    Amount,
    Status,
    Receipt,
    More
  ) {
    return { Asset, calories, Type, Data, Amount, Status, Receipt, More };
  }
  
  const rows = [
    createData('Bitcoin', 159, '12-jun-2023', "+24USD", 'NEW', <CgEye />, '...'),
    createData('Bitcoin', 159, '12-jun-2023', "+24USD", 'NEW', <CgEye />, '...'),
    createData('Bitcoin', 159, '12-jun-2023', "+24USD", 'NEW', <CgEye />, '...'),
    createData('Bitcoin', 159, '12-jun-2023', "+24USD", 'NEW', <CgEye />, '...'),
    createData('Bitcoin', 159, '12-jun-2023', "+24USD", 'NEW', <CgEye />, '...'),
    createData('Bitcoin', 159, '12-jun-2023', "+24USD", 'NEW', <CgEye />, '...'),
    createData('Bitcoin', 159, '12-jun-2023', "+24USD", 'NEW', <CgEye />, '...'),
    createData('Bitcoin', 159, '12-jun-2023', "+24USD", 'NEW', <CgEye />, '...'),
  
  ];
  
  
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.grey',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  //const npApi = new NowPaymentsApi({ apiKey: 'XNB85T6-ED1M61Y-HFQTPEW-R54SQ48' })
    const { user } = useSelector((state) => ({ ...state.auth }));
  
    // console.log(user);
    const [radius, setRadius] = React.useState(50);
    const [itemNb, setItemNb] = React.useState(5);
    const handleItemNbChange = (event) => {
      if (typeof newValue !== 'number') {
        return;
      }
      setItemNb(newValue);
    };
    const handleRadius = (event) => {
      if (typeof newValue !== 'number') {
        return;
      }
      setRadius(newValue);
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
  
    const [profile, setProfile] = React.useState(false);
    const [kyc, setKyc] = React.useState(false);
    const [dash, setDash] = React.useState(true);
    const [wallet, setWallet] = React.useState(false);
    const [privacy, setPrivacy] = React.useState(false);
    const [referral, setReferral] = React.useState(false);
  
    const handleProfile = () => {
      setProfile(true)
      setDash(false)
      setKyc(false)
      setWallet(false)
      setPrivacy(false)
      setReferral(false)
  
  
    }
    const handleDash = () => {
      setDash(true)
      setProfile(false)
      setKyc(false)
      setWallet(false)
      setPrivacy(false)
      setReferral(false)
  
  
    }
    const handleWallet = () => {
      setDash(false)
      setProfile(false)
      setKyc(false)
      setWallet(true)
      setPrivacy(false)
      setReferral(false)
  
  
    }
    const handleKyc = () => {
      setDash(false)
      setProfile(false)
      setKyc(true)
      setWallet(false)
      setPrivacy(false)
      setReferral(false)
  
    }
    const handlePrivacy = () => {
      setDash(false)
      setProfile(false)
      setKyc(false)
      setWallet(false)
      setPrivacy(true)
      setReferral(false)
    }
    const handleRefferal = () => {
      setDash(false)
      setProfile(false)
      setKyc(false)
      setWallet(false)
      setPrivacy(false)
      setReferral(true)
    }
  
    const [token, setToken] = React.useState('')
    const [modal, setModal] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [namshow1, setShow1] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [id, setId] = React.useState('')
    const [amount, setAmount] = React.useState('')
    const [currency, setCurrency] = React.useState('')
    // console.log(amount, currency, id);
  
    const [customers, setCustomers] = React.useState([]);
    const [results, setResults] = React.useState('')
    const [redirect, setRedirect] = React.useState(false)
    const [link, setLink] = React.useState('')
    const [allcurr, setAllCurr] = React.useState([])
    const [newCurrency, setNewCurrency] = React.useState([]);
    React.useEffect(() => {
      // Assuming 'allCurr' is populated with data somehow
      // Filtering only the currencies from 'allCurr' and updating 'newCurrency' state
      const currencies = allcurr?.filter(item => item.currency);
      setNewCurrency(currencies);
    }, [allcurr]);
    // console.log(newCurrency);
    React.useEffect(() => {
      const fetchCurrencies = async () => {
        try {
          const response = await fetch("https://api.nowpayments.io/v1/currencies?fixed_rate=true", {
            method: 'GET',
            headers: {
              "x-api-key": "XNB85T6-ED1M61Y-HFQTPEW-R54SQ48"
            },
            redirect: 'follow'
          });
          const result = await response.json();
          setAllCurr(result.currencies)
        } catch (error) {
          console.log('error', error);
        }
      };
  
      fetchCurrencies();
  
      // Cleanup function (optional) if needed
      return () => {
        // Any cleanup code here
      };
    }, []);
  
    // console.log('alllCyr', allcurr);
  
  
  
  
  
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const authHeaders = new Headers();
          authHeaders.append("Content-Type", "application/json");
  
          const authRaw = JSON.stringify({
            "email": "gachaupg607@gmail.com",
            "password": "35407835Peter@"
          });
  
          const authRequestOptions = {
            method: 'POST',
            headers: authHeaders,
            body: authRaw,
            redirect: 'follow'
          };
  
          const authResponse = await fetch("https://api.nowpayments.io/v1/auth", authRequestOptions);
          const authResult = await authResponse.json();
          console.log('auth,auth', authResult.token);
          const subPartnerHeaders = new Headers();
          subPartnerHeaders.append("Authorization", `Bearer ${authResult.token}`);
          subPartnerHeaders.append("Content-Type", "application/json");
          const token = authResult.token // Replace with your actual token
          const myHeaders = new Headers();
          myHeaders.append("Authorization", `Bearer ${token}`);
  
          const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
          };
  
          const response = await fetch("https://api.nowpayments.io/v1/sub-partner", requestOptions);
          const result = await response.json();
          setCustomers(result.result);
  
          // console.log(result);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, []);
    const [userB, setUserB] = React.useState()
    // console.log('custo', userB[0].id);
  
    const filterCustomersByName = () => {
      const filteredCustomers = customers.filter(customer => customer.name === user?.result?.name); // Use userName instead of user?.result?.name
      setUserB(filteredCustomers);
      return filteredCustomers;
    };
  
    React.useEffect(() => {
      filterCustomersByName(); // You need to pass a userName parameter to the function
    }, [userB]);
  
    const [result2, setResult2] = React.useState(null);
    // console.log('balance', result2);
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const myHeaders = new Headers();
          myHeaders.append("x-api-key", "XNB85T6-ED1M61Y-HFQTPEW-R54SQ48");
  
          const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
  
          const response = await fetch(`https://api.nowpayments.io/v1/sub-partner/balance/${userB[0].id}`, requestOptions);
          const data = await response.json();
          setResult2(data);
        } catch (error) {
          console.log('error', error);
        }
      };
  
      fetchData();
    }, []);
    const handleButtonClick = async () => {
      try {
        const authHeaders = new Headers();
        authHeaders.append("Content-Type", "application/json");
  
        const authRaw = JSON.stringify({
          "email": "gachaupg607@gmail.com",
          "password": "35407835Peter@"
        });
  
        const authRequestOptions = {
          method: 'POST',
          headers: authHeaders,
          body: authRaw,
          redirect: 'follow'
        };
  
        const authResponse = await fetch("https://api.nowpayments.io/v1/auth", authRequestOptions);
        const authResult = await authResponse.json();
        // console.log('auth,auth', authResult.token);
        const subPartnerHeaders = new Headers();
        subPartnerHeaders.append("Authorization", `Bearer ${authResult.token}`);
        subPartnerHeaders.append("Content-Type", "application/json");
  
        const subPartnerRaw = JSON.stringify({
          "name": user?.result?.name
        });
  
        const subPartnerRequestOptions = {
          method: 'POST',
          headers: subPartnerHeaders,
          body: subPartnerRaw,
          redirect: 'follow'
        };
  
        const subPartnerResponse = await fetch("https://api.nowpayments.io/v1/sub-partner/balance", subPartnerRequestOptions);
        const subPartnerResult = await subPartnerResponse.json();
        // console.log('subpartner', userB);
        // console.log(modal);
        // if (subPartnerResult?.id ||subPartnerResult?.status==='false') {
        // setModal(true)
        setId(subPartnerResult.id)
        // console.log('id', id);
        const myHeaders = new Headers();
        myHeaders.append("x-api-key", "XNB85T6-ED1M61Y-HFQTPEW-R54SQ48");
        myHeaders.append("Content-Type", "application/json");
  
        const raw = JSON.stringify({
          "amount": amount,
          "currency": 'btc',
          "sub_partner_id": userB[0].id,
          "ipn_callback_url": `https://nowpayments.io/payment/${results}`,
        });
  
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
  
        const response = await fetch("https://api.nowpayments.io/v1/sub-partner/payment", requestOptions);
        const result = await response.json();
        setResults(`?iid=${result.result.invoice_id}&paymentId=${result.result.payment_id}`)
        // console.log(result);
        // console.log('results', results);
        setLink(`https://nowpayments.io/payment/${results}`)
  
      }
      catch (error) {
        console.log('error', error);
      }
    };
    const [withdrawal, setWithdrawal] = React.useState([]);
  
    const makeApiRequest = async () => {
      const authHeaders = new Headers();
      authHeaders.append("Content-Type", "application/json");
  
      const authRaw = JSON.stringify({
        "email": "gachaupg607@gmail.com",
        "password": "35407835Peter@"
      });
  
      const authRequestOptions = {
        method: 'POST',
        headers: authHeaders,
        body: authRaw,
        redirect: 'follow'
      };
  
      const authResponse = await fetch("https://api.nowpayments.io/v1/auth", authRequestOptions);
      const authResult = await authResponse.json();
      // console.log('auth,auth', authResult.token);
      const subPartnerHeaders = new Headers();
      subPartnerHeaders.append("Authorization", `Bearer ${authResult.token}`);
      subPartnerHeaders.append("Content-Type", "application/json");
      const token = authResult.token // Replace with your actual token
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("x-api-key", "XNB85T6-ED1M61Y-HFQTPEW-R54SQ48");
      myHeaders.append("Content-Type", "application/json");
      try {
        var raw = JSON.stringify({
          "price_amount": 3999.5,
          "price_currency": "usd",
          "pay_currency": "btc",
          "ipn_callback_url": "https://nowpayments.io",
          "order_id": "RGDBP-21314",
          "order_description": "Apple Macbook Pro 2019 x 1"
        });
  
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        }
        const response = await fetch("https://api.nowpayments.io/v1/payment", requestOptions);
        const result = await response.json();
  
        // console.log(result);
        setWithdrawal(result);
  
        if (result.payment_status === 'waiting') {
          toast.success('Withdrawal of funds is under review');
        } else {
          toast.error(result.message);
        }
  
        console.log('withdrawal', withdrawal);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    // React.useEffect(() => {
    //   makeApiRequest();
    // }, []);
  
  
    React.useEffect(() => {
      if (link) {
        toast.success(`Payment link generated ${link}`);
        window.open(`https://nowpayments.io/payment/${results}`, '_blank');
        const timeoutId = setTimeout(() => {
          setLink(null);
        }, 10000);
        return () => clearTimeout(timeoutId);
      }
    }, [results, link, setLink]);
  
  
    const [currenciesArr, setCurrenciesArr] = React.useState([])
    // const [result, setResults] = React.useState([])
    // console.log('currencies', currenciesArr);
  
    // React.useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const myHeaders = new Headers();
    //       myHeaders.append("x-api-key", "XNB85T6-ED1M61Y-HFQTPEW-R54SQ48");
  
    //       const requestOptions = {
    //         method: 'GET',
    //         headers: myHeaders,
    //         redirect: 'follow'
    //       };
  
    //       const response = await fetch("https://api.nowpayments.io/v1/full-currencies", requestOptions);
    //       const result = await response.json();
    //       setCurrenciesArr(result)
    //       console.log(result);
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
  
  
    // React.useEffect(() => {
    //   async function fetchCurrencies() {
    //     const { currencies } = await npApi.getCurrencies()
    //     setCurrenciesArr(currencies)
    //   }
    //   fetchCurrencies()
    // }, [])
  
    // const modalClose = () => {
    //   setModal(!modal)
    // }
  
    const handleModal = () => {
      setModal(!modal)
    }





  const [value, setValue] = useState("news");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const depositStyles = {
    width: '220px',
    height: '48px',
    padding: '8px 36px',
    borderRadius: '24px',
    border: '1px solid green',

    color: 'white',
    gap: '10px',
    // marginLeft: '10px'
  };
  const withdarwStyles = {
    width: '220px',
    height: '48px',
    padding: '8px 36px',
    borderRadius: '24px',
    border: '1px solid #1D8751',
    color: 'white',
    background: '#E23D3A',
    gap: '10px',
    marginLeft: '10px'
  };

  return (
    <div className='flex items-center bg-slate-950 mark'>


<Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className='bg-slate-100' >
            <Typography id="modal-modal-title" variant="h6" className='flex items-center justify-between p-2' component="h2">
              <h1 className='text-black'>Deposit</h1>
              <CrossIcon onClick={handleClose} />
            </Typography>
            <input onChange={(e) => setAmount(e.target.value)} className='border border-gray-500 rounded-lg p-2 mt-2 w-full' type="number" placeholder='Amount' />

            <select onChange={(e) => setCurrency(e.target.value)} className='border border-gray-500 rounded-lg text-black p-2 w-full mt-2' type="text" placeholder='Currency' >
              <option value="asset">Asset</option>
              {allcurr.map((currency) => (
                <option className='text-black' key={currency.currency} value={currency.currency}>{currency.currency}</option>
              ))}
            </select>
            <button onClick={handleButtonClick} className='bg-green-500 text-white rounded-lg p-2 mt-2 w-full'>Deposit</button>
            <button onClick={handleClose} className='bg-slate-500 text-white border border-green-500 rounded-lg p-2 mt-2 w-full'>Cancel</button>

          </Box>
        </Modal>
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className=' bg-slate-100'
            sx={style}>
            <Typography id="modal-modal-title" variant="h6" className='flex items-center justify-between p-2' component="h2">
              <h1 className='text-black'>Withdrawal</h1>
              <CrossIcon onClick={handleClose1} />
            </Typography>
            <select onChange={(e) => setCurrency(e.target.value)} className='border border-gray-500 rounded-lg text-black p-2 w-full mt-2' type="text" placeholder='Currency' >
              <option value="asset">Asset</option>
              {allcurr.map((currency) => (
                <option className='text-black' key={currency.currency} value={currency.currency}>{currency.currency}</option>
              ))}
            </select>
            <select onChange={(e) => setCurrency(e.target.value)} className='border border-gray-500 rounded-lg p-2 w-full mt-2' type="text" placeholder='Currency' >
              <option value="asset">Network</option>
              <option value='TRC20'>TRC20</option>
              <option value='TRC20'>TRC20</option>
              <option value='TRC20'>TRC20</option>
            </select>
            <input onChange={(e) => setAmount(e.target.value)} className='border border-gray-500 rounded-lg p-2 mt-2 w-full' type="number" placeholder='Amount' />

            <button onClick={makeApiRequest} className='bg-green-500 text-white rounded-lg p-2 mt-2 w-full'>Withdrawal</button>
            <button onClick={handleClose1} className='bg-slate-500 text-white border border-green-500 rounded-lg p-2 mt-2 w-full'>Cancel</button>

          </Box>
        </Modal>


      <div className="main-market">


        <div className='market'>
          <div className='flex flex-wra'>
          <div >
          <h2 className='text-white text-2xl font-semibold mt-1 mb-3'>Our Exchange Rates Calculator</h2>
            <p className='text-lg text-gray-300 my-5'>An exchange rate is a relative price of one currency expressed in terms of another currency (or group of currencies). For economies like Australia that actively engage in international trade, the exchange rate is an important economic variable.</p>
           
          </div>
                
          </div>

          <div className=' flex my-4 w-full flex-wrap gap-32 items-center justify-between'>
               
               <Button onClick={handleOpen} variant="outlined" startIcon={<MdArrowOutward style={{ color: '#1D8751' }} />} style={depositStyles} className=''>
                 Deposit
               </Button>
        

          
               <Button onClick={handleOpen1} variant="contained" startIcon={<GoArrowDownLeft style={{ color: 'white', marginLeft: '2rem' }} />} style={withdarwStyles}>
                 Withdraw
               </Button>

           
       </div>

          <div className='flex items-center justify-between flex-wrap' >

            <div className=' flex items-center justify-between w-full t4 gap-2'>

              <div >
                <p className='text-white'>Asset</p>

                <div className='btc'>
                  <div className='flex'>
                    <CiBitcoin color='yellow' size={30} />
                    <h4 className='text-white'>Bitcoin</h4>
                  </div>
                  <h5 style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
                    <IoMdArrowDropdownCircle />
                  </h5>
                </div>
              </div>

              <div  >
                <p className='text-white'>I want to receive</p>

                <div className='btc'>
                  <div className='flex justify-center'>
                    <h4 className='text-white'>
                      <span style={{ color: 'green' }}>$</span> 100
                    </h4>
                  </div>
                  <h5 style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
                    <p style={{ display: 'flex' }}><p>usd</p><IoMdArrowDropdownCircle /></p>
                  </h5>
                </div>

                <h5 style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
                  {/* <IoMdArrowDropdownCircle /> */}


                </h5>
              </div>

            </div>

            <div className='flex w-full items-center justify-between bg-ed-500 flex-wrap t4  gap-2'>

              <div>
                <p className='text-white'>Method</p>

                <div className='btc'>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <BsBank color='green' size={30} />
                    <h4 className='text-white'>Bank Transfer</h4>
                  </div>
                  <h5 style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
                    <IoMdArrowDropdownCircle />
                  </h5>
                </div>
              </div>

             
              <div className='btc w-full flex-wrap'>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <CiBitcoin color='green' size={30} />
                  <h4 className='text-white'>Salam bank</h4>
                </div>
                <h5 style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
                  <IoMdArrowDropdownCircle />
                </h5>
               </div>
             </div>

          </div>
          
        </div>

        <div className="mt-5 flex w-full items-center justify-center gap-32 flex-wrap">
        <div className="total-btn mr-3">
            <button className='p-6 h-10 rounded-lg'>
              Amount including total fees <span style={{
                backgroundColor: 'green',
                padding: '0.3rem',
                color: 'white',
                marginLeft: '1rem',
                marginBottom: '1rem',
                height: '2rem',
                width: '22rem',
                borderRadius: '1.5rem'

              }}>$00</span>
            </button>
          </div>
          <button>
            <span style={{
              backgroundColor: 'rgb(91, 97, 95)',
              borderRadius: '1rem',
              padding: '0.3rem',
              color: 'grey',
              // margin: '1rem',
              height: '1.5rem',
              width: '13rem',
              marginBottom: '2rem'

            }}>.Commissions 396</span><span style={{ color: 'green' }}>$0</span>
            <span style={{
              backgroundColor: 'rgb(91, 97, 95)',
              borderRadius: '1rem',
              padding: '0.3rem',
              color: 'grey',
              // margin: '1rem',
              height: '1.5rem',
              width: '13rem',
              marginBottom: '2rem',
              marginLeft: '2rem'

            }}>.Network Fee</span><span style={{ color: 'green' }}>$3</span>
            <span style={{
              backgroundColor: 'rgb(91, 97, 95)',
              borderRadius: '1rem',
              padding: '0.3rem',
              color: 'grey',
              // margin: '1rem',
              height: '1.5rem',
              width: '13rem',
              marginBottom: '2rem',
              marginLeft: '2rem'

            }}>.Total Fees</span><span style={{ color: 'green' }}>$3</span>
          </button>
        </div>
        <p className='flex items-center text-yellow-50'><RiErrorWarningFill color='yellow' />  <p>Transactions are subject to commission, above is the information on the commission rates</p></p>
        <div className="exchange w-48 p-2">

          <button className='w-24 p-2'><a href="https://changenow.io/exchange?from=btc&to=eth">
            Exchange now</a>
          </button>


        </div>
        <div className="image-market m-6 chat">
          <CryptoListings/>
        </div>

      </div>
   
    </div>
  )
}

export default Markets