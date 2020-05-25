import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementComponent } from './components/element/element.component';
import { ElementsGridComponent } from './components/elements-grid/elements-grid.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { PathBarComponent } from './components/path-bar/path-bar.component'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SideBarComponent } from './components/side-bar/side-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    ElementsGridComponent,
    HeaderComponent,
    PathBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
