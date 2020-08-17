 const departmentsReducer=(state=[],action)=>{
        switch(action.type){
           case 'SET_ADD_DEPARTMENT':{
                return state.concat(action.payload)
            }
            case 'GET_DEPARTMENTS':{
                return [].concat(action.payload)
            }

            case 'REMOVE_DEPARTMENT':{
                return state.filter(dept=>{
                    return dept._id!=action.payload
                })
            }

            case 'EDIT_DEPARTMENT':{
                return state.map(dep=>{
                    if(dep._id==action.payload.id){
                        return Object.assign({},dep,action.payload.dept)
                    }
                    else{
                        return Object.assign({},dep)
                    }
                })
            }
            
            default:{
                return [].concat(state)
            }
        }
 }
 export default departmentsReducer