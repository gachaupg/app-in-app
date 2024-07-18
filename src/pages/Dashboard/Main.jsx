/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { RiDashboardLine, RiFilePdf2Fill, RiKey2Fill, RiSettings2Fill, RiVerifiedBadgeFill, RiNotification2Fill, RiMusicFill } from 'react-icons/ri';
import { PieChart } from '@mui/x-charts/PieChart';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Table from '../trade/p2p-centerpage/Table';
import { CiBitcoin } from 'react-icons/ci';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import Profile from '../Auth/MainProfile';
import { ArrowDown, CrossIcon, DotSquareIcon } from 'lucide-react';
import Kyc from '../Dashboard/Kyc';
import Wallet from '../Dashboard/Wallet';
import Privacy from '../Dashboard/Privacy';
import Referral from '../Dashboard/Refferal';
import { useSelector } from 'react-redux';
import ChartComponent from '../../components/Chat';
import { toast } from 'react-toastify';
import NowPaymentsApi from '@nowpaymentsio/nowpayments-api-js'
import CryptoListings from '../../components/CoinTest';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
import PieChartWithBlankCenter from '../../components/Pichart';
import TradingViewWidget from '../TradeWidget';
import YourComponent from '../../components/Deposits';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

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
const Dashboard = () => {
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

  return (
    <>
      { }

      <div className="dashboard">
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
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
        {/* <button onClick={handleCheckUser}>ggg</button>
        {modal && (
          <div className='flex flex-col items-center justify-center mt mt-48'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-white'>Withdraw</h1>
              <input onChange={(e) => setEmail(e.target.value)} className='border bg-slate-800 text-white border-gray-500 rounded-lg p-2 mt-2' type="text" placeholder='Email' />
              {/* <input onChange={(e) => setId(e.target.value)} className='border border-gray-500 rounded-lg p-2 mt-2' type="text" placeholder='Id' /> */}
        {/* <input onChange={(e) => setAmount(e.target.value)} className='border border-gray-500 rounded-lg p-2 mt-2' type="text" placeholder='Amount' />
              <select onChange={(e) => setCurrency(e.target.value)} className='border border-gray-500 rounded-lg p-2 w-full mt-2' type="text" placeholder='Currency' >
                {currenciesArr.map((currency) => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
              <button onClick={handleButtonClick} className='bg-green-500 text-white rounded-lg p-2 mt-2 w-full'>Submit</button>
            </div>
          </div>
        // )} */}
        {/* <YourComponent /> */}
        <div className="flex p-5 gap-4 dash-nav items-center justify-between w-full  h-10 border border-gray-500 rounded-lg">
          <h6 onClick={handleDash} className='flex cursor-pointer gap-1 m-2 items-center'>
            <RiDashboardLine className='text-green-500' />
            <p className='text-green-500'>Dashboard       </p>
          </h6>

          <h6 onClick={handleProfile} className='flex cursor-pointer gap-1 items-center'>
            <RiSettings2Fill className='text-green-500' />
            <p className=''>Profile settings</p>
          </h6>
          <h6 onClick={handleKyc} className='flex gap-1 cursor-pointer items-center'>
            <RiFilePdf2Fill className='text-green-500' />
            <p className=''>KYC</p>
          </h6>

          <h6 onClick={handlePrivacy} className='flex cursor-pointer gap-1 items-center'>
            <RiKey2Fill className='text-green-500' />
            <p className=''>Privacy & Security</p>
          </h6>

          <h6 onClick={handleWallet} className='flex gap-1 cursor-pointer items-center'>
            <RiFilePdf2Fill className='text-green-500' />
            <p className=''>Wallet Address</p>
          </h6>
          <h6 onClick={handleRefferal} className='flex gap-1 cursor-pointer items-center'>
            <RiFilePdf2Fill className='text-green-500' />
            <p className=''>Referral</p>
          </h6>
        </div>
        {
          referral && (
            <>
              {customers.map((customer) => (
                <div key={customer.id}>
                  {user?.result?.name === customer.name ? (
                    <Referral id={customer.id} />

                  ) : (
                    <>
                      {/* <Referral /> */}
                      {/* {customer.id} */}
                    </>
                  )}

                </div>
              ))}
              {/* <Referral /> */}

            </>
          )
        }
        {privacy && (
          <Privacy />
        )
        }
        {wallet && (
          <Wallet />
        )}
        {dash && (
          <>
            <div className="flex dash-hero p-2 mt-5 gap-7 items-center justify-between w-full items-top  h-20 border border-gray-500 rounded-lg">
              <div className='flex gap-2 flex-wrap dash-hero1 w-full items-center'>
                <img width={30} height={30} className='cover relative rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU"
                  alt="" />
                <RiDashboardLine className='text-green-500 absolute top-10' />
                <div className='flex flex-col items-center'>
                  <p className='text-white'>Hello {user?.result?.name} !</p>
                  <p className='text-green-500 flex items-center'>Verified profile <p><RiVerifiedBadgeFill color='green' /></p> </p>
                </div>
                <div className="flex gap-12 ml-10 dash-hero2">
                  <a href="https://changenow.io/buy" target="_blank" rel="noopener noreferrer">
                    <button className="bg-green-500 rounded-3xl text-white px-4 py-2 w-32 ">Buy</button>
                  </a>
                  <a href="https://changenow.io/buy" target="_blank" rel="noopener noreferrer">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-3xl w-32">Sell</button>


                  </a>
                </div>
              </div>
              <div>
                <div className="flex fill gap-4">
                  <div className="rounded-full border border-green-500 w-12 h-12 flex items-center justify-center">
                    <RiNotification2Fill className="text-white" />
                  </div>
                  <div className="rounded-full border border-green-500  w-12 h-12 flex items-center justify-center">
                    <RiMusicFill className="text-white" />
                  </div>
                </div>


              </div>
            </div>

            <div className="flex w-full items-center justify-between">

              {/* <h3 className=' flex items-center text-white font-bold'>
                Favorite Assets <span className='text-green-500 dash-icon ml-3'><IoIosArrowBack />
                </span> <span className='text-green-500 dash-icon ml-3'>
                  <IoIosArrowForward />
                </span>
              </h3>
              <h5 className=' flex items-center text-white font-bold'>
                <p>Add assets </p> <span className='text-green-500 ml-3'><FaPlus />
                </span>
              </h5> */}
              <h3>
                Overview Total
              </h3>
            </div>
            <div className="flex p-2  w-full gap-7 dash-wrap ">

              <div className="flex p-2 flex-col w-full gap-7 ">

                <div className="market-cards">
                  {/* {userB.balance?.map((bal) => {
                  return (
                    <>c */}
                  <div className='btc'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>

                      <CiBitcoin color='yellow' size={30} />
                      <h4 className='text-white  '>
                        BTC
                        <p className='text-m'>Bitcoin</p>
                      </h4>
                    </div>

                    <h5 style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
                      0
                      <p style={{ color: 'green' }}>.+466%</p>
                    </h5>
                  </div>
                  <div className='btc'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <CiBitcoin color='purple' size={30} />

                      <h4 className='text-white'>
                        ETH
                        <p className='text-m'>
                          Etherium
                        </p>
                      </h4>

                    </div>

                    <h5 style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
                      0
                      <p style={{ color: 'green' }}>.+466%</p>

                    </h5>
                  </div>
                  {/* 
                    </>
                  )
                })} */}



                  <div className='btc'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <CiBitcoin color='red' size={30} />

                      <h4 className='text-white'>
                        TRX
                        <p className='text-m'>
                          Tran
                        </p>
                      </h4>

                    </div>

                    <h5 style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
                      0                      <p style={{ color: 'green' }}>.+466%</p>

                    </h5>
                  </div>


                </div>
                <div style={{
                  width: '100%',
                }} className="flex p-2 gap-7 dash-bottom items-center justify-between  flex-wrap  border border-gray-500 rounded-lg">
                  <div className='flex flex-wrap gap-3'>
                    <h4>Transaction Overview(USD)
                      <h1 className='text-white'>
                        19735USDT = 19735USDT
                      </h1>
                    </h4>

                    <button className="bg-green-500 rounded-2xl w-16 text-white px-4 py-2  ">All</button>
                    <button onClick={() => {
                      // handleCheckUser();
                      handleOpen();
                    }}
                      className="bg-black text-white px-4 border border-green-500 py-2 rounded-3xl w-32">Deposits</button>
                    <button onClick={handleOpen1} className="bg-black text-white px-4 border border-green-500 py-2 rounded-3xl w-32">Withdrawal</button>
                  </div>
                  <div className='flex gap-4'>
                    <p className='text-grey flex gap-2 items-center'> <p>Month</p> <IoIosArrowDown /></p>
                  </div>

                </div>



                <div className='graph' style={{
                  width: '100%',

                }}>

                  {/* <ChartComponent /> */}
                </div>
                <div className='chat border' style={{
                  width: '100%',
                }}>
                  <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                      {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        area: true,
                        borderColor: 'red',
                      },
                    ]}
                    width={1000}
                    height={500}
                    backgroundColor='grey'
                    className='gr'
                  />
                </div>
                <div className='chat'>
                  <div>
                    <p className='flex'>P2P history month <ArrowDown /></p>
                  </div>
                  <table >
                    <tr>

                      <th>Asset</th>
                      <th><ArrowBackSharp /></th>
                      <th>Type</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Recept</th>
                      <th>More</th>
                    </tr>
                    <tr>
                      <td>Bitcoin</td>
                      <td> 35235723456</td>
                      <td>P2p buy</td>
                      <td>12/jun/2023</td>
                      <td>+49USD</td>
                      <td>New</td>
                      <td><CgEye /></td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>Bitcoin</td>
                      <td> 35235723456</td>
                      <td>P2p buy</td>
                      <td>12/jun/2023</td>
                      <td>+49USD</td>
                      <td>New</td>
                      <td><CgEye /></td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>Bitcoin</td>
                      <td> 35235723456</td>
                      <td>P2p buy</td>
                      <td>12/jun/2023</td>
                      <td>+49USD</td>
                      <td>New</td>
                      <td><CgEye /></td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>Bitcoin</td>
                      <td> 35235723456</td>
                      <td>P2p buy</td>
                      <td>12/jun/2023</td>
                      <td>+49USD</td>
                      <td>New</td>
                      <td><CgEye /></td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>Bitcoin</td>
                      <td> 35235723456</td>
                      <td>P2p buy</td>
                      <td>12/jun/2023</td>
                      <td>+49USD</td>
                      <td>New</td>
                      <td><CgEye /></td>
                      <td>...</td>
                    </tr>

                  </table>
                </div>
              </div>

              <div className="flex p-2 gap-7   flex-col w-90 chart  border border-gray-500 rounded-lg">
                <PieChartWithBlankCenter />

                <div className="flex items-center  justify-center">



                </div>
                <Typography id="input-item-number text-white" gutterBottom>
                  P2P Buys
                </Typography>
                <div className='border rounded-lg w-96 test-cart  p-3'>

                  <p className='flex items-center text-white justify-between'><p>00.0000USD</p> <p className='flex items-center'><p>Month</p> <IoIosArrowDown /></p></p>

                  <BorderLinearProgress className='pr' variant="determinate" value={0} />

                  <p className='flex items-center justify-between text-white'>
                    <p className='flex items-center text-white gap-2'><DotSquareIcon color='green' /> <p>Completed</p></p>
                    <p>00.000 USD</p>
                  </p>
                </div>
                <div className='border rounded-lg test-cart w-96 p-3'>

                  <p className='flex items-center text-white justify-between'><p>0000 USD</p> <p className='flex items-center'><p>Month</p> <IoIosArrowDown /></p></p>
                  <BorderLinearProgress className='pr1' variant="determinate" value={0} />

                  <p className='flex items-center justify-between text-white'>
                    <p className='flex items-center text-white gap-2'><DotSquareIcon color='green' /> <p>Pending</p></p>
                    <p>00.000 USD</p>
                  </p>
                </div>
                <div className='border rounded-lg test-cart w-96 p-3'>

                  <p className='flex items-center text-white justify-between'><p>0000 USD</p> <p className='flex items-center'><p>Month</p> <IoIosArrowDown /></p></p>
                  <BorderLinearProgress className='pr2' variant="determinate" value={0} />

                  <p className='flex items-center justify-between text-white'>
                    <p className='flex items-center text-white gap-2'><DotSquareIcon color='green' /> <p>Withdrawal</p></p>
                    <p>00.000 USD</p>
                  </p>
                </div>


              </div>
            </div>
          </>
        )}
        {profile && (

          <Profile />

        )}
        {kyc && (

          <Kyc />

        )}
      </div></>
  )
}

export default Dashboard