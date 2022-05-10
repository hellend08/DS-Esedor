import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  colorWhite = true;

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

  labelGroup = [
    {label: 'Descubrimiento de producto'},
    {label: 'Diseño UX/UI'},
    {label: 'Desarrollo de software'},
    {label: 'Sistemas de diseño'},
    {label: 'Validación  Cuantitativa'},
    {label: 'Transformación Cultural'}
  ]

}
