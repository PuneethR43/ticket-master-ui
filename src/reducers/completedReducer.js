
 const completedReducer=(state=[],action)=>{

    switch(action.type){
        case 'COMPLETED_TICKET':{
            return state.concat(action.payload)
        }
        default:{
            return [].concat(state)
        }
    }

}

export default completedReducer
