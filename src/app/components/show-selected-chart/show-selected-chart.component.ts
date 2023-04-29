import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-selected-chart',
  templateUrl: './show-selected-chart.component.html',
  styleUrls: ['./show-selected-chart.component.css']
})
export class ShowSelectedChartComponent {
  @Input() selectedChart: string = '';
  constructor() {
  }

}
