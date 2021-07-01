const initialvalues = {
    data : []
}

const Reducer = (state = initialvalues , action ) => {
    switch(action.type){
        case "AddData" : 
            return {
                data : action.payload.data
            }

        default : 
            return state
    }
}

export default Reducer