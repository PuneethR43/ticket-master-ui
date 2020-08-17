import axios from '../config/configureAxios'
import swal from 'sweetalert'
export const setUser=(user)=>{
  return {type:'SET_USER',payload:user}
}

export const startLoginUser=(formData,redirect,success)=>{
  return (dispatch)=>{
      axios.post('/users/login',formData)
      .then((response)=>{
        if(response.data.hasOwnProperty('error')){
         alert(response.data.error)
        }
        else{
          success()
          localStorage.setItem('authToken',response.data.token)
          axios.get('/users/account',{
            headers:{
              'x-auth':localStorage.getItem('authToken')
            }
          })
          .then((response)=>{
            console.log(response.data)
            const user=response.data
            dispatch(setUser(user))
            redirect()
          })
          .catch((err)=>{
            console.log(err)
          })
          
        }
      })
      .catch((err)=>{
        console.log(err)
      })
  }
}

export const startGetUser=()=>{
  return (dispatch)=>{
    axios.get('users/account',{
      headers:{
        'x-auth':localStorage.getItem('authToken')
      }
    })
    .then((response)=>{
      const user=response.data
      dispatch(setUser(user))
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}

export const startPostRegisterData=(data,redirect,success)=>{
    return (dispatch)=>{
        axios.post('/users/register',data)
        .then((response)=>{
          console.log(response)
          if(response.data.hasOwnProperty('errors')){
           alert(response.data.message)
          }
          else{
            success()
            redirect()
          }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startUserLogout=()=>{
    return (dispatch)=>{
      axios.delete('/users/logout',{
        headers:{
          'x-auth':localStorage.getItem('authToken')
        }
      })
      .then((response)=>{
          if(response.data.notice){
          alert(response.data.notice)
          }
            localStorage.removeItem('authToken')
            dispatch(setUser({}))
            window.location.href='/' 
      })
      .catch((err)=>{
        console.log(err)
      })
    }
}