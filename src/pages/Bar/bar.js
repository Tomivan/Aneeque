import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March','April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      backgroundColor: 'rgba(75,192,192,1)',
      borderRadius: '50px',
      borderWidth: 1,
      data: [4000, 7000, 6000, 2000, 6000, 5000, 4000, 5000, 4000, 5000, 4000, 6000]
    }
  ]
}

export default class BarChart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          height={70}
        />
      </div>
    );
  }
} 