import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NgChartsModule } from 'ng2-charts';
import { SharedComponentModule } from './components/shared-component/shared-component.module';
import { ShowSelectedChartComponent } from './components/show-selected-chart/show-selected-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    SharedComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
