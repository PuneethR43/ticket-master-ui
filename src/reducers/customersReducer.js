
const customersReducer=(state=[],action)=>{
    switch(action.type){
        case 'SET_CUSTOMER':{
            return state.concat(action.payload)
        }

        case 'GET_CUSTOMERS':{
            return [].concat(action.payload)
        }

        case 'REMOVE_CUSTOMER':{
            return state.filter(cust=>{
               return cust._id!=action.payload
            })
        }

        case 'EDIT_CUSTOMER':{
            return state.map(cust=>{
                if(cust._id==action.payload.id){
                    return Object.assign({},cust,action.payload.data)
                }
                else{
                    return Object.assign({},cust)
                }
            })
        }
        default:{
            return [].concat(state)
        }
    }
}

export default customersReducer