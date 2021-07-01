import React , { useEffect , useState} from 'react'
import { 
        StyleSheet, 
        Text, 
        View , 
        TextInput , 
        Dimensions , 
        StatusBar , 
        SafeAreaView , 
        TouchableOpacity , 
        Keyboard ,
        FlatList , 
        ActivityIndicator ,
        TouchableWithoutFeedback
    } from 'react-native'

import Item from './Item'
import {Icon} from 'react-native-elements'
import {useSelector , useDispatch} from 'react-redux'
import {getPopular , getMovie} from '../../Redux/Action'


const Index = ({navigation}) => {

    const Data = useSelector(state => state.movie.data ) 
    const dispatch = useDispatch()
    const [ input , setInput ] = useState(null)

    useEffect( () => {

         dispatch( getPopular() )

    } , [])

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            
        <View style={styles.container}>
            <Text style={styles.appTitle}>
                Movies
            </Text>

            <View style={styles.mainSearch}>
                <View style={styles.search}>
                    <TextInput style={{flex : 1 }} 
                        placeholder="Search " 
                        onChangeText={value => setInput(value)}  
                        onSubmitEditing={ () => dispatch(getMovie(input))}
                    />

                    <TouchableOpacity onPress={() => dispatch(getMovie(input))}>
                        <Icon name="search" color="#333" type="font-awesom" size={20} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.mainContent}>
                 { Data.length > 0 ?
                    <SafeAreaView style={{paddingBottom : 30}}>
                        <FlatList 
                            style={{marginBottom : 20}}
                            data={Data}
                            renderItem={({ item }) => 
                                <Item 
                                    id={item.id} 
                                    navigation={navigation} 
                                    title={item.original_title} 
                                    img={item.poster_path} 
                                    rating={item.vote_average}
                                />}

                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            columnWrapperStyle={{justifyContent : 'space-between'}}
                        />
                     </SafeAreaView> : <ActivityIndicator color='black' size="large" /> 
                    
                    }
            </View>
        </View>
     
        </TouchableWithoutFeedback>
    )
}

export default Index

const styles = StyleSheet.create({
    container : {
        paddingTop : StatusBar.currentHeight ,
        paddingHorizontal : Dimensions.get('window').width * 0.1 ,
        paddingBottom : 120
    } ,

    appTitle : {
        fontSize : 26 ,
        fontWeight : '700' ,
    } ,
 
    mainSearch : {
        marginTop : 20 ,

    } ,

    search : {
        height : 46 ,
        borderRadius : 30 ,
        flexDirection : 'row' ,
        alignItems : 'center' ,
        borderWidth : 1 ,
        paddingHorizontal : Dimensions.get('window').width * 0.06

    } ,
    mainContent : {
       
        marginTop : 20 ,
       
    } ,

   


})
