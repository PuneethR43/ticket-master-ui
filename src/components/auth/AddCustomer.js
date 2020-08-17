import React from 'react'
import {connect} from 'react-redux'
import {startGetPostCustomer} from '../../actions/customersAction'
import {Container,Row,Col,Button,Card} from 'bootstrap-4-react'
class AddCustomer extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            mobile:'',
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
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile
        }
        console.log(formData)
        const redirect=()=>{
            setTimeout(()=>{
                this.props.history.push('/customers')
            },3000)
           
        }
        const success=()=>{
            this.setState({success:'your details has been submitted successfully'})
        }
        
        this.props.dispatch(startGetPostCustomer(formData,redirect,success))
        this.setState({
            name:'',
            email:'',
            mobile:''
        })
    }

    render(){
        return(
            <Container>
                <div>
                    <h1 style={{marginBottom:'40px'}}>Add Customer</h1>
                    <Card className='align-card'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <Row>
                                    <Col col='col-lg-2 col-sm-3 col-12'><label htmlFor='name' style={{width:'100%',textAlign:'center'}}>Name</label></Col>
                                    <Col col='col-lg-10 col-sm-9 col-12'>
                                    <input
                                        type='text'
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        id='name'
                                        name='name'
                                        placeholder='enter your name'
                                        style={{width:'100%'}}
                                        className='form-control'
                                    />
                                    </Col>
                                </Row>
                            </div>
                            <div className='form-group'>
                                <Row>
                                    <Col col='col-lg-2 col-sm-3 col-12'><label htmlFor='email' style={{width:'100%',textAlign:'center'}}>Email</label></Col>
                                    <Col col='col-lg-10 col-sm-9 col-12'>
                                    <input
                                        type='text'
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        id='email'
                                        name='email'
                                        placeholder='enter your email'
                                        style={{width:'100%'}}
                                        className='form-control'
                                    />
                                    </Col>
                                </Row>
                            </div>
                            <div className='form-group'>
                                <Row>
                                    <Col col='col-lg-2 col-sm-3 col-12'><label htmlFor='password' style={{width:'100%',textAlign:'center'}}>Mobile</label></Col>
                                    <Col col='col-lg-10 col-sm-9 col-12'>
                                        <input
                                            type='number'
                                            value={this.state.mobile}
                                            onChange={this.handleChange}
                                            id='mobile'
                                            name='mobile'
                                            placeholder='enter your mobile number'
                                            style={{width:'100%'}}
                                            className='form-control'
                                        />
                                    </Col>
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

export default connect()(AddCustomer)