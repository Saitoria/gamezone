import React from 'react';
import {StyleSheet,View,Text,Image,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../shared/card';


export default function Header({navigation,title})
{
    const optMenu = () => 
    {
        navigation.openDrawer(); 
    }
    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
        <Icon name='menu' size={25} onPress={optMenu} style={styles.icon}/>
        <View style={styles.headerTitle}>
            <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
            <Text style={styles.headerText}>
                {title}
            </Text>
        </View>   
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 60,
        padding:0,
        margin:0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        fontSize:30,
        fontWeight: 'bold',
        color: '#333',
        letterSpacing: 1,
    },
    icon:{
        position: 'absolute',
        left:8,
    },
    headerImage:{
        width:26,
        height:26,
        marginHorizontal:10,
    },
    headerTitle:{
        flexDirection:'row',
    },
});