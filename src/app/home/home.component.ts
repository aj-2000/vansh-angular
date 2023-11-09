import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { CountryCardComponent } from '../country-card/country-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CountryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  countries: any = [];
  private url: string = 'https://countriesnow.space/api/v0.1/countries';
  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((response) => {
        this.countries = response.data;
        console.log(this.countries);
      });
  }
}
