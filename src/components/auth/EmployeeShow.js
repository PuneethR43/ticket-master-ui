import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Container,Nav} from 'bootstrap-4-react'
function EmployeeShow(props){
    return(
        <Container>
            <div>
                
                {
                    props.employee&&
                <h1 style={{marginTop:'30px'}}>{props.employee.name}-{props.employee.email}</h1>
                }
                <p style={{fontSize:'20px',fontWeight:400}}><Link to={`/employees/edit/${props.employee && props.employee._id}`}>Edit</Link></p>
                <Nav tabs>
                    <Nav.ItemLink active href="#">All</Nav.ItemLink>
                    <Nav.ItemLink href="#">Pending</Nav.ItemLink>
                    <Nav.ItemLink href="#">Completed</Nav.ItemLink>
                 </Nav>
            </div>
        </Container>
    )
}

const mapStateToProps=(state,props)=>{
    return{
        employee:state.employees.find(emp=>emp._id==props.match.params.id)
    }
}

export default connect(mapStateToProps)(EmployeeShow)