import React , {useEffect} from 'react'
import { 
    StyleSheet, 
    Text, 
    View ,
    Image , 
    StatusBar , 
    ActivityIndicator , 
    Dimensions
} from 'react-native'
import {getDetails} from '../../Redux/Action'
import {useSelector , useDispatch } from 'react-redux'

const Index = ({route}) => {

    const Data  = useSelector(state => state.details.data)
    const dispatch = useDispatch()

    useEffect( () => {

        dispatch(getDetails(route.params.id))
        
    } , [] )
    
    return (
        <View>
        { Data !== null ? 
        <View style={styles.container}>
            <Image style={styles.imgCover} source={{uri : `https://image.tmdb.org/t/p/w500/${Data.poster_path}`}}/>
            <View style={styles.mainContent}>

                <Text style={styles.contentTitle}>
                    {Data.title}
                </Text>
                
                <View style={styles.genre}>
                    {Data.genres.map( (item , index ) => <Text key={index} style={styles.contentGenre}>{item.name} </Text>)}
                </View>

                <Text style={styles.contentRating}>
                    Rating {Data.vote_average}+
                </Text>

                <Text style={styles.contentRelease}>
                    Realese Date {Data.release_date}
                </Text>

                <Text style={styles.contentOverview}>
                    {Data.overview}
                </Text>

            </View>
        </View> : <ActivityIndicator color="black" size="large" />
}
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container : {
        paddingTop : StatusBar.currentHeight ,
        
    } ,

    imgCover : {
       
        width : '100%' ,
        height : 300 ,
        borderBottomRightRadius :8  ,
        resizeMode : 'contain' 
    } ,

    mainContent : {
        marginTop : 20 ,
        paddingHorizontal : Dimensions.get('window').width * 0.1
    } ,

    contentTitle : {
        fontSize : 21 , 
        fontWeight : '700' ,
        color : '#000'
    } ,

    genre : {
        flexDirection : 'row' ,

    } ,

    contentGenre : {
        color : '#000' ,
        fontSize : 12 ,
        marginVertical : 8
    } , 
    

    contentRating : {
        fontSize : 16 ,
        color : '#000' ,
        marginBottom : 6
    } ,

    contentRelease : {
        fontSize : 16 ,
        color : '#000' ,
        marginBottom : 6
    } ,

    contentOverview : {
        fontSize : 13 ,
        letterSpacing : 1 ,
        color : '#000'
    }

})
