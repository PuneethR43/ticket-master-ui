const employeesReducer=(state=[],action)=>{
    switch(action.type){
        case 'SET_EMPLOYEE':{
            return state.concat(action.payload)
        }
        case 'GET_EMPLOYEES':{
            return [].concat(action.payload)
        }
        case 'REMOVE_EMPLOYEE':{
            return state.filter(emp=>{
                    return emp._id!=action.payload
            })
               
        }
        case 'EDIT_EMPLOYEE':{
            return state.map(emp=>{
                if(emp._id==action.payload.id){
                    return Object.assign({},emp,action.payload.data)
                }
                else{
                    return Object.assign({},emp)
                }
            })
        }
        default:{
            return [].concat(state)
        }
    }
}
export default employeesReducer