import { Component, OnInit, Inject, ViewChild, ElementRef, VERSION, QueryList, AfterViewInit, ViewChildren } from '@angular/core';
import { Router } from "@angular/router";
import { ViewportScroller } from "@angular/common";
import { Draggable } from 'gsap/Draggable';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

import * as AOS from 'aos';

// import { Question } from './models/Question';
// import { questionsList } from './helpers/questionsList';

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
  // @ViewChildren('box') box!: QueryList<ElementRef>;
  @ViewChild('arrow', { static: true }) arrow!: ElementRef<HTMLDivElement>;
  @ViewChild('slideContent', {static: true}) slideContent!: ElementRef<HTMLDivElement>;

  @ViewChild('textoDinamico', {static: true}) textoDinamico!: ElementRef<HTMLDivElement>;

  probar!: boolean;


// document.getElementById("animate").onclick = function () {
//   tl.restart();
// };

  // @ViewChild('wrapper', {static: true}) wrapper!: ElementRef<HTMLDivElement>;
  // @ViewChildren('itemC') itemC!: QueryList<ElementRef>;
  // @ViewChild("scrollbar", { static: true }) scrollbar!: ElementRef;
  // @ViewChild("scrollbarContainer", { static: true })
  // scrollbarContainer!: ElementRef;
  // @ViewChild("wrapper", { static: true }) wrapper!: ElementRef;

  // maxScroll!: number;
  // containerLength!: number;
  // draggable2!: Draggable;
  // trigger!: any;
  // galleryAnim!: GSAPTween;

  // const loop = horizontalLoop(this.itemC, {paused: true, draggable: true});

  // boxes.forEach((box, i) => box.addEventListener("click", () => loop.toIndex(i, {duration: 0.8, ease: "power1.inOut"})));

  // onSelect(itemC: HTMLDivElement) {
  //     this.itemC.nativeElement.childNodes.forEach((node: HTMLDivElement) => {
  //       if (node.classList && node.classList.contains('selected')) {
  //         node.classList.remove('selected');
  //       }
  //     });
  //     itemC.classList.add('selected');
  //   }

  ngOnInit(): void {

    AOS.init()

    // this.galleryAnim = gsap.to(this.wrapper.nativeElement, {
    //   paused: true,
    //   ease: "expo.inOut",
    //   x: -300 + "px"
    // });


    // this.trigger = ScrollTrigger.create({
    //   onRefresh: () => this.onResize(),
    //   onUpdate: () => this.updateScrollbar()
    // });

    // this.draggable = new Draggable(this.scrollbar.nativeElement, {
    //   type: "x",
    //   bounds: this.scrollbarContainer.nativeElement,
    //   onDrag: () => {
    //     /*         gsap.to(".gallery", { x: -this.draggable.x });
    //      */ this.trigger.scroll(
    //       (this.draggable.x / this.containerLength) * this.maxScroll
    //     );
    //     this.updateGallery();
    //     // when dragging, scroll the page to the corresponding ratio
    //   }
    // });

    // this.onResize();
  }

  // updateGallery() {
  //   this.galleryAnim.progress(this.draggable.x / this.draggable.maxX);
  // }

  // updateScrollbar() {
  //   gsap.set(this.scrollbar.nativeElement, {
  //     x: (this.containerLength * this.trigger.scroll()) / this.maxScroll
  //   });
  //   gsap.timeline({ repeat: 1 })
  //   this.draggable.update();
  //   this.updateGallery();
  // }

  // onResize() {
  //   if (!this.trigger) return;

  //   this.updateScrollbar();

  //   this.maxScroll = ScrollTrigger.maxScroll(window as any);
  //   this.containerLength =
  //     this.scrollbarContainer.nativeElement.offsetWidth -
  //     this.scrollbar.nativeElement.offsetWidth;
  //   this.updateScrollbar();
  // }

  baseTimeline = gsap.timeline({ paused: true });

  animation = gsap
    .timeline({ repeat: -1, paused: true })
    .add(this.baseTimeline.tweenFromTo(1, 2, { immediateRender: true }));

  slides: any;
  // container: any;
  // slider: any;
  scrubber: any;
  handle: any;

  slideCount: any;

  boxWidth: any;
  // sliderWidth: any;
  targetX = 0;
  lastTarget = 0;
  draggable: any;

  ratio: any;
  ratioX: any;

  // setProgess() {
  //   var x = gsap.getProperty("#slider", "x");

  //   this.targetX = Math.round((x as number) / this.boxWidth);
  //   this.targetX =
  //     this.targetX < -1 * (this.slideCount - 1) ? -1 * (this.slideCount - 1) : this.targetX;

  //   gsap.set(this.scrubber, { x: -this.ratioX * this.ratio });
  //   this.lastTarget = this.targetX;

  // }



  // prevElement() {
  //   if (this.targetX < 0) {
  //     this.targetX++;

  //     gsap.to(this.slider, {
  //       duration: 1,
  //       x: this.boxWidth * this.targetX,
  //       // onUpdate: this.setProgess
  //     });
  //   }
  // }

  // nextElement() {
  //   if (this.targetX > -1 * (this.slideCount - 1)) {
  //     this.targetX--;

  //     gsap.to(this.slider, {
  //       duration: 1,
  //       x: this.boxWidth * this.targetX,
  //       // onUpdate: this.setProgess
  //     });
  //   }

    // gsap.to(
    //   this.title.nativeElement,
    //   {
    //    "--width": 800,
    //    xPercent: 30 * direction
    //   },
    //  )

    // gsap.fromTo(
    //   this.title.nativeElement,
    //   {
    //    "--width": 800,
    //    xPercent: -30 * direction
    //   },
    //   {
    //    "--width": 200,
    //    xPercent: 0
    //   },

    //  )
  // }

  // updateSlides() {
  //   //this.slider = document.querySelector('#slider');
  //   gsap.set(this.slider, { x: -this.ratioX / this.ratio });
  // }

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

  // scrollFn(anchor: string): void{
  //   this._vps.scrollToAnchor(anchor)
  // }

  hoverArrow() {
    gsap.to(this.arrow.nativeElement, {rotation: -15, duration: 1});
  }

  hoverArrowOut() {
    gsap.to(this.arrow.nativeElement, {rotation: 0, duration: 1});
  }

  // hoverArrow() {
  //   this.arrow.map((arrowItem: ElementRef<HTMLDivElement>) => {
  //   gsap.to(arrowItem.nativeElement, {rotation: -27, duration: 1});
  //   })
  // }

  // hoverArrowOut() {
  //   this.arrow.map((arrowItem: ElementRef<HTMLDivElement>) => {
  //     gsap.to(arrowItem.nativeElement, {rotation: 0, duration: 1});
  //     })
  // }
  // public direction: any;



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

    // gsap.registerPlugin(ScrollTrigger);
    // horizontalLoop(this.container, {paused: true, draggable: true});

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

    // this.slides = this.document.querySelectorAll('.sliderItem');
    // this.container = this.document.querySelector('#container');
    // this.slider = this.document.querySelector('#slider');
    // this.scrubber = this.document.querySelector('#scrubber');
    // this.handle = this.document.querySelector('#handle');

    // this.slideCount = this.document.getElementsByClassName('sliderItem').length;

    // this.boxWidth = this.container.offsetWidth;
    // this.sliderWidth = this.boxWidth * this.slideCount;

    // console.log("slides");
    // console.log(this.slider);

    // for(var i = 0; i < this.slides.length; i++){
    //   this.slides[i].style.width = this.boxWidth + "px";
    // }

    // this.slider.style.width = this.sliderWidth;

    // Draggable.create(this.container, {
    //   type: "x",
    //   edgeResistance: 0.6,
    //   bounds: { minX: 0, maxX: 5 },
    //   throwProps: true,
    //   trigger: this.container.nativeElement,
      // onDrag: this.setProgess,
      // onThrowUpdate: this.setProgess,

      // trigger: this.containerElement.nativeElement,
      // throwProps: true,
      // onDrag: function () {
      //   self.updateProgress(this);
      // },
      // onThrowUpdate: function () {
      //   self.updateProgress(this);
      // },
      // snap: {
      //   x: function (x) {
      //     console.log(x);
      //     return x;
      //   },
      // },
      // onThrowComplete() {
      //   console.log('onThrowComplete');
      // },
    // });

  //  let loop= horizontalLoop(this.itemC, {paused: true, draggable: true});

  //   this.itemC.forEach((box, i) => {
  //     box.addEventListener("click", () => loop.toIndex(i, {duration: 0.8, ease: "power1.inOut"})));
  //   }


  }


}

  // this.initScrollBar();

    // this.box.map((boxItem: ElementRef<HTMLDivElement>) => {
    //   gsap.to(boxItem.nativeElement, {y: 50, duration: 1, delay: 1});
    //   gsap.to(boxItem.nativeElement, {x: -100, duration: 1});
    // })

// gsap.to(this.box.nativeElement, {y: 50, duration: 1, delay: 1});      //wait 1 second
// gsap.utils.toArray(this.box.nativeElement, {
//   y: 50, duration: 1, delay: 1, x: 100

// });

    // gsap.to(this.itemsTex.nativeElement, {
    //   scrollTrigger: {
    //     trigger: this.itemsTex.nativeElement
    //   },
    //   duration: 1,
    //   x: 150,
    //   scale: 0.9
    // })
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
