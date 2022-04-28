import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./views/contact/contact.component";
import {NosotrosComponent} from "./views/nosotros/nosotros.component";
import {ProjectsComponent} from "./views/projects/projects.component";
import {AppComponent} from "./app.component";
import {IndexComponent} from "./views/index/index.component";
import { DescripcionComponent } from './views/descripcion/descripcion.component';
import {ProjectsDashboardComponent} from "./views/projects-dashboard/projects-dashboard.component";
import { NotifaiVista1Component } from './views/notifai-vista1/notifai-vista1.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'proyectos/primax', component: ProjectsComponent },
  { path: 'descripcion', component: DescripcionComponent},
  { path: 'proyectos', component: ProjectsDashboardComponent},
  // { path: 'descripcion', component: DescripcionComponent},
  { path: 'notifai-vista1', component: NotifaiVista1Component}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppRoutingModule { }
