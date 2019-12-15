import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlugsService } from '../plugs.service';
import { DevicesService } from '../devices.service';
import {config} from '../config/default';

@Component({
  selector: 'app-plugs',
  templateUrl: './plugs.component.html',
  styleUrls: ['./plugs.component.css']
})
export class PlugsComponent implements OnInit {

  plugs: [any] = [null];
  loaded = false;
  constructor(private http: HttpClient, private plugsService: PlugsService, private devicesService: DevicesService) { }

  ngOnInit() {
    this.plugsService.getPlugs().subscribe((device) => {
      if (device) {
        this.plugs = device;
        this.loaded = true;
      }
    });
  }

  offPlug(plug, event) {
    console.log(event);
    this.http.post(config.homeAutomation.url + '/plug/ip/turnOff', { host: plug.host }).subscribe((res) => {
      console.log(res);
      this.devicesService.updateDevices();
    });
  }

  onPlug(plug, event) {
    console.log(event);
    this.http.post(config.homeAutomation.url + '/plug/ip/turnOn', { host: plug.host }).subscribe((res) => {
      console.log(res);
      this.devicesService.updateDevices();
    });
  }

}
