import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";
import { ViewportScroller } from "@angular/common";
import { Draggable } from 'gsap/Draggable';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

import * as AOS from 'aos';

gsap.registerPlugin(ScrollTrigger, Draggable);

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
export class IndexComponent implements AfterViewInit, OnInit {

  @ViewChild('itemsTex', { static: true }) itemsTex!: ElementRef<HTMLDivElement>;
  @ViewChild('title', { static: true }) title!: ElementRef<HTMLDivElement>;
  @ViewChild('slideContent', {static: true}) slideContent!: ElementRef<HTMLDivElement>;

  @ViewChild('textoDinamico', {static: true}) textoDinamico!: ElementRef<HTMLDivElement>;

  probar!: boolean;

  bgBlog!: boolean;
  bgBlogTwo!: boolean;
  bgBlogThree!: boolean;

  arrowRotate!: boolean;

  servicesItems = [
    {title: 'Descubrimiento de producto', text: 'Planifique y evalúe las características esenciales de su producto para lograr sus objetivos comerciales y eliminar posibles errores.', state: false, length: '2xl:w-auto'},
    {title: 'Diseño de Productos', text: 'Crea experiencias de usuario para sus productos digitales. Resuelva problemas reales y mejore sus métricas comerciales a través de interfaces estéticas.', state: false, length: '2xl:w-[75%]'},
    {title: 'Desarrollo de software', text: 'Implemente interfaces de usuario hermosas y receptivas que sean altamente interactivas y brinden a los usuarios una experiencia similar a la nativa.', state: false, length: '2xl:w-[75%]'},
    {title: 'Sistemas de diseño', text: 'Una única fuente validada que guía las decisiones de diseño, para una experiencia de usuario superior y una mayor eficiencia en la creación.', state: false, length: 'xl:w-[72%]'},
    {title: 'Investigación y consultoría digital', text: 'Tome las decisiones correctas y realice investigación en sus usuarios. Entiende su comportamiento y decodifica sus intereses.', state: false, length: '2xl:w-auto'},
    {title: 'Transformación Cultural', text: 'Adaptamos tu negocio al mundo digital desde una estrategia centrada en la experiencia de usuario que optimice el crecimiento de su negocio', state: false, length: '2xl:w-[75%]'},
  ]

  ngOnInit(): void {
    AOS.init()
  }

  baseTimeline = gsap.timeline({ paused: true });

  animation = gsap
    .timeline({ repeat: -1, paused: true })
    .add(this.baseTimeline.tweenFromTo(1, 2, { immediateRender: true }));

  slides: any;
  scrubber: any;
  handle: any;

  slideCount: any;

  boxWidth: any;
  targetX = 0;
  lastTarget = 0;
  draggable: any;

  ratio: any;
  ratioX: any;

  colorWhite = true;

  paso1 = true;
  paso2 = false;
  paso3 = false;
  formulario = false;
  quote_variable=false;

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

  scrollFuntion(){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 2000){
      this.quote_variable = true;
    }else {
      this.quote_variable = false;
    }
  }

  ngAfterViewInit(): void {

    var tl = gsap.timeline({});

    tl.from(".quote",1.5,{duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01})

    var tl = gsap.timeline({});

    tl.from(".hidentext", 1.5, {y:"100%", ease:Power4.easeOut},0.15)

    gsap.registerPlugin(Draggable);
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
    gsap.from(this.slideContent.nativeElement.childNodes, {
      delay: 0.6,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15,
    });
  }

}