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

  detailsGroup = [
    {title: 'Comportamiento de usuarios', text: 'Extrae información detallada sobre las necesidades de sus clientes.', img: 'assets/img/users.png'},
    {title: 'Sprint de diseño de producto', text: 'Un taller de cinco días para responder preguntas comerciales cruciales, planificar las características esenciales de su producto y reducir el riesgo de lanzar un producto al mercado.', img: 'assets/img/products.png'},
    {title: 'Creación rápida de prototipos', text: 'Extrae información detallada sobre las necesidades de sus clientes.', img: 'assets/img/prototypes.png'},
    {title: 'Sesión de alcance', text: 'Sesión de alcance', img: 'assets/img/scope.png'},
    {title: 'Diseño visual', text: 'Extrae información detallada sobre las necesidades de sus clientes.', img: 'assets/img/design.png'},
    {title: 'Arquitectura de informacion', text: 'Extrae información detallada sobre las necesidades de sus clientes.', img: 'assets/img/architecture.png'},
    {title: 'Usabilidad', text: 'Extrae información detallada sobre las necesidades de sus clientes.', img: 'assets/img/usability.png'},
    {title: 'Accesibilidad', text: 'Extrae información detallada sobre las necesidades de sus clientes.', img: 'assets/img/accessibility.png'}
  ]

  paragraphGroup = [
    {text: 'Delivery Manager', secondText: 'Deje que nuestros expertos supervisen su proyecto.'},
    {text: 'Aumento de personal', secondText: 'Perfiles especializados, para trabajar de manera permanente en su empresa'},
    {text: 'Equipos Ágiles', secondText: 'Haz que tus proyectos se ejecuten bajo un manifiesto ágil, simple y rápido.'},
    {text: 'De principio a fin', secondText: 'Lideramos su proyecto hasta culminar todos los hitos de progreso asignados.'},
  ]

}
