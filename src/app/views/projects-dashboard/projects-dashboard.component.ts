import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.css']
})
export class ProjectsDashboardComponent implements OnInit {

  colorWhite = false;

  bgColor: boolean = true;
  bgColorTwo: boolean = true;
  bgColorThree: boolean = true;
  bgColorFourth: boolean = true;
  bgColorFifth: boolean = true;
  bgColorSixth: boolean = true;
  bgColorSeventh: boolean = true;

  empresas = [
    {name: 'Primax', descripcion: 'Pagos simples', img: 'assets/img/project/project01.png', alt: 'Primax', tipo: 'automotriz', ruta: '/proyectos/primax', background: 'bgColor'},
    {name: 'Redeban', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project02.png', alt: 'Redeban', tipo: 'banca', ruta: '/proyectos/primax', background: 'bgColorTwo'},
    {name: 'Niubiz', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project03.png', alt: 'Niubiz', tipo: 'ecomerce', ruta: '/proyectos/primax', background: 'bgColorThree'},
    {name: 'Ripley', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project04.png', alt: 'Ripley', tipo: 'ecomerce', ruta: '/proyectos/primax', background: 'bgColorFourth'},
    {name: 'Notifai', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project01.png', alt: 'Notifai', tipo: 'ecomerce', ruta: '/proyectos/primax', background: 'bgColorFifth'},
    {name: 'Caja Metropolitana', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project02.png', alt: 'Caja Metropolitana', tipo: 'banca', ruta: '/proyectos/primax', background: 'bgColorSixth'}
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
  }

}
