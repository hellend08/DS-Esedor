import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  colorWhite = true;

  featureGroup = [
    {title: 'Superar las expectativas de los clientes y colegas', text: 'Nunca te conformes con lo “suficientemente bueno” cuando sabes que puedes y debes hacerlo mejor.'},
    {title: 'Reconocer la excelencia y el compromiso.', text: 'Conocemos el valor del respeto bien ganado y la retroalimentación constructiva.'},
    {title: 'Tomar la iniciativa y cuestionar el statu quo de manera constructiva', text: 'Confíe en su intuición y su conocimiento, incluso si necesita cuestionar al líder de su equipo o al director ejecutivo.'},
    {title: 'Sea valiente, curioso y experimente: aprenda de todos los éxitos y fracasos', text: 'Asumir riesgos y cometer errores: así es como aprendemos y cómo innovamos.'},
    {title: 'Actuar de una manera que nos enorgullezca a todos.', text: 'Estamos todos juntos en esto y todo lo que dices y haces, ya sea interna o públicamente, se refleja en nosotros.'},
    {title: 'Construir una cultura inclusiva y socialmente responsable', text: 'La cultura no surge por casualidad: debemos ser proactivos y trabajar en ella todos los días.'}
  ]

  steps = [
    {step: '01', title: 'Kick off', text: 'Independientemente de si necesita elaborar una idea para un producto completamente nuevo o evaluar la calidad de uno ya existente, estamos aquí para ayudarlo.', state: false},
    {step: '02', title: 'Ideación y Evaluación', text: 'Dale a tu idea de producto una forma real. Planifique y evalúe las características esenciales de su producto para lograr sus objetivos comerciales y eliminar posibles errores.', state: false},
    {step: '03', title: 'Proceso de diseño', text: 'Cree experiencias de usuario encantadoras para sus productos digitales. Resuelva problemas reales y mejore sus métricas comerciales vitales a través de hermosas interfaces.', state: false},
    {step: '04', title: 'Proceso de desarrollo', text: 'Cree aplicaciones bonitas, rápidas y seguras adaptadas con precisión a sus objetivos empresariales.', state: false}
  ]

  principles = [
    {image: 'assets/img/education.png', title: 'OBJETIVO 4: EDUCACIÓN DE CALIDAD', text: 'La educación es la base para mejorar nuestra vida y el desarrollo sostenible.'},
    {image: 'assets/img/work.png', title: 'OBJETIVO 8: TRABAJO DECENTE Y CRECIMIENTO ECONÓMICO', text: 'Debemos reflexionar sobre este progreso lento y desigual, y revisar nuestras políticas económicas y sociales destinadas a erradicar la pobreza.'},
    {image: 'assets/img/industry.png', title: 'OBJETIVO 9: INDUSTRIA, INNOVACIÓN E INFRAESTRUCTURAS', text: 'Las inversiones en infraestructura son fundamentales para lograr un desarrollo sostenible.'},
    {image: 'assets/img/reduction.png', title: 'OBJETIVO 10: REDUCCIÓN DE LAS DESIGUALDADES', text: 'Reducir las desigualdades y garantizar que nadie se queda atrás forma parte integral de la consecución de los Objetivos de Desarrollo Sostenible.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
