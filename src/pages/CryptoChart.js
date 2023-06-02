import React, { useRef, useEffect } from 'react';
// import Chart from 'chart.js';

const CryptoChart = ({ dates, prices }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCanvas = chartRef.current.getContext('2d');
    new CryptoChart(chartCanvas, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'Price (USD)',
            data: prices,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }, [dates, prices]);

  return <canvas ref={chartRef} />;
};

export default CryptoChart;
