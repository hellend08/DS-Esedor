import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  servicesList = [
    {text: 'Descrubrimiento de Producto'},
    {text: 'Diseño de Productos'},
    {text: 'Desarrollo de software'},
    {text: 'Sistemas de Diseños'},
    {text: 'Investigación y Consultoria '},
    {text: 'Transformación cultural'}
  ]

  usList = [
    {text: 'Nuestra Cultura'},
    {text: 'Cómo lo Hacemos'},
    {text: 'Equipo'},
    {text: 'Visión Responsable'}
  ]

  listGroup = [
    {text: 'Proyectos'},
    {text: 'Blog'},
    {text: 'Contacto'},
    {text: 'Talento'},
    {text: 'Fresh Talent'}
  ]

}
