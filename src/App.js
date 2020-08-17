import React from 'react'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Home from './components/static/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import {connect} from 'react-redux'
import {startUserLogout} from './actions/userAction'
import Customers from './components/auth/Customers'
import AddCustomer from './components/auth/AddCustomer'
import CustomerShow from './components/auth/CustomerShow'
import Departments from './components/auth/Departments'
import AddDepartment from './components/auth/AddDepartment'
import DepartmentShow from './components/auth/DepartmentShow'
import Employees from './components/auth/Employees'
import AddEmployee from './components/auth/AddEmployee'
import EmployeeShow from './components/auth/EmployeeShow'
import Tickets from './components/auth/Tickets'
import AddTicket from './components/auth/AddTicket'
import TicketShow from './components/auth/TicketShow'
import EditCustomer from './components/auth/EditCustomer'
import EditDepartment from './components/auth/EditDepartment'
import EditEmployee from './components/auth/EditEmployee'
import EditTicket from './components/auth/EditTicket'
 function App(props){
    const handleLogout=()=>{
        props.dispatch(startUserLogout())
    }
    return(
        <Router>
            <div>
                
                {Object.keys(props.user).length==0 ?(
                        <div>
                            <nav class="navbar navbar-expand-sm bg-light">
                                <a class="navbar-brand">ticket master</a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                    <ul class=" ml-auto navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link"><Link to='/'>Home</Link></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link"> <Link to='/users/login'>Login</Link></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link"> <Link to='/users/register'>Register</Link></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav> 
                        </div>
                      ):(
                        <div>
                             <nav class="navbar navbar-expand-sm bg-light">
                                <a class="navbar-brand">ticket master</a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                    <ul class=" ml-auto navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link"><Link to='/'>Home</Link></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link"> <Link to='/customers'>Customers</Link></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link"> <Link to='/departments'>Departments</Link></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link"> <Link to='/employees'>Employees</Link></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link">  <Link to='/tickets'>Tickets</Link></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link">  <Link to='#' onClick={handleLogout} >Logout</Link></a>
                                        </li>
                                    </ul>
                                </div>

                            </nav>
                            
                        </div>
                      )
                } 
                <Switch>
                    <Route path='/' component={Home} exact={true}/>
                    <Route path='/users/login' component={Login}/>
                    <Route path='/users/register' component={Register}/>
                    <Route path='/customers' component={Customers} exact={true}/>
                    <Route path='/customers/new' component={AddCustomer}/>
                    <Route path='/customers/:id' component={CustomerShow} exact={true}/>
                    <Route path='/customers/edit/:id' component={EditCustomer}/>
                    <Route path='/departments' component={Departments} exact={true}/>
                    <Route path='/departments/new' component={AddDepartment}/>
                    <Route path='/departments/:id' component={DepartmentShow} exact={true}/>
                    <Route path='/departments/edit/:id' component={EditDepartment}/>
                    <Route path='/employees' component={Employees} exact={true}/>
                    <Route path='/employees/new' component={AddEmployee}/>
                    <Route path='/employees/:id' component={EmployeeShow} exact={true}/>
                    <Route path='/employees/edit/:id' component={EditEmployee}/>
                    <Route path='/tickets' component={Tickets} exact={true}/>
                    <Route path='/tickets/new' component={AddTicket}/>
                    <Route path='/tickets/:id' component={TicketShow} exact={true}/>
                    <Route path='/tickets/edit/:id' component={EditTicket}/>
                    <Route render={
                        ()=><h1>error found</h1>
                    }/>
                </Switch>
            </div>
        </Router>
    )
    
}

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(App)