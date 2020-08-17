import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
function TicketShow(props){
    
    const cust=props.ticket && props.customers.find(cust=>cust._id==props.ticket.customer)
    const dept=props.ticket && props.departments.find(dept=>dept._id==props.ticket.department)
    
    function showEmployees(){
    const empId=props.ticket && props.ticket.employees.map(tick=>tick._id)
    console.log(empId)
    let employees=[]
    employees=props.employees.filter(emp=>empId && empId.find(tickemp=>tickemp==emp._id))
    console.log(employees)
    const empl=employees.map(em=>{
        return em.name
    })
    return empl.join(',')
    }
    return(
        <div>
            <h1>TicketShow</h1>
          
                <div>
                    <h1>codenumber-{props.ticket &&  props.ticket.code}</h1>
                    <p>customer-{cust && cust.name}</p>
                    <p>department-{dept && dept.name}</p>
                    <p>employees-{showEmployees()}</p>
                    <p>message-{props.ticket && props.ticket.message}</p>
                    <p>priority-{props.ticket && props.ticket.priority}</p>
                 </div>
            
                <Link to={`/tickets/edit/${props.ticket && props.ticket._id}`}>Edit</Link>
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    return{
        ticket:state.tickets.find(tick=>tick._id==props.match.params.id),
        customers:state.customers,
        departments:state.departments,
        employees:state.employees
    }
}

export default connect(mapStateToProps)(TicketShow)