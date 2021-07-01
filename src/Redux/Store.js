import {createStore, combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import ReducerMovie from './ReducerMovie'
import ReducerDetails from './ReducerDetail'

const Root = combineReducers({
    movie : ReducerMovie ,
    details : ReducerDetails 

})
const Store = createStore(Root , applyMiddleware(thunk))

export default Store