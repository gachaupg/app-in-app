import React from 'react'
// import NowPaymentsApi from '@nowpaymentsio/nowpayments-api-js'

//const npApi = new NowPaymentsApi({ apiKey: 'XNB85T6-ED1M61Y-HFQTPEW-R54SQ48' }) // your api key

const App = () => {
    const [currenciesArr, setCurrenciesArr] = React.useState([])
    const [result, setResults] = React.useState([])
    React.useEffect(() => {
    async function fetchCurrencies() {
      const { currencies } = await npApi.getCurrencies()
      setCurrenciesArr(currencies)
    }
    fetchCurrencies()
  }, [])
  React.useEffect(() => {
  const authenticateUser = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "email": "gachaupg607@gmail.com",
        "password": "petergachaumwangi"
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const response = await fetch("https://api.nowpayments.io/v1/auth", requestOptions);
      const result = await response.json();
      setResults(result)
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  authenticateUser();
}, []);
  return (
    <div>
      <h2>Available currencies</h2>
      <br />
      {currenciesArr.map((currency) => (
        <p>{currency}</p>
      ))}
              {result}

    </div>
  )
}

export default App