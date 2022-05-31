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
    {text: 'Descrubrimiento de Producto', route: ''},
    {text: 'Diseño de Productos', route: ''},
    {text: 'Desarrollo de software', route: ''},
    {text: 'Sistemas de Diseños', route: ''},
    {text: 'Investigación y Consultoria ', route: ''},
    {text: 'Transformación cultural', route: ''}
  ]

  usList = [
    {text: 'Nuestra Cultura', route: ''},
    {text: 'Cómo lo Hacemos', route: ''},
    {text: 'Equipo', route: ''},
    {text: 'Visión Responsable', route: ''}
  ]

  listGroup = [
    {text: 'Proyectos', route: '/proyectos'},
    {text: 'Blog', route: '/'},
    {text: 'Contacto', route: '/contacto'},
    {text: 'Talento', route: '/talento'},
    {text: 'Fresh Talent', route: '/'}
  ]

}
