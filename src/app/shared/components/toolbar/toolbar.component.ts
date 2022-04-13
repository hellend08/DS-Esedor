import {Component, HostListener, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('menu', { static: true }) menu!: ElementRef<HTMLDivElement>;
  @ViewChild('logo', { static: true }) logo!: ElementRef<HTMLDivElement>;
  @ViewChild('search', { static: true }) search!: ElementRef<HTMLDivElement>;

  @Input() colorWhite: any;

  constructor(private router: Router) { }

  header_variable=false;
  @HostListener("document:scroll")
  scrollFuntion(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable = true;
    }else {
      this.header_variable = false;
    }
  }

  public redirectProject() {
    this.router.navigateByUrl('/proyectos');
  }

  ngOnInit(): void {
    gsap.from(this.menu.nativeElement.childNodes, {
      delay: 0.4,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15,
    });
    gsap.from(this.search.nativeElement.childNodes, {
      delay: 0.8,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15,
    });
    gsap.from(this.logo.nativeElement.childNodes, {
      delay: 0.3,
      duration: 0.4,
      opacity: 0,
      y: -20,
    });
  }

}
