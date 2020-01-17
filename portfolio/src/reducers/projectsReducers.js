const INITIAL_STATE = {
    projects: []
}

export default (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case '_projects':
            return {...state, projects: action.payload}
        default: return state
    }
}