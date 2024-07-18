/* eslint-disable react/jsx-key */
import Buttons from "./Buttons";

/* eslint-disable react/prop-types */
const Form = ({ form, icon, title, placeholderTitles,  setUsdter,handleSubmit, setBtc,  setUsdttr }) => {
  const numberOfInputs = parseInt(form, 10);

  if (isNaN(numberOfInputs) || numberOfInputs <= 0) {
    return <div>Error: Invalid form number</div>;
  }

  const inputs = Array.from({ length: numberOfInputs }, (_, index) => {
    const placeholderTitle = placeholderTitles[index] || 'Input';
    const title1 = title[index] || 'Input';
    const icon1 = icon[index] || 'Input';
    const handleChange = (e) => {
      if (index === 0) {
        setUsdter(e.target.value);
      } else if (index === 1) {
        setUsdttr(e.target.value);
      } else if (index === 2) {
        setBtc(e.target.value);
      }
    };
    
    return (
      <div key={index}> {/* Add key prop */}
        <p>Wallet address</p>
        <label htmlFor={`input-${index}`}>
  {`${title1} ${icon1}`}
</label>
<input
  id={`input-${index}`}
  onChange={handleChange}
  style={{ width: '55rem' }}
  className="flex m-2 w-full h-10 rounded-lg bg-slate-950 fac-in text-white text-center"
  key={index}
  type="text"
  placeholder={`${placeholderTitle} `}
/>
<button type="submit" onClick={handleSubmit} className="text-white">
          update
        </button>
      </div>
    );
  });
  const inputs1 = Array.from({ length: numberOfInputs }, (_, index) => {
    const placeholderTitle = placeholderTitles[index] || 'Input';
    const title1 = title[index] || 'Input';
    const icon1 = icon[index] || 'Input';

    return (
      <div className="mt-" key={index}> {/* Add key prop */}
        {/* <p>Wallet address</p> */}
        <label htmlFor="">
          {`${title1} ${icon1}`}
        </label>
        <input
          style={{ width: '55rem' }}
          className="flex  m-2 w-full fac-in h-10 rounded-lg bg-slate-950 text-white text-center"
          key={index}
          type="text"
          placeholder={`${placeholderTitle} `}
        />
       
      </div>
    );
  });
  return <div>{inputs}

    <div className=" border border-gray-500  w-full" ></div>

    <Buttons />
    <h4>Forex Wallets</h4>
    {inputs1}
  </div>;
};

export default Form;
