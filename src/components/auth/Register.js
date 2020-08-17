import React from 'react'
import {connect} from 'react-redux'
import {startPostRegisterData} from '../../actions/userAction'
import {Card,Button} from 'bootstrap-4-react'
const initialState={
    username:'',
    email:'',
    password:'',
    success:''
}
class Register extends React.Component{
    constructor(){
        super()
        this.state=initialState
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
       // const valid=this.validate()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        console.log(formData)
        const redirect=()=>{
            setTimeout(()=>{
                this.props.history.push('/users/login')
            },3000)
           
        }
        const success=()=>{
            this.setState({success:'your details registered'})
        }
        this.props.dispatch(startPostRegisterData(formData,redirect,success))
    
    
     this.setState(initialState)   
     
    }
    render(){
        return(
            <div className='background-img'>
                <div className='overall-align'>
                    <Card>
                        <div className='inner-align'>
                            <h1 className='register'>Register with us</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <label htmlFor='username' className='label-dialog'>username</label>
                                    <input
                                        type='text'
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                        id='username'
                                        name='username'
                                        placeholder='enter your name'
                                        className='input-dialog'
                                    />
                                </div>
                            
                                <div className='form-group'>
                                    <label htmlFor='email' className='label-dialog'>Email</label>
                                    <input
                                        type='text'
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        id='email'
                                        name='email'
                                        placeholder='enter your email'
                                        className='input-dialog'
                                    />
                                
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password' className='label-dialog'>password</label>
                                    <input
                                        type='password'
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        id='password'
                                        name='password'
                                        placeholder='enter your password'
                                        className='input-dialog'
                                    />
                                </div> 
                                <div className='button-align' style={{margin:'10px'}}>
                                    <Button type='submit'success>register</Button>
                                </div>
                            </form>
                            <p className='successMsg'>{this.state.success}</p>
                        </div>
                    
                    </Card>
                
                </div>
            
            </div>
        )
    }
}

export default connect()(Register)