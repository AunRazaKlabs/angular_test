import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { ShowSelectedChartComponent } from '../show-selected-chart/show-selected-chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';



@NgModule({
  declarations: [
    LineChartComponent,
    BarChartComponent,
    ShowSelectedChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [
    LineChartComponent,
    BarChartComponent,
    ShowSelectedChartComponent,
    PieChartComponent
  ]
})
export class SharedComponentModule { }
