import axios from '../config/configureAxios'
import { startEditCustomer } from './customersAction'

export const setAddDepartment=(dept)=>{
    return {type:'SET_ADD_DEPARTMENT',payload:dept}
}
export const startAddDepartment=(data,success,redirect)=>{
    return (dispatch)=>{
        axios.post('/departments',data,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
          if(response.data.hasOwnProperty('errors')){
              alert(response.data.message)
          }
          else{
            success()
            const dept=response.data
            dispatch(setAddDepartment(dept))
            redirect()
          }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const setDepartments=(data)=>{
    return {type:'GET_DEPARTMENTS',payload:data}
}

export const startGetDepartments=()=>{
    return (dispatch)=>{
        axios.get('/departments',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
           const departments=response.data
           dispatch(setDepartments(departments))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const setRemoveDepartment=(id)=>{
    return {type:'REMOVE_DEPARTMENT',payload:id}
}

export const startRemoveDepartment=(id)=>{
    return (dispatch)=>{
        const confirm =window.confirm('Are you sure u want to remove this department')
            if(confirm){
        axios.delete(`/departments/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response)
            const id=response.data._id
            
            dispatch(setRemoveDepartment(id))
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    }
}

export const setEditDepartment=(id,dept)=>{
    return {type:'EDIT_DEPARTMENT',payload:{
        id,dept
    }}
}

export const startEditDepartment=(data,id,success,redirect)=>{
    return (dispatch)=>{
        axios.put(`/departments/${id}`,data,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                success()
                const dept=response.data
                dispatch(setEditDepartment(id,dept))
                redirect()
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}