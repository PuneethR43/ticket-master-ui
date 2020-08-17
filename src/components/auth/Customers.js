import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startGetCustomers} from '../../actions/customersAction'
import {startRemoveCustomer} from '../../actions/customersAction'
import {Container,Button} from 'bootstrap-4-react'
class Customers extends React.Component{
  componentDidMount(){
       if(this.props.customers.length==0){
       this.props.dispatch(startGetCustomers())
       }
   }
    render(){
        return(
            <Container>
                <div>
                    <h1 style={{marginBottom:'40px'}}>Customers-{this.props.customers.length}</h1>
                    <div className='table-responsive'>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Actions</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                
                                    this.props.customers.map((cust,i)=>{
                                        return(
                                            <tr key={cust._id}>
                                                <td>{++i}</td>
                                                <td>{cust.name}</td>
                                                <td>{cust.email}</td>
                                                <td>{cust.mobile}</td>
                                                <td><Link to={`/customers/${cust._id}`}><Button primary>show</Button></Link></td>
                                                <td><Button danger onClick={()=>{
                                                    this.props.dispatch(startRemoveCustomer(cust._id))
                                                }}>remove</Button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <p><Link to='/customers/new'>Add Customer</Link></p>
                </div>
            </Container>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
       customers:state.customers 
    }
}

export default connect(mapStateToProps)(Customers)