import React from "react";
import {Pie} from "react-chartjs-2";
import {Chart, ArcElement,Tooltip,Legend} from 'chart.js'
Chart.register(ArcElement);
Chart.register([Tooltip])
Chart.register(Legend)

function PieChart() {
    const data = {
        labels: ['Protiens', 'Carbs', 'Fats',],
        datasets: [{
          label: 'Metrics',
          data: [60,30,10],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
    return ( 
        <div >
            <Pie data={data}/>
        </div>
     );
}
export default PieChart;