import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  paso1 = true;
  paso2 = false;
  paso3 = false;
  formulario = false;

  bgHover!: boolean;
  bgHoverTwo!: boolean;

  colorWhite = false;

  constructor() { }

  ngOnInit(): void {

      AOS.init()

  }



}
