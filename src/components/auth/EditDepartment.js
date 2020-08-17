import React from 'react'
import {connect} from 'react-redux'
import {startEditDepartment} from '../../actions/departmentsAction'
import {Container,Row,Col,Button,Card} from 'bootstrap-4-react'
class EditDepartment extends React.Component{
    constructor(props){
        super(props)
        this.state={
            department:props.department && props.department.name,
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
            this.setState({success:'department details have been updated'})
        }
        const redirect=()=>{
            setTimeout(() => {
                this.props.history.push(`/departments/${this.props.department._id}`)
            },3000);
        }
        this.props.dispatch(startEditDepartment(formData,this.props.department._id,success,redirect))
    }

    render(){
        return(
            <Container>
                <div>
                    <h1 style={{marginBottom:'40px'}}>EditDepartment</h1>
                    <Card className='align-card'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <Row>
                                    <Col col='col-lg-2 col-sm-3 col-12'> <label htmlFor='department'>Department:</label></Col>
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
        department:state.departments.find(dept=>dept._id==props.match.params.id)
    }
}

export default connect (mapStateToProps)(EditDepartment)