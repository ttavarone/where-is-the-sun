import { Component, OnInit } from '@angular/core';
import { places } from '../places';

@Component({
  selector: 'sunny-places',
  templateUrl: './sunny-places.component.html',
  styleUrls: ['./sunny-places.component.css']
})
export class SunnyPlacesComponent implements OnInit {
  places: any;

  constructor() { }

  ngOnInit() {
    this.places = places;
  }

}