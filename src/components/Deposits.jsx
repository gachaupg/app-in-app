// import React, { useEffect } from 'react';
// import snsWebSdk from '@sumsub/websdk';
// import SumsubWebSdk from '@sumsub/websdk-react'
// const Deposits = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = '8TFVJE7-56141TM-HH8NB16-HPZA50V'; // Replace with your actual token
//         const requestOptions = {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             name: 'test1',
//           }),
//           redirect: 'follow',
//         };

//         const response = await fetch("https://api.nowpayments.io/v1/sub-partner/balance", requestOptions);
//         const result = await response.text();
//         console.log(result);
//       } catch (error) {
//         console.log('error', error);
//       }
//     };

//     fetchData();
//   }, []); // The empty dependency array ensures that this effect runs once when the component mounts
// const config={
//     email:'p@gmail.com',
//     phone:'273563545'
// }
//   const launchWebSdk = (accessToken, applicantEmail, applicantPhone) => {
//     const snsWebSdkInstance = snsWebSdk
//       .init(
//         accessToken,
//         () => getNewAccessToken()
//       )
//       .withConf({
//         lang: 'en',
//         email: applicantEmail,
//         phone: applicantPhone,
//       })
//       .withOptions({ addViewportTag: false, adaptIframeHeight: false })
//       .on('idCheck.onStepCompleted', (payload) => {
//         console.log('onStepCompleted', payload);
//       })
//       .on('idCheck.onError', (error) => {
//         console.log('onError', error);
//       })
//       .onMessage((type, payload) => {
//         console.log('onMessage', type, payload);
//       })
//       .build();

//     snsWebSdkInstance.launch('#sumsub-websdk-container');
//   };

//   const getNewAccessToken = () => {
//     // You need to implement the logic for getting a new access token.
//     // This could involve making an API request to your server.
//     return Promise.resolve('prd:GvBWPLogHageBpsqpsXJYfIO.ayGeUuEu3oUcrbPYlmkFpsugVLpmkK6Z');
//   };

//   useEffect(() => {
//     // Replace 'your_applicant_email' and 'your_applicant_phone' with your actual values.
//     launchWebSdk(
//       'prd:GvBWPLogHageBpsqpsXJYfIO.ayGeUuEu3oUcrbPYlmkFpsugVLpmkK6Z',
//       'your_applicant_email', // Replace with your actual email
//       'your_applicant_phone'  // Replace with your actual phone
//     );
//   }, []); // The empty dependency array ensures that this effect runs once when the component mounts

//   return (
//     <div>
//         <SumsubWebSdk
//   accessToken='prd:GvBWPLogHageBpsqpsXJYfIO.ayGeUuEu3oUcrbPYlmkFpsugVLpmkK6Z'
// //   expirationHandler={accessTokenExpirationHandler}
//   config={config}
// //   options={options}
// //   onMessage={messageHandler}
// //   onError={errorHandler}
// />

//       {/* Render your component content here if needed */}
//       deposits
//       <div id="sumsub-websdk-container">ggggggg</div>
//     </div>
//   );
// };

// export default Deposits;
import SumsubWebSdk from '@sumsub/websdk-react'
import Currenciies from './crypto/Currenciies';
import React from 'react'
import Payments from './crypto/Payments';
import CreateAccount from './crypto/CreatUser';
import Token from './crypto/Token';

const YourComponent = () => {
const accessToken ='prd:GvBWPLogHageBpsqpsXJYfIO.ayGeUuEu3oUcrbPYlmkFpsugVLpmkK6Z' /* your access token */
const config ='p@gmail.com' // your configuration object
const options ='163663463t425' /* your options object */

const accessTokenExpirationHandler = async () => {
    try {
        // Implement logic to obtain a new access token and update it
        const newAccessToken ='' /* your logic to get a new access token */;
        SumsubWebSdk.updateAccessToken(newAccessToken);
    } catch (error) {
        console.error('Error updating access token:', error);
    }
};

  const messageHandler = (message) => {
    // Handle messages from SumsubWebSdk
    console.log('Received message:', message);
  };

  const errorHandler = (error) => {
    // Handle errors from SumsubWebSdk
    console.error('Sumsub SDK error:', error);
  };
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

        const response = await fetch("https://api.nowpayments.io/v1/min-amount?currency_from=eth&currency_to=trx&fiat_equivalent=usd&is_fixed_rate=False&is_fee_paid_by_user=False", requestOptions);
        const result = await response.text();

        console.log(result);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {/* <Currenciies/> */}
       <SumsubWebSdk
      accessToken={accessToken}
      expirationHandler={accessTokenExpirationHandler}
      config={config}
      options={options}
      onMessage={messageHandler}
      onError={errorHandler}
    />
    {/* <Payments/>
    <CreateAccount/>
    <Token/> */}
    </div>
   
  );
};

export default YourComponent;

