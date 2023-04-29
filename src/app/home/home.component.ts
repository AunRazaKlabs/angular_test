import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  buttons = [
    {
      text: 'Show Line Chart',
      statName: 'line',
    }, 
    {
      text: 'Show Bar Chart',
      statName: 'bar',
    },
    {
      text: 'Show Pie Chart',
      statName: 'pie'
    }
  ];
  selectedChart: string = 'line';
  constructor(private authService: AuthService, private router: Router) { }

  get username() {
    return this.authService._getName ?? '';
  }

  ngOnInit(): void {
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/');
  }

  updateSelectedChart(selectedChart: string){
    this.selectedChart = selectedChart;
  }
}
