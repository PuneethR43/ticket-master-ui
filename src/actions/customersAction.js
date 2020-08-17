import axios from '../config/configureAxios'
import swal from 'sweetalert';

export const setPostCustomer=(customer)=>{
    return {type:'SET_CUSTOMER',payload:customer}
}

export const startGetPostCustomer = (data,redirect,success)=>{
        return (dispatch)=>{
            axios.post('/customers',data,{
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then((response)=>{
                console.log(response)
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }
                else{
                    success()
                    const customer=response.data
                    dispatch(setPostCustomer(customer))
                    redirect()
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }
}

export const setCustomers=(customers)=>{
        return {type:'GET_CUSTOMERS',payload:customers}
}

export const startGetCustomers=()=>{
    return (dispatch)=>{
        axios.get('/customers',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response)
            const customers=response.data
            dispatch(setCustomers(customers))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const setRemoveCustomer=(id)=>{
    return {type:'REMOVE_CUSTOMER',payload:id}
}


export const startRemoveCustomer=(id)=>{
    
    return (dispatch)=>{
        const confirm=window.confirm('Are you sure u want to delete')
    if(confirm){
       axios.delete(`/customers/${id}`,{
           headers:{
            'x-auth':localStorage.getItem('authToken')
           }
       })
       .then((response)=>{
           console.log(response.data._id)
           const id=response.data._id
          dispatch(setRemoveCustomer(id))
        
       })
       .catch((err)=>{
           console.log(err)
       }) 
    }
}
}

export const  setEditCustomer=(id,data)=>{
        return {type:'EDIT_CUSTOMER',payload:{
            id,data
        }}
}

export const startEditCustomer=(data,id,success,redirect)=>{
    return(dispatch)=>{
        axios.put(`/customers/${id}`,data,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response)
           if(response.data.hasOwnProperty('errors')){
               alert(response.data.message)
               
           }
           else{
               success()
               const cust=response.data
               dispatch(setEditCustomer(id,cust))
               redirect()
           }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}