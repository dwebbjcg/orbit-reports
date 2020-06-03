import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../Satellite'

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  typeCounts(type: string): number {
    let count = 0;
      for (const satellite of this.satellites) {
        if (satellite['type'].toLowerCase() == type.toLowerCase()) {
          count += 1;
        }
      }
      return count;
  }
}
