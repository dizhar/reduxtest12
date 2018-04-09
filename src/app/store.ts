import { tassign } from 'tassign'; 
import { combineReducers } from "redux";
import { IDashboardState, DASHBOARD_INITAL_STATE, dashboardReducer } from "./dashboard/store";

export interface IAppState {
    dashboard: IDashboardState
}

export const INITIAL_STATE: IAppState = {
    dashboard: DASHBOARD_INITAL_STATE
}


export const rootReducer = combineReducers<IAppState>({
        dashboard: dashboardReducer
})