import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from "@angular-redux/store"
import { IDashboardState } from '../store';
import { ADD_PEOPLE } from '../actions';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  @select(s => s.tasking.people) people; 

  constructor(private ngRedux: NgRedux<IDashboardState>) { }

  ngOnInit() {
  }

  addName(input){
    if (!input.value) return; 

      this.ngRedux.dispatch({
        type: ADD_PEOPLE, name: input.value
      })
      input.value = '';
  }

}
