import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const ChartComponent = () => {
  return (
    <div className='table-test'>
      <TradingViewWidget
        symbol="AAPL"
        theme={Themes.DARK}
        locale="en"
        width="100%"
        height={400}
      />
    </div>
  );
};

export default ChartComponent;
