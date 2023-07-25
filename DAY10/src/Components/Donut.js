import React from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement,Tooltip,Legend} from 'chart.js'
Chart.register(ArcElement);
Chart.register([Tooltip])
Chart.register(Legend)
function Donut() {
    const data = {
        labels: ['Deep Sleep', 'Awake'],
        datasets: [{
          label: 'Sleep Hours',
          data: [ 80, 20],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

      const options ={
        
      };

      const textCenter ={
        id:'textCenter',
        beforeDatasetsDraw(chart,args,pluginOptions){
            const {ctx,data} = chart;
             ctx.save();
             ctx.font = 'bolder 100 px bold'
             ctx.fillStyle = 'black';
             ctx.textAlign = 'center';
             ctx.textBaseline = 'middle';
             ctx.fillText(`SleepHours = 8/10 : ${data.datasets[0].data[0]}%`,chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y);

            }
      }
    return ( 
        <div className="S-App">
            <h1 style={ {padding: '20px',textAlign:'center'}}> Sleep Hours </h1>
            <div style={ { width :'50%' ,height:'50%', margin:'auto',padding:'20px'}} />
            <Doughnut
             data= {data}
            options={options}
            plugins={[textCenter]}
            />
        </div>
     );
}

export default Donut;