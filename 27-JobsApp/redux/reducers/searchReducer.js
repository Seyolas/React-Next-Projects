
const initalState = {
    JobTitleQuery:'',
    LocationQuery:''

}

export const searchReducer=(state=initalState,action)=>{
    
    if (action.type==='SET_QUERY') {

    return {...state, JobTitleQuery:action.payload.payload.jobtitle, LocationQuery:action.payload.payload.location}
       
    }

    return state;

  }

  