import { Component } from '@angular/core';
import { ChartConfiguration,ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  title = 'ng2-charts-demo';
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Joined User',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(5,168,108,0.3)'
      },
      {
        data: [ 23, 44, 63, 19, 22, 53, 45 ],
        label: 'Left Users',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      },
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  constructor() {
  }

}
