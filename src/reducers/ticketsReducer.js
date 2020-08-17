const ticketsReducer=(state=[],action)=>{
    switch(action.type){
        case 'SET_TICKET':{
            return state.concat(action.payload)
        }
        case 'GET_TICKETS':{
            return [].concat(action.payload)
        }
         case 'REMOVE_TICKET':{
                return state.filter(ticket=>{
                    return ticket._id!=action.payload
                })
         }
         case 'STATUS_CHANGE':{
             return state.map(tick=>{
                 if(tick._id==action.payload){
                     return Object.assign({},tick,{isResolved:!tick.isResolved})
                 }
                 else{
                     return Object.assign({},tick)
                 }
             })
         }
         case 'REMSTATUS_TICKET':{
             return state.filter(tick=>{
                return tick._id!=action.payload
             })
         }
         case 'EDIT_TICKET':{
             return state.map(tick=>{
                 if(tick._id==action.payload.id){
                     return Object.assign({},tick,action.payload.data)
                 }
                 else{
                     return Object.assign({},tick)
                 }
             })
         }
        default:{
            return [].concat(state)
        }
    }
}

export default ticketsReducer