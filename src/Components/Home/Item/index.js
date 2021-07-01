import React from 'react'
import { 
    View, 
    Text , 
    Image , 
    TouchableOpacity , 
    StyleSheet
} from 'react-native'


const Item = ({id , title , img , navigation , rating}) => {
    
 const imgUrl = `https://image.tmdb.org/t/p/w500${img}`
            
 return(
        <TouchableOpacity style={styles.contentItem} onPress={() => navigation.navigate('Details' , {id : id})}>
            <Image style={styles.contentImg} source={{uri : imgUrl }} />
                    
            <View>
               
                <Text style={styles.contentTitle}>{title}</Text>
                <Text style={styles.genreText}>Rating {rating}</Text>
            </View>
        </TouchableOpacity>

        )
    }
    


export default Item

const styles = StyleSheet.create({
    contentItem : {
        width : '45%' ,
        marginBottom : 20
    } ,

    contentTitle : {
        fontWeight : '700' ,
        letterSpacing : 1 ,
        fontSize : 14 ,
        marginTop : 6
    } ,

    contentImg : {
        height : 170 ,
        resizeMode : 'cover' ,
        borderRadius : 8
    } ,

    genreText : {
        fontSize : 14 ,
        fontWeight : '500' ,
        color : 'grey'
    }
})
