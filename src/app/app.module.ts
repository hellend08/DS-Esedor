import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './views/projects/projects.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ContactComponent } from './views/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { IndexComponent } from './views/index/index.component';
import {DragScrollModule} from "ngx-drag-scroll";
import {MatListModule} from '@angular/material/list';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { NotifaiVista1Component } from './views/notifai-vista1/notifai-vista1.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NosotrosComponent,
    ContactComponent,
    IndexComponent,
    ToolbarComponent,
    NotifaiVista1Component
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
        MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
