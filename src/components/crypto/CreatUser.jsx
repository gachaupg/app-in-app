
const CreateAccount = () => {
  const handleButtonClick = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4ODA2MDczMjciLCJpYXQiOjE3MDY3ODM2NjUsImV4cCI6MTcwNjc4Mzk2NX0.ZVu5Bxbuh-Vn2Ud2cq-vXsK0gYo1PFJOOmtJANjQKIs");
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "name": "test2"
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const response = await fetch("https://api.nowpayments.io/v1/sub-partner/balance", requestOptions);
      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Check Sub-Partner Balance</button>
      {/* Add other components or UI elements as needed */}
    </div>
  );
};

export default CreateAccount;
