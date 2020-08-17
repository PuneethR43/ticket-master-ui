import React from 'react'
import {connect} from 'react-redux'
import {startEditEmployee} from '../../actions/employeesAction'
import {Container,Row,Col,Button,Card} from 'bootstrap-4-react'
class EditEmployee extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.employee && props.employee.name,
            email:props.employee && props.employee.email,
            mobile:props.employee && props.employee.mobile,
            department:'',
            success:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        
        e.preventDefault()
        const dept=this.props.departments.find(dept=>dept.name==this.state.department)
           
        console.log(dept)
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            department:dept&&dept._id
        }
        console.log(formData)
        const success=()=>{
            this.setState({success:'employee details have been submitted successfully'})
        }
        const redirect=()=>{
            setTimeout(() => {
               this.props.history.push(`/employees/${this.props.employee && this.props.employee._id}`) 
            },3000);
        }
        this.props.dispatch(startEditEmployee(formData,this.props.employee._id,success,redirect))
    }
    render(){
        return(
            <Container>
            <div>
               
                <h1 style={{marginBottom:'40px'}}>Edit Employee</h1>
                <Card className='align-card'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                    <Row>
                        <Col col='col-lg-2 col-sm-3 col-12'><label htmlFor='name'>Name</label></Col>
                        <Col col='col-lg-10 col-sm-9 col-12'>
                        <input 
                            type='text'
                            value={this.state.name}
                            onChange={this.handleChange}
                            name='name'
                            id='name'
                            placeholder='enter your name'
                            className='form-control'
                            style={{width:'100%'}}
                        />
                        </Col>
                    </Row>
                    </div>
                    <div className='form-group'>
                    <Row>
                        <Col col='col-lg-2 col-sm-3 col-12'><label htmlFor="email">Email</label></Col>
                        <Col col='col-lg-10 col-sm-9 col-12'>
                            <input 
                                type='text'
                                value={this.state.email}
                                onChange={this.handleChange}
                                name='email'
                                id='email'
                                placeholder='enter your email'
                                className='form-control'
                                style={{width:'100%'}}
                            />
                            </Col>
                        </Row>
                        </div>
                        <div className='form-group'>
                        <Row>
                            <Col col='col-lg-2 col-sm-3 col-12'><label htmlFor='mobile'>Mobile</label></Col>
                            <Col col='col-lg-10 col-sm-9 col-12'>
                            <input 
                                type='number'
                                value={this.state.mobile}
                                onChange={this.handleChange}
                                name='mobile'
                                id='mobile'
                                placeholder='enter your mobile number'
                                className='form-control'
                                style={{width:'100%'}}
                            />
                            </Col>
                        </Row>
                        </div>
                        {
                            this.props.departments.length==0 ?(
                            <div>
                                <div className='form-group'>
                                    <Row>
                                        <Col col='col-lg-2 col-sm-3 col-12'><label htmlFor='department'>department</label></Col>
                                        <Col col='col-lg-10 col-sm-9 col-12'>
                                        <select id='department'  className='form-control'
                                        style={{width:'100%'}}>
                                        <option>select</option>
                                        </select>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            ):
                            <div>
                                <div className='form-group'>
                                <Row>
                                    <Col col='col-lg-2 col-sm-3 col-12'><label htmlFor='department'>department</label></Col>
                                    <Col col='col-lg-10 col-sm-9 col-12'>
                                    <select onChange={this.handleChange} value={this.state.department} id='department' name='department' className='form-control'
                                    style={{width:'100%'}}>
                                        <option>select</option>
                                        {
                                            this.props.departments.map(dept=>{
                                                return <option key={dept._id} value={dept.name}>{dept.name}</option>
                                            })
                                        }
                                    </select>
                                    </Col>
                                </Row>
                                </div>
                            </div>
                           
                        }
                         <div className='button-align' style={{marginTop:'20px'}}>
                                <Button success type='submit'>submit</Button>
                            </div>
                </form>
                <p className='success-message'>{this.state.success}</p>
                    </Card>
            </div>
            </Container>
        )
    }
        
}

const mapStateToProps=(state,props)=>{
    return{
        departments:state.departments,
        employee:state.employees.find(emp=>emp._id==props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditEmployee)