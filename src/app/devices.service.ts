import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { config } from './config/default';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private devices: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) {
    this.updateDevices();
    console.log('service constructor');
  }

  updateDevices() {
    this.http.get(config.homeAutomation.url + '/devices/list').subscribe((res) => {
      this.devices.next(res['devices']);
    });
  }

  getDevices() {
    return this.devices;
  }

  getLights() {
  }
}
