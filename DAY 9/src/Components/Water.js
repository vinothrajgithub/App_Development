import React from "react";
import { PolarArea,Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    ChartOptions
    } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    TimeScale,
    Title,
    Tooltip,
    Legend
   );

function Water() {
    const data = {
        labels: [
          'Red',
          'Green',
          'Yellow',
          'Grey',
          'Blue'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ]
        }]
      };
    return ( 
        <div>
            <PolarArea data=
            {data}
            />
        </div>
     );
}

export default Water;