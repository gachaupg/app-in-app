import { useState } from "react";

const Token = () => {
  const [token, setToken] = useState('')


  const handleButtonClick = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "email": "gachaupg607@gmail.com",
        "password": "35407835Peter@"
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const response = await fetch("https://api.nowpayments.io/v1/auth", requestOptions);
      const result = await response.json();
      setToken(result.token)
      console.log(result.token);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Authenticate</button>
      {/* {token} */}
    </div>
  );
};

export default Token;
