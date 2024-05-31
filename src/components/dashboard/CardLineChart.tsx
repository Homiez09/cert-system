"use client";

import Chart from 'chart.js/auto'
import { useEffect, useState } from 'react';

const dataDefecement = [
  { month: 2010, count: 10 },
  { month: 2011, count: 20 },
  { month: 2012, count: 15 },
  { month: 2013, count: 25 },
  { month: 2014, count: 22 },
  { month: 2015, count: 30 },
  { month: 2016, count: 28 },
];
const dataGambling = [
  { month: 2010, count: 10 },
  { month: 2011, count: 33 },
  { month: 2012, count: 13 },
  { month: 2013, count: 15 },
  { month: 2014, count: 22 },
  { month: 2015, count: 4 },
  { month: 2016, count: 5 },
];
const dataMalware = [
  { month: 2010, count: 0 },
  { month: 2011, count: 20 },
  { month: 2012, count: 25 },
  { month: 2013, count: 9 },
  { month: 2014, count: 7 },
  { month: 2015, count: 7 },
  { month: 2016, count: 8 },
];
const dataOther = [
  { month: 2010, count: 2 },
  { month: 2011, count: 31 },
  { month: 2012, count: 15 },
  { month: 2013, count: 5 },
  { month: 2014, count: 2 },
  { month: 2015, count: 0 },
  { month: 2016, count: 8 },
];

export default function CardLineChart({ select }: { select: string }) {
  const [charted, setChart] = useState<any>();

  useEffect(() => {
    if (charted) {
      charted.destroy();
    }
    const chart = new Chart(
      document.getElementById('myChart') as any,
      {
        type: 'line',
        data: {
          labels: dataDefecement.map(row => row.month),
          datasets: [
            {
              label: 'Defecement',
              data: dataDefecement.map(row => row.count),
              hidden: select !== 'All' && select !== 'Defecement',
            },
            {
              label: 'Gambling',
              data: dataGambling.map(row => row.count),
              hidden: select !== 'All' && select !== 'Gambling',
            },
            {
              label: 'Malware',
              data: dataMalware.map(row => row.count),
              hidden: select !== 'All' && select !== 'Malware',
            },
            {
              label: 'Other',
              data: dataOther.map(row => row.count),
              hidden: select !== 'All' && select !== 'Other',
            }
          ]
        }
      }
    );
    setChart(chart);
  }, [select])

  return (
    <>
      <div className="w-full text-center">กราฟแสดงการแจ้งภัยคุกคาม</div>
      {!charted &&
        <div className="flex flex-col h-[200px] w-full items-center justify-center">
          <div className="border-t-2 border-l-2 border-black rounded-full w-8 h-8 animate-spin"></div>
        </div>
      }
      <canvas id="myChart" height="200px" />
    </>
  )
}