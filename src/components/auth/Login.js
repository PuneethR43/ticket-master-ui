import React from 'react'
import {connect} from 'react-redux'
import {startLoginUser} from '../../actions/userAction'
import {Card,Button} from 'bootstrap-4-react'
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            successMsg:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        //const valid=this.validate()
       
            const formData={
                email:this.state.email,
                password:this.state.password
            }

            const redirect=()=>{
                setTimeout(()=>{
                    this.props.history.push('/')
                },3000)
            }

            const successMsg=()=>{
                this.setState({successMsg:'you have logged in successfully'})
            }

            this.props.dispatch(startLoginUser(formData,redirect,successMsg))

            this.setState({
                email:'',
                password:'',
                successMsg:''
            })
    }

    render(){
        return(
            <div className='login-img'>
                <div className='overall-align'>
                    <Card>
                        <div className='inner-align'>
                            <h1 className='register'>Login</h1>
                            <form onSubmit={this.handleSubmit}>
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
                                    <Button type='submit' success>login</Button>
                                </div>
                            </form>
                            <p className='successMsg'>{this.state.successMsg}</p>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default connect()(Login)