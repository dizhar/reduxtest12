import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import {NgReduxModule} from '@angular-redux/store'

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: [PeopleComponent],
  exports: [
    PeopleComponent
  ]
})
export class DashboardModule { }
