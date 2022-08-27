import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule,     AppRoutingModule
  ],
  declarations: [ AppComponent, HelloComponent, TaskListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
