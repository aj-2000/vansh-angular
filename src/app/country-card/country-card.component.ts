import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css'],
})
export class CountryCardComponent implements OnInit {
  @Input() country: string = ''; // default value provided

  constructor() {}

  ngOnInit(): void {
    // ngOnInit implementation
  }
}
