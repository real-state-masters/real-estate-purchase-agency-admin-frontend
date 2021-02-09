const initialValue = {
  properties: [],
  showFilters: false
}

const dashboardReducer = (state = initialValue, action) => {
    
    switch (action.type) {
        case 'ADD_PROPERTIES': { 
            console.log(state)
            console.log(action)
            console.log(action.payload)
            return {...state, properties: [...state.properties, ...action.payload.properties]}}
        case 'ADD_FILTERS':
            return {...state, showFilters: action.payload }
        default:
            return state
    }
}

export default dashboardReducer