import {tassign} from "tassign";
import {ADD_PEOPLE} from "./actions";


export interface IDashboardState {
   people: String[]; 
}


export const DASHBOARD_INITAL_STATE:  IDashboardState = {
    people: []
}


function addPeople(state, action){
    console.log(state.people)
    return tassign(state, {
        people: state.people.push(action.name)
    });
}


export function dashboardReducer(state: IDashboardState = DASHBOARD_INITAL_STATE, action):  IDashboardState{
        switch(action.type){
            case ADD_PEOPLE: return addPeople(state, action);
        }
return state
}