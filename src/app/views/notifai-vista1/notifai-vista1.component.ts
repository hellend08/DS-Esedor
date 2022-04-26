import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-notifai-vista1',
  templateUrl: './notifai-vista1.component.html',
  styleUrls: ['./notifai-vista1.component.css']
})
export class NotifaiVista1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    AOS.init()

  }

}
