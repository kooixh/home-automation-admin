import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  date: string;
  devicesNumber: number;
  deviceLoaded = false;
  constructor(private devicesService: DevicesService) {
      this.date = new Date().toISOString().split('T')[0];
  }

  ngOnInit() {
    this.devicesService.getDevices().subscribe((devices) => {
      if (devices) {
        this.devicesNumber = devices.length;
        this.deviceLoaded = true;
      }
    });
  }

}
