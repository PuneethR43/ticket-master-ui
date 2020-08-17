import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startGetTickets, removeStatusTicket} from '../../actions/ticketsAction'
import {startRemoveTicket} from '../../actions/ticketsAction'
import {ticketStatusChange} from '../../actions/ticketsAction'
import {Nav,Button,Container} from 'bootstrap-4-react'
import { ticketsCompleted } from '../../actions/ticketCompleted'
class Tickets extends React.Component{
    componentDidMount(){
        if(this.props.tickets.length==0){
            this.props.dispatch(startGetTickets())
        }
    }

    showEmployees=(ticket)=>{
        const tickEmp=ticket.employees.map(tick=>tick._id)
        //console.log(tickEmp)
        let employees=[]
        employees=this.props.employees.filter(emp=>tickEmp.find(tick=>tick==emp._id))
        //console.log(employees)
        const empl=(employees.map(em=>{
            return em.name
        }))
        return empl.join(',')
    }

    handleChange=(id)=>{
        this.props.dispatch(ticketStatusChange(id))
    }

    handleRemove=(id)=>{
        this.props.dispatch(removeStatusTicket(id))
    }

    handleComplete=(ticket)=>{
        this.props.dispatch(ticketsCompleted(ticket))
    }

    render(){
        console.log(this.props.tickets)
        return(
            <Container>
            <div style={{marginTop:'40px'}}>
               <Nav tabs>
                    <Nav.ItemLink href="#" active>Pending</Nav.ItemLink>
                    <Nav.ItemLink href="#">Completed</Nav.ItemLink>
                </Nav>
                <h1 style={{marginTop:'40px'}}>Tickets-{this.props.tickets.length}</h1>
                <div className='table-responsive'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Code No</th>
                                <th>Customer</th>
                                <th>Department</th>
                                <th>Employee</th>
                                <th>Message</th>
                                <th>Priority</th>
                                <th>Actions</th>
                                <th>Remove</th>
                                <th>Complete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.tickets.map(ticket=>{  
                                    const cust=this.props.customers.find(cust=>cust._id==ticket.customer)
                                    const dept=this.props.departments.find(dept=>dept._id==ticket.department)
                                    return (
                                        <tr>
                                            <td>{ticket.code}</td>
                                            <td>{cust && cust.name}</td>
                                            <td>{dept && dept.name}</td>
                                            <td>{this.showEmployees(ticket)}</td>
                                            <td>{ticket.message}</td>
                                            <td>{ticket.priority}</td>
                                            <td><Link to={`/tickets/${ticket._id}`}><Button primary>show</Button></Link></td>
                                            <td><Button danger onClick={
                                                ()=>{this.props.dispatch(startRemoveTicket(ticket._id))}
                                            }>remove</Button></td>
                                            <td><input type='checkbox' checked={ticket.isResolved} onChange={
                                                ()=>{this.handleChange(ticket._id);this.handleRemove(ticket._id);this.handleComplete(ticket)}
                                            }/></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
               
                <p><Link to='/tickets/new'>Add Ticket</Link></p>
            </div>
            </Container>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        tickets:state.tickets,
        customers:state.customers,
        employees:state.employees,
        departments:state.departments,
        ticketsCompleted:state.ticketsCompleted
    }
}

export default connect(mapStateToProps)(Tickets)