import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.css']
})
export class ProjectsDashboardComponent implements OnInit {

  empresas = [
    {name: 'Primax', descripcion: 'Pagos simples', img: 'assets/img/project/project01.png', alt: 'Primax', tipo: 'automotriz'},
    {name: 'Redeban', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project02.png', alt: 'Redeban', tipo: 'banca'},
    {name: 'Niubiz', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project03.png', alt: 'Niubiz', tipo: 'ecomerce'},
    {name: 'Ripley', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project04.png', alt: 'Ripley', tipo: 'ecomerce'},
    {name: 'Notifai', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project01.png', alt: 'Notifai', tipo: 'ecomerce'},
    {name: 'Caja Metropolitana', descripcion: 'Transformando el Ecommerce ', img: 'assets/img/project/project02.png', alt: 'Caja Metropolitana', tipo: 'banca'}
  ]

  filtrado = this.empresas;

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

  constructor() { }

  starproject_1 = true;
  starproject_2 = false;
  starproject_3 = false;
  starproject_4 = false;

  ngOnInit(): void {
  }

}
