import React from 'react'
import {startAddDepartment} from '../../actions/departmentsAction'
import {connect} from 'react-redux'
import {Container,Row,Col,Button,Card} from 'bootstrap-4-react'
class AddDepartment extends React.Component{
    constructor(){
        super()
        this.state={
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
        const formData={
            name:this.state.department
        }
        console.log(formData)
        const success=()=>{
             this.setState({success:'department added successfully'})
         }
         const redirect=()=>{
             setTimeout(()=>{
                 this.props.history.push('/departments')
             },3000)
         }
        this.props.dispatch(startAddDepartment(formData,success,redirect))
        this.setState({department:''})
}

    render(){
        return(
            <Container>
                <div>
                    <h1 style={{marginBottom:'40px'}}>Add Department</h1>
                    <Card className='align-card'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <Row>
                                    <Col col='col-lg-2 col-sm-3 col-12'><label htmlFor='department'>Department</label></Col>
                                    <Col col='col-lg-10 col-sm-9 col-12'>
                                    <input
                                    type='text'
                                    value={this.state.department}
                                    onChange={this.handleChange}
                                    name='department'
                                    id='department'
                                    placeholder='enter your department'
                                    className='form-control'
                                    style={{width:'100%'}}
                                    /></Col>
                                </Row>
                            </div>
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

export default connect()(AddDepartment)