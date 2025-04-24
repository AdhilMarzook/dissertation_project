'use client';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type Account = {
  name: string;
  currentBalance: number;
};

type DoughnutChartProps = {
  accounts: Account[] | Account[][];
};

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  // Flatten the array in case it's nested
  const flatAccounts = Array.isArray(accounts[0]) ? (accounts as Account[][]).flat() : (accounts as Account[]);

  const accountNames = flatAccounts.map((a) => a.name);
  const balances = flatAccounts.map((a) => a.currentBalance);

  //console.log('Doughnut chart Accounts:', flatAccounts);

  const data = {
    datasets: [
      {
        label: 'Balance',
        data: balances,
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
            '#8DD1E1',
            '#FF7F7F',
            '#B2FF59',
            '#D4A5A5',
          ]
          
      },
    ],
    labels: accountNames,
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: '60%',
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
