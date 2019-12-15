import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DevicesService } from './devices.service';
import { config } from './config/default';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlugsService {

  private plugs: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient, private devicesService: DevicesService) {
    this.devicesService.getDevices().subscribe((devices) => {
      if (devices) {
        const plugsArray = [];
        for (const device of devices) {
          if (device.type === config.plugType) {
            this.http.get(config.homeAutomation.url + '/devices/ip/' + device.host).subscribe((res) => {
              plugsArray.push(res['data']);
            });
          }
        }
        this.plugs.next(plugsArray);
      }
    });
  }

  getPlugs() {
    return this.plugs;
  }
}
