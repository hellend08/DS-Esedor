import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  public redirectProject() {
    this.router.navigateByUrl('/proyectos');
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

  ngOnInit(): void {
  }

}
