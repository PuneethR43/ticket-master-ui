import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Container,Nav} from 'bootstrap-4-react'
function DepartmentShow(props){
    return(
        <Container>
           <div>
            {
                props.department&&
                <h1 style={{marginTop:'30px'}}>name-{props.department.name}</h1>
            }
            <p style={{fontSize:'20px',fontWeight:400}}><Link to={`/departments/edit/${props.department && props.department._id}`}>Edit</Link></p>
        </div>
        <Nav tabs>
            <Nav.ItemLink active href="#">All</Nav.ItemLink>
            <Nav.ItemLink href="#">Pending</Nav.ItemLink>
            <Nav.ItemLink href="#">Completed</Nav.ItemLink>
        </Nav>
        </Container>
       
    )
}

const mapStateToProps=(state,props)=>{
    return{
        department:state.departments.find(dept=>dept._id==props.match.params.id)
    }
}

export default connect(mapStateToProps)(DepartmentShow)