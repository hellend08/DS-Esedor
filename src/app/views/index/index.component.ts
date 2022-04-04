import { Component, OnInit, Inject, ViewChild, ElementRef, QueryList, AfterViewInit, ViewChildren } from '@angular/core';
import { Router } from "@angular/router";
import { ViewportScroller } from "@angular/common";
import { Draggable } from 'gsap/Draggable';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

export interface Empresas {
  name: string;
  description: string;
  image: string;
}

export interface Servicios {
  title: string;
  description: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterViewInit {

  @ViewChildren('box') box!: QueryList<ElementRef>;
  @ViewChild('itemsTex', { static: true }) itemsTex!: ElementRef<HTMLDivElement>;

  colorWhite = true;
  
  paso1 = true;
  paso2 = false;
  paso3 = false;
  formulario = false;

  dataEmpresa: Empresas[] = [
    {name: 'Niubiz(Ex VisanetPerú)', description: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', image: 'assets/img/empresa/logoniubiz.png'},
    {name: 'Primax', description: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', image: 'assets/img/empresa/primaxlogo.png'},
    {name: 'Redeban', description: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', image: 'assets/img/empresa/LogoRedeban.png'},
    {name: 'Ripley', description: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', image: 'assets/img/empresa/LogoRipley.png'},
    {name: 'Caja Cusco', description: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', image: 'assets/img/empresa/logoCajaCusco.png'},

    {name: 'Niubiz(Ex VisanetPerú)', description: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', image: 'assets/img/empresa/logoniubiz.png'},
    {name: 'Primax', description: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', image: 'assets/img/empresa/primaxlogo.png'},
    {name: 'Redeban', description: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', image: 'assets/img/empresa/LogoRedeban.png'},
    {name: 'Ripley', description: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', image: 'assets/img/empresa/LogoRipley.png'},
    {name: 'Caja Cusco', description: 'Clients worldwide entrust Locomotive with the design, development and management of their websites.', image: 'assets/img/empresa/logoCajaCusco.png'},
  ];


  dataService: Servicios[] = [
    {title: 'Consultoría estratégica & investigación', description: 'Ayudamos a definir la estrategia para transformar tu negocio y alcanzar la madurez digital.'},
    {title: 'Diseño de productos y servicios', description: 'Soluciones orientadas a mejorar la experiencia de tus clientes en canales digitales y presenciales.'},
    {title: 'Sistemas de diseño y branding', description: 'Gestiona la identidad visual de tu producto digital unificanto branding, experiencia de usuario y desarrollo en un solo lugar.'},
    {title: 'Innovación y transformación digital', description: 'Ayudamos a definir la estrategia para transformar tu negocio y alcanzar la madurez digital.'},
    {title: 'Desarrollo de software y código creativo', description: 'Implementamos tecnologías emergentes desde la agilidad para generar resultados reales.'},
  ]


  titulos = [
    {title1: 'PRIMAX', title2: 'SOLUTIONS'},
    {title1: 'RIPLEY', title2: 'PUNTOS'},
    {title1: 'REDEBAN', title2: 'COLOMBIA'},
  ];

  changeCounter = 0;
  actualprimero!: string;
  actualsegundo!: string;

  constructor(private router: Router, private _vps: ViewportScroller, @Inject(DOCUMENT) private document: Document) { }

  public redirectProject() {
    this.router.navigateByUrl('/proyectos');
  }

  scrollFn(anchor: string): void{
    this._vps.scrollToAnchor(anchor)
  }

  ngAfterViewInit(): void {
    this.actualprimero = this.titulos[0].title1;
    this.actualsegundo = this.titulos[0].title2;
    setInterval(() => {
      this.changeCounter++;
      if (this.changeCounter > this.titulos.length -1) {
        this.changeCounter = 0;
      }
      this.actualprimero = this.titulos[this.changeCounter].title1;
      this.actualsegundo = this.titulos[this.changeCounter].title2;
    }, 5000);

    // if( )

    console.log(this.box)

    this.box.map((boxItem: ElementRef<HTMLDivElement>) => {
      gsap.to(boxItem.nativeElement, {y: 50, duration: 1, delay: 1});
      gsap.to(boxItem.nativeElement, {x: -100, duration: 1});
    })

    
// gsap.to(this.box.nativeElement, {y: 50, duration: 1, delay: 1});      //wait 1 second
// gsap.utils.toArray(this.box.nativeElement, {
//   y: 50, duration: 1, delay: 1, x: 100

// }); 

gsap.to(this.itemsTex.nativeElement, {
  scrollTrigger: {
    trigger: this.itemsTex.nativeElement
  },
  duration: 1,
  x: 150,
  scale: 0.9
})
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  }

//   HideShowTransition = Barba.BaseTransition.extend({
//     start: function() {
//     this.newContainerLoading.then(this.finish.bind(this));
//     },
//     finish: function() {
//     document.body.scrollTop = 0;
//     this.done();
//     }
// });
}
