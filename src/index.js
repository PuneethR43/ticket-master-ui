import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configStore from './store/configStore'
import {Provider} from 'react-redux'
import {startGetUser} from './actions/userAction'
import {startGetCustomers} from './actions/customersAction'
import { startGetDepartments } from './actions/departmentsAction'
import { startGetEmployees } from './actions/employeesAction'
import {startGetTickets} from './actions/ticketsAction'
import {ticketsCompleted} from './actions/ticketCompleted'
import './style.css'
const store=configStore()

console.log('initial state',store.getState())

//updated
store.subscribe(()=>{
    console.log('updated state',store.getState())
})

//handle page reload

if(localStorage.getItem('authToken')){
    store.dispatch(startGetUser())
}
store.dispatch(startGetCustomers())
store.dispatch(startGetDepartments())
store.dispatch(startGetEmployees())
store.dispatch(startGetTickets())
const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))