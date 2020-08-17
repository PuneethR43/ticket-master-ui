import React from 'react'
import {connect} from 'react-redux'
import {startEditCustomer} from '../../actions/customersAction'
import {Container,Row,Col,Button,Card} from 'bootstrap-4-react'
class EditCustomer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.customer && props.customer.name,
            email:props.customer && props.customer.email,
            mobile:props.customer && props.customer.mobile,
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
        const success=()=>{
            this.setState({success:'customer details have been updated'})
        }
        const redirect=()=>{
            setTimeout(() => {
                this.props.history.push(`/customers/${this.props.customer._id}`)
            },3000);
        }

        this.props.dispatch(startEditCustomer(formData,this.props.customer._id,success,redirect))
       
    }
    render(){
        console.log(this.props)
        return(
            <Container>
                <div>
                    <h1 style={{marginBottom:'40px'}}>EditCustomer</h1>
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
                                        id='name'
                                        name='name'
                                        placeholder='enter your name'
                                        className='form-control'
                                        style={{width:'100%'}}
                                    />
                                    </Col>
                                </Row>
                            </div>
                            <div className='form-group'>
                                <Row>
                                    <Col col='col-lg-2 col-sm-3 col-12'> <label htmlFor='email'>Email</label></Col>
                                    <Col col='col-lg-10 col-sm-9 col-12'>
                                    <input
                                        type='text'
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        id='email'
                                        name='email'
                                        placeholder='enter your email'
                                        className='form-control'
                                        style={{width:'100%'}}
                                    />
                                    </Col>
                                </Row>
                            </div>
                            <div className='form-group'>
                                <Row>
                                    <Col col='col-lg-2 col-sm-3 col-12'><label htmlFor='password'>Mobile</label></Col>
                                    <Col col='col-lg-10 col-sm-9 col-12'>
                                    <input
                                        type='number'
                                        value={this.state.mobile}
                                        onChange={this.handleChange}
                                        id='mobile'
                                        name='mobile'
                                        placeholder='enter your mobile number'
                                        className='form-control'
                                        style={{width:'100%'}}
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

const mapStateToProps=(state,props)=>{
    return{
        customer:state.customers.find(cust=>cust._id==props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditCustomer)


