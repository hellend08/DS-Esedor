import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as AOS from 'aos';

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.css']
})
export class ProjectsDashboardComponent implements OnInit {

  colorWhite = true;
  itemFocus!: any;

  showForm!: boolean;

  showFormEvent() {
    this.showForm = true;
  }

  closeFormEvent() {
    this.showForm = false;
  }

  listGroup = [
    {types: 'todos', name: 'Todos', state: false},
    {types: 'banca', name: 'Banca', state: false},
    {types: 'educacion', name: 'Educación', state: false},
    {types: 'salud', name: 'Salud', state: false},
    {types: 'automotriz', name: 'Automotriz', state: false},
    {types: 'ecommerce', name: 'Ecommerce', state: false},
  ]

  clickListGroup = this.listGroup;

  // @HostListener("document:click")
  // clickToggle(){
  //   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
  //     this.header_variable = true;
  //   }else {
  //     this.header_variable = false;
  //   }
  // }

  // @HostListener('click')
  // clickInside() {
  //   this.clickListGroup.map(item => item.state = true)
  //   // this.wasInside = true;
  // }
  
  // @HostListener('document:click')
  // clickout() {
  //   this.clickListGroup.map(item => item.state = true)
  //   // if (!this.wasInside) {
  //   //   this.text = "clicked outside";
  //   // }
  //   // this.wasInside = false;
  // }


  bgColor: boolean = true;
  bgColorTwo: boolean = true;
  bgColorThree: boolean = true;
  bgColorFourth: boolean = true;
  bgColorFifth: boolean = true;
  bgColorSixth: boolean = true;
  bgColorSeventh: boolean = true;

  empresas = [
    {name: 'Primax', descripcion: 'Pagos simples', img: 'assets/img/phone-right.png', alt: 'Primax', tipo: 'automotriz', ruta: '/proyectos/primax', state: true, background: 'bg-color'},
    {name: 'Redeban', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/proyects.png', alt: 'Redeban', tipo: 'banca', ruta: '/descripcion', state: true, background: 'bg-two'},
    {name: 'Niubiz', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/proyect-laptop.png', alt: 'Niubiz', tipo: 'ecommerce', ruta: '/proyectos', state: true, background: 'bg-three'},
    {name: 'Ripley', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project04.png', alt: 'Ripley', tipo: 'ecommerce', ruta: '/proyectos/ripley', state: true, background: 'bg-fourth'},
    {name: 'Notifai', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project01.png', alt: 'Notifai', tipo: 'ecommerce', ruta: '/proyectos/notifai', state: true, background: 'bg-color'},
    {name: 'Caja Metropolitana', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project02.png', alt: 'Caja Metropolitana', tipo: 'banca', ruta: '/proyectos', state: true, background: 'bg-fifth'}
  ]

  filtrado = this.empresas;

  public redirectInternas(ruta: string) {
    this.router.navigateByUrl(ruta);
  }

  filterEmpresas(value: string){
    if (value === 'todos'){
      this.filtrado = this.empresas
    }else {
      this.filtrado = this.empresas.filter(empresa => empresa.tipo === value);
      console.log(this.filtrado);
    }
  }

  header_variable=false;
  @HostListener("document:scroll")
  scrollFuntion(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable = true;
    }else {
      this.header_variable = false;
    }
  }

  constructor(private router: Router) { }

  starproject_1 = true;
  starproject_2 = false;
  starproject_3 = false;
  starproject_4 = false;

  ngOnInit(): void {
    AOS.init()
  }

}
