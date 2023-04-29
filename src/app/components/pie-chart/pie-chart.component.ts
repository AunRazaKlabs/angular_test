import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  title = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ 'Joined Users', 'Left Users' ];
  public pieChartDatasets = [ {
    data: [ 800, 200 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
