import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LightsService } from '../lights.service';
import { DevicesService } from '../devices.service';
import {config} from '../config/default';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})
export class LightsComponent implements OnInit {


  lights: [any] = [null];
  loaded = false;

  constructor(private http: HttpClient, private lightsService: LightsService, private devicesService: DevicesService) {
  }

  ngOnInit() {
    this.lightsService.getLights().subscribe((device) => {
      if (device) {
        this.lights = device;
        this.loaded = true;
      }
    });
  }


  offLight(light, event) {
    console.log(event);
    this.http.post(config.homeAutomation.url + '/bulb/ip/turnOff', { host: light.host }).subscribe((res) => {
      console.log(res);
      this.devicesService.updateDevices();
    });
  }

  onLight(light, event) {
    console.log(event);
    this.http.post(config.homeAutomation.url + '/bulb/ip/turnOn', { host: light.host }).subscribe((res) => {
      console.log(res);
      this.devicesService.updateDevices();
    });
  }

}
