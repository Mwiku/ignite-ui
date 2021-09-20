import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxGridModule, IgxTreeGridModule } from 'igniteui-angular';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { NormalGridComponent } from './normal-grid/normal-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeGridComponent,
    NormalGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxTreeGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
