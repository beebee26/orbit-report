import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }
 
  count(): number[] {
    let countArr = [0, 0, 0, 0, 0, 0, 0];
    countArr[0] = this.satellites.length;
    let testCount = 1;
    for (let i=0; i<this.satellites.length; i++) {
      if (this.satellites[i].type === "Communication"){
        countArr[1] += 1;
      }
      if (this.satellites[i].type === "Probe"){
        countArr[2] += 1;
      }
      if (this.satellites[i].type === "Space Debris") {
        countArr[3] += 1;
      }
      if (this.satellites[i].type === "Positioning") {
        countArr[4] += 1;
      }
      if (this.satellites[i].type === "Space Station") {
        countArr[5] += 1;
      }
      if (this.satellites[i].type === "Telescope") {
        countArr[6] += 1;
      }
    }
    return countArr;
  }
  

  ngOnInit() {
  }

}
