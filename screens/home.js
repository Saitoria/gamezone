import React,{ useState } from 'react';
import { StyleSheet,Text,View,FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReviewForm from './reviewForm';


export default function Home({ navigation })
{
    const [modalOpen,setModalOpen] = useState(false);
    const [reviews,setReviews] = useState([
        {title:'Tom Clancys without remourse',rating:5,body:'lorem ipsum',key:'1'},
        {title:'Spiral from the book of jigsay',rating:4,body:'lorem ipsum',key:'2'},
        {title:'Fantasy island',rating:3,body:'lorem ipsum',key:'3'},
    ]);
    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReview)=>{
            return[review, ...currentReview];
        });
        setModalOpen(false);
    };

    return(
        <View style={globalStyles.container}>
        <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
        <Icon name='close' size={24} onPress={() => setModalOpen(false)} style={{...styles.modalToggel, ...styles.modalClose}}/>
        <ReviewForm addReview={addReview}/>
        </View>
        </TouchableWithoutFeedback>
        </Modal>

        <Icon name='add' size={24} onPress={() => setModalOpen(true)} style={styles.modalToggel}/>
 
           <FlatList
               data ={reviews}
               renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails',item)}>
                    <Card>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
               )} 
               keyExtractor={item => item.key}
           />
        </View>
    );
}

const styles = StyleSheet.create({
    modalContent:{
        flex:1,
    },
    modalToggel:{
        marginBottom:10,
        borderWidth:1,
        borderColor: '#808080',
        padding:10,
        borderRadius:10,
        alignSelf:'center',
    },
    modalClose:{
        marginTop:20,
        marginBottom:0,
    },
});