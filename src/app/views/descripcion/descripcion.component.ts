import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {

  colorWhite = false;

  date: number = 2021;
  industry: string = 'Banco';
  client: string = 'Redeban';
  image: string = 'assets/img/laptop-estadisticas.png';
  styles: string = 'lg:relative lg:bottom-[5rem] lg:left-[4rem] 2xl:bottom-0 2xl:left-0 2xl:w-[55%]'
  paragraphOne: string = 'During these uncertain times, many of us find ourselves in introspection mode, with new ideas and resolving to do better. We wish we could help everyone and fix everything.';
  paragraphTwo: string = 'During these uncertain times, many of us find ourselves in introspection mode, with new ideas and resolving to do better. We wish we could help everyone and fix everything.';

  serviceList: Array<String> = [
    'INTEGRATED',
    'CAMPAIGN',
    'HYPE FILM',
    'TECH FILM',
    'KEY VISUAL',
    'SOCIAL TEASERS',
  ];

  definitionsList: Array<String> = [
    'STRATEGY',
    'CONCEPT',
    'ART DIRECTION',
    'DESIGN',
  ]

  animatedTitle: Array<{aos: number, label:String}> = [
    {aos: 1000, label: 'Data Driven'},
    {aos: 1100, label: ' y producto'},
    {aos: 1200, label: ' digital'},
  ]

  firstText: string = 'Visualización de datos P2P y P2M';
  secondText: string = 'During these uncertain times, many of us find ourselves in introspection mode, with new ideas and resolving to do better. We wish we could help everyone and fix everything. ';
  // thirdText: string = '“Sesiones ludicas y divertidas que puedan romper el hielo en cada usuario que deseamos explorar en las sesiones cognitivas“';
  // fourthText: string = 'Cómo empatizar con ellos';

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
