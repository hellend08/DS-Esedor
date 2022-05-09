import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifai',
  templateUrl: './notifai.component.html',
  styleUrls: ['./notifai.component.css']
})
export class NotifaiComponent implements OnInit {

  colorWhite = false;

  date: number = 2021;
  industry: string = 'ENERGÍA';
  client: string = 'Notifai';
  styles: string = 'w-[100%] '
  display: string = 'hidden'
  image: string = 'assets/img/laptop-notifai.png';
  paragraphOne: string = 'During these uncertain times, many of us find ourselves in introspection mode, with new ideas and resolving to do better. We wish we could help everyone and fix everything. ';
  paragraphTwo: string = 'During these uncertain times, many of us find ourselves in introspection mode, with new ideas and resolving to do better. ';

  serviceList: Array<String> = [
    'INSIGHT RESEARCH',
    'PRODUCT DEFINITION',
    'DESIGN SYSTEM',
  ];

  definitionsList: Array<String> = [
    'STRATEGY',
    'CONCEPT',
    'ART DIRECTION',
    'DESIGN',
    'PRODUCTION',
  ]

  animatedTitle: Array<{aos: number, label: String}> = [
    {aos: 1000, label: 'Brading y'},
    {aos: 1000, label: 'Design system'},
  ]

  firstText: string = 'Investigación y definición de experiencia de cliente (CX)';
  secondText: string = 'During these uncertain times, many of us find ourselves in introspection mode, with new ideas and resolving to do better. We wish we could help everyone and fix everything.';
  thirdText: string = ' “During these uncertain times, many of us find ourselves in introspection mode, with new ideas and resolving to do better. We wish we could help everyone and fix everything. “ ';
  // fourthText: string = 'Cómo empatizar con ellos';
  displayContent: any = 'block';
  imageSection: any = '../../../assets/img/img-notifai.png';

  constructor() { }

  ngOnInit(): void {
  }

}
