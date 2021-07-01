const initialvalues = {
    data : null
}

const Reducer = (state = initialvalues , action) => {
    switch(action.type){
        case "AddDetails" :
            return {
                data : action.payload.data
            }

        default : 
            return state
    }
}

export default Reducer