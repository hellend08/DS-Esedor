import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css']
})
export class TalentComponent implements OnInit {

  colorWhite = true;
  btnStyle!: boolean;

  talentGroup = [
    {text: 'Front-end Developer', state: false},
    {text: 'Delivery Manager', state: false},
    {text: 'UI Designer Senior', state: false},
    {text: 'UX Designer Senior', state: false},
    {text: 'Ejecutivo Comercial', state: false},
    {text: 'Android Developer Senior', state: false},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
