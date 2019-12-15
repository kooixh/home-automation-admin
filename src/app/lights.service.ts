import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DevicesService } from './devices.service';
import { config } from './config/default';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LightsService {

  private lights: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private devicesService: DevicesService) {
    this.devicesService.getDevices().subscribe((devices) => {
      if (devices) {
        const lightsArray = [];
        for (const device of devices) {
          if (device.type === config.bulbType) {
            this.http.get(config.homeAutomation.url + '/devices/ip/' + device.host).subscribe((res) => {
              lightsArray.push(res['data']);
            });
          }
        }
        this.lights.next(lightsArray);
      }
    });
  }

  getLights() {
    return this.lights;
  }
}
