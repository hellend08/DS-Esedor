import { NgModule } from '@angular/core';
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
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'descripcion', component: DescripcionComponent},
  { path: 'proyectos1', component: ProjectsDashboardComponent},
  { path: 'descripcion', component: DescripcionComponent},
  { path: 'notifai-vista1', component: NotifaiVista1Component}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
