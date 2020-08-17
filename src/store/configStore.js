import React from 'react'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import customersReducer from '../reducers/customersReducer'
import departmentsReducer from '../reducers/departmentsReducer'
import employeesReducer from '../reducers/employeesReducer'
import ticketsReducer from '../reducers/ticketsReducer'
import completedReducer from '../reducers/completedReducer'
function configStore(){
    const store=createStore(combineReducers({
        user:userReducer,
        customers:customersReducer,
        departments:departmentsReducer,
        employees:employeesReducer,
        tickets:ticketsReducer,
        ticketsCompleted:completedReducer
    }),applyMiddleware(thunk))
    return store
}

export default configStore