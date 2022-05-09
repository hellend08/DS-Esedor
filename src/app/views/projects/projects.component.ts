import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  paso1 = true;
  paso2 = false;
  paso3 = false;
  formulario = false;

  bgHover!: boolean;
  bgHoverTwo!: boolean;

  colorWhite = false;

  date: number = 2021;
  industry: string = 'ENERGÍA';
  client: string = 'Primax';
  styles: string = 'w-[40%]'
  display: string = 'hidden'
  image: string = 'assets/img/iphone.png';
  paragraphOne: string = 'Involucrar a todos sus partners dentro de esta tienda virtual y crear una plataforma de venta de productos y servicios de marketing';
  paragraphTwo: string = 'Definir la nueva generación de productos digitales y crear su primera tienda virtual b2b de productos y servicios de marketing que ofrece primax';

  serviceList: Array<String> = [
    'RESEARCH & ESTRATEGÍA',
    'DEFINICIÓN DE PRODUCTO',
    'DESIGN SYSTEM',
  ];

  definitionsList: Array<String> = [
    'STRATEGY',
    'CONCEPT',
    'ART DIRECTION',
    'DESIGN',
    'PRODUCTION',
  ]

  animatedTitle: Array<{aos: number, label: String}> = [
    {aos: 1000, label: 'Nueva'},
    {aos: 1000, label: 'experiencia'},
    {aos: 1000, label: 'ecommerce'},
    {aos: 1000, label: 'B2B'},
  ]

  firstText: string = 'Investigación y arquitectura de información';
  secondText: string = ' La busqueda del insight de ux al entender a nuestros usuarios empatizando con ellos y creando escenario y contextos donde puedan validar features, dentro de sesiones cognitivas de nuestros productos.';
  // thirdText: string = '“Sesiones ludicas y divertidas que puedan romper el hielo en cada usuario que deseamos explorar en las sesiones cognitivas“';
  // fourthText: string = 'Cómo empatizar con ellos';
  displayContent: any = 'hidden';
  imageSection: any = 'assets/img/videollamada.png';
  

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }



}
