import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { DragScrollModule } from "ngx-drag-scroll";
import { MatListModule } from '@angular/material/list';
import { NguCarouselModule } from '@ngu/carousel';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './views/projects/projects.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ContactComponent } from './views/contact/contact.component';

import { IndexComponent } from './views/index/index.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ProjectsDashboardComponent } from './views/projects-dashboard/projects-dashboard.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { NotifaiVista1Component } from './views/notifai-vista1/notifai-vista1.component';
import { DescripcionComponent } from './views/descripcion/descripcion.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProjectsSlideComponent } from './shared/components/projects-slide/projects-slide.component';
import { MainSliderComponent } from './shared/components/main-slider/main-slider.component';
import { FirstSectionComponent } from './shared/components/project-internals/first-section/first-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NosotrosComponent,
    ContactComponent,
    IndexComponent,
    ToolbarComponent,
    ProjectsDashboardComponent,
    NotifaiVista1Component,
    FooterComponent,
    ProjectsSlideComponent,
    MainSliderComponent,
    DescripcionComponent,
    FirstSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    DragScrollModule,
    MatListModule,
    MatSidenavModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
