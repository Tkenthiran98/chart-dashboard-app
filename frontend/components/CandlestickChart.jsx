import { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, TimeScale, LineElement, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import '../styles/CandlestickChart.css';  

// Register necessary controllers and elements
ChartJS.register(CategoryScale, LinearScale, TimeScale, LineElement, PointElement);

export default function CandlestickChart() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/candlestick-data/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: { unit: 'day' },
        title: { display: true, text: 'Date' },
        ticks: { autoSkip: true, maxTicksLimit: 10 }
      },
      y: {
        beginAtZero: false,
        title: { display: true, text: 'Price' },
        ticks: {
          callback: value => `$${value}`, // Format y-axis values
        }
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#333', // Legend text color
          font: { size: 14 }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `Date: ${context.label}, Price: $${context.raw}`;
          }
        }
      }
    }
  };

  const chartData = {
    datasets: [
      {
        label: 'Candlestick Chart',
        data: data.map(d => ({
          x: new Date(d.x), // Ensure x is a Date object
          y: d.close,
        })),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointRadius: 5,
      },
    ],
  };

  if (error) {
    return <div className="chart-error">Error: {error}</div>;
  }

  return (
    <div className="chart-container">
      {data.length === 0 ? <div className="chart-loading">Loading...</div> : <Line data={chartData} options={options} />}
    </div>
  );
}
