import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { alpha } from '@mui/material/styles';

export default function BasicArea() {
  return (
    <LineChart
      xAxis={[
        {
          data: [1, 2, 3, 5, 8, 10],
          tick: {
            stroke: 'white', // White color for x-axis ticks
          },
          axisLine: {
            stroke: 'white', // White color for x-axis line
          },
        },
      ]}
      yAxis={[
        {
          tick: {
            stroke: '#fff', // White color for y-axis ticks
          },
          axisLine: {
            stroke: '#fff', // White color for y-axis line
          },
        },
      ]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
          color: '#4caf50', // Greenish color for the area
        },
      ]}
      width={500}
      height={300}
      sx={{
        '.MuiLineChart-line': {
          stroke: '#4caf50', // Greenish color for the line
        },
        '.MuiLineChart-area': {
          fill: alpha('#4caf50', 0.3), // Light greenish color for the area fill
        },
      }}
    />
  );
}
