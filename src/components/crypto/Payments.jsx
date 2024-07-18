import React, { useState } from 'react';

const Payments = () => {
  const [results, setResults] = useState('')
  const handleButtonClick = async () => {
    try {
      if(amount){
        const myHeaders = new Headers();
        myHeaders.append("x-api-key", "XNB85T6-ED1M61Y-HFQTPEW-R54SQ48");
        myHeaders.append("Content-Type", "application/json");
  
        const raw = JSON.stringify({
          "amount": amount,
          "currency": currency,
          "sub_partner_id": "1779680075",
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
        console.log(result);
        console.log('results', results);
        setLink(`https://nowpayments.io/payment/${results}`)
       }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Make Payment</button>
      {/* Add other components or UI elements as needed */}
    </div>
  );
};

export default Payments;
