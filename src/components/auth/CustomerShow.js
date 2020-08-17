import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Container,Nav} from 'bootstrap-4-react'
function CustomerShow(props){

    return(
        <Container>
        <div>
           
            {
                props.customer&&
                <h1 style={{marginTop:'30px'}}>{props.customer.name}-{props.customer.email}</h1>
            }
            <p style={{fontSize:'20px',fontWeight:400}}><Link to={`/customers/edit/${props.customer && props.customer._id}`}>EDIT</Link></p>
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
        customer:state.customers.find(cust=>cust._id==props.match.params.id)
    }
}

export default connect(mapStateToProps)(CustomerShow)