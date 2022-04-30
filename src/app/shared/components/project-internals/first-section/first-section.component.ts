import { Component, OnInit, Input } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css']
})
export class FirstSectionComponent implements OnInit {

  @Input() date!: number;
  @Input() industry!: string;
  @Input() client!: string;
  @Input() image!: string;
  @Input() paragraphOne!: string;
  @Input() paragraphTwo!: string;
  @Input() styles!: string;
  @Input() display!: string;

  @Input() serviceList!: Array<String>;
  @Input() definitionsList!: Array<String>;
  @Input() title!: Array<String>;
  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
