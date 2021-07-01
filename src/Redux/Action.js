import axios from 'axios'

const savePopularData = (data) => {
    return {
        type : "AddData" ,
        payload : {
            data : data
        }
    }
}

const saveDetailsData = (data) => {
    return {
        type : "AddDetails" ,
        payload : {
            data : data
        }
    }
}

const saveMovieData = (data) => {
    return {
        type : "AddData" ,
        payload : {
            data : data
        }
    }
}

const getPopular = () => {
    return (dispatch) => {

        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=917ed3953725cf7756154c0a447017d1')
             .then(result => {
                dispatch( savePopularData(result.data.results) ) 
              })
    }
}

const getDetails = (data) => {
    return (dispatch) => {
        
        axios.get(`https://api.themoviedb.org/3/movie/${data}?api_key=917ed3953725cf7756154c0a447017d1`)
             .then(result => {
                dispatch( saveDetailsData(result.data) ) 
              })
    }
}

const getMovie = (data) => {
    return(dispatch) => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=917ed3953725cf7756154c0a447017d1&query=${data}`)
             .then( result => {
                dispatch(saveMovieData( result.data.results ))
             })
    }
}

export {getPopular , getDetails , getMovie}