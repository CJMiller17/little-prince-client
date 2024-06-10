
// Example of how to handle each pages separate state
export const initialState = {
    page1: { count: 0 },
    page2: { user: null },
  // Etc....
}


export const gameReducer = (state, action) => {
    switch (action.type) {
        case "NAMED_VARIABLE PERTAINING TO SOME STATE":
            return {
                ...state.page1, // Related to initial state
                count: state.page1.count + 1, // Updating something from page 1
            }
        
        case "SOMETHING ELSE": // This name will relate to a dispatch else where in a component
            return {
                ...state.page2,
                user: action.payload,
            }
        
        default: // This is an error handling measure
            return state
    }

}