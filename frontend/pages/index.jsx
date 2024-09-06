import { useEffect, useState } from 'react';
import BarChart from '../components/BarChart';
import CandlestickChart from '../components/CandlestickChart';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import fetchData from '../pages/api/fetchData';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [data, setData] = useState({
    candlestick: null,
    lineChart: null,
    barChart: null,
    pieChart: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const candlestickData = await fetchData('http://127.0.0.1:8000/api/candlestick-data/');
        const lineChartData = await fetchData('http://127.0.0.1:8000/api/line-chart-data/');
        const barChartData = await fetchData('http://127.0.0.1:8000/api/bar-chart-data/');
        const pieChartData = await fetchData('http://127.0.0.1:8000/api/pie-chart-data/');

        setData({
          candlestick: candlestickData.data,
          lineChart: lineChartData.data,
          barChart: barChartData.data,
          pieChart: pieChartData.data,
        });
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.charts}>
        <div className={styles.chart}>
          <h2>Candlestick Chart</h2>
          {data.candlestick && <CandlestickChart data={data.candlestick} />}
        </div>
        <div className={styles.chart}>
          <h2>Line Chart</h2>
          {data.lineChart && <LineChart data={data.lineChart} />}
        </div>
        <div className={styles.chart}>
          <h2>Bar Chart</h2>
          {data.barChart && <BarChart data={data.barChart} />}
        </div>
        <div className={styles.chart}>
          <h2>Pie Chart</h2>
          {data.pieChart && <PieChart data={data.pieChart} />}
        </div>
      </div>
    </div>
  );
}
