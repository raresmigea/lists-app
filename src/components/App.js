import React from 'react';
import HeatMap from 'react-heatmap-grid';
import SearchBar from './SearchBar';

const xLabels = new Array(6).fill(0).map((_, i) => `${i}`);

// Display only even labels
const xLabelsVisibility = new Array(24)
  .fill(0)
  .map((_, i) => (i % 2 === 0 ? true : false));

const yLabels = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];

const data = [
  [7, 1, 2, 3, 4, 5, 6],
  [7, 1, 2, 3, 4, 5, 6],
  [0, 5, 6, 3, 4, 5, 6],
  [7, 1, 2, 3, 4, 5, 6],
  [7, 1, 2, 3, 4, 5, 6],
  [0, 3, 4, 3, 4, 5, 6],
  [0, 1, 2, 3, 4, 5, 6],
  [7, 1, 2, 3, 4, 5, 6],
  [7, 1, 2, 3, 4, 5, 6],
  [0, 1, 2, 3, 4, 5, 6],
  [0, 1, 3, 4, 4, 5, 6],
  [7, 1, 2, 3, 4, 5, 6],
  [0, 1, 2, 3, 4, 5, 6],
  [0, 1, 2, 3, 4, 5, 6],
  [7, 1, 2, 0, 1, 1, 6],
  [0, 1, 2, 3, 4, 5, 6],
  [7, 1, 2, 3, 4, 5, 6],
  [0, 3, 4, 3, 4, 5, 6],
  [0, 1, 2, 3, 4, 5, 6],
  [7, 1, 2, 3, 4, 5, 6],
  [0, 1, 2, 3, 4, 5, 6],
  [0, 1, 2, 3, 4, 5, 6],
  [7, 1, 2, 3, 4, 5, 6],
  [7, 1, 2, 3, 4, 5, 6],
];

export default function () {
  return (
    <div style={{ fontSize: '13px' }}>
      <SearchBar />
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={'bottom'}
        xLabelsVisibility={xLabelsVisibility}
        xLabelWidth={60}
        data={data}
        squares
        height={45}
        width={50}
        onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
        cellStyle={(background, value, min, max) => ({
          background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
          fontSize: '11.5px',
          color: '#444',
        })}
        cellRender={(value) => value && <div>{value}</div>}
      />
    </div>
  );
}
