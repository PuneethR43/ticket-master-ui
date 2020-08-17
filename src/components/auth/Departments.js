import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Container,Button} from 'bootstrap-4-react'
import {startGetDepartments} from '../../actions/departmentsAction'
import {startRemoveDepartment} from '../../actions/departmentsAction'
class Departments extends React.Component{
    

    componentDidMount(){
        if(this.props.departments.length==0){
           this.props.dispatch(startGetDepartments())
        }
    }
    render(){
        return(
            <Container>
                <div>
                    <h1 style={{marginBottom:'40px'}}>Departments-{this.props.departments.length}</h1>
                    <div className='table-responsive'>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Department</th>
                                    <th>Action</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.departments.map(dept=>{
                                    return(
                                    <tr key={dept._id}>
                                        <td>{dept.name}</td>
                                        <td><div><Link to={`/departments/${dept._id}`}><Button primary>show</Button></Link></div></td>
                                        <td><Button danger onClick={
                                            ()=>{this.props.dispatch(startRemoveDepartment(dept._id))}
                                        }>remove</Button></td>
                                    </tr>
                                    )
                                })
                                
                            }
                            </tbody>
                        </table>
                    </div>
                    <Link to='/departments/new'>Add Department</Link>
                </div>
            </Container>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        departments:state.departments
    }
}

export default connect(mapStateToProps)(Departments)