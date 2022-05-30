export const initialstate = {
    user: [],
    postdata: [],
    slider: false,
    error:[]
}
export const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case "User":
            return {
                ...state,
                user: [action.payload]
            }

        case "postdata":
            return {
                ...state,
                postdata: [action.payload]
            }
        case "slider":
            return {
                ...state,
                slider: action.data
            }
        case "foundederror":
            return {
                ...state,
                error: [action.error]
                
            }
        default:
            return state
    }

}