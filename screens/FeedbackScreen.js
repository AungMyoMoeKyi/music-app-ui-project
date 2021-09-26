import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard,Image } from 'react-native';
import Colors from '../constants/colors';
import { Entypo } from '@expo/vector-icons';

function FeedbackScreen({ navigation }) {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.container}>
                <View style={styles.backward}>
                    <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                        <Image source={require('../assets/backward.png')} style={{marginLeft:12.18,width:9.63,height:15.42}}/>
                    </TouchableOpacity>
                    <Text style={{ color: Colors.text,fontFamily:'gotham-bold',fontSize:13,marginLeft:26.19}}>Feedback</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.rateYourExperienceText}>Rate your experience</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 32 }}>
                        <Entypo name="star" size={24} color="red" />
                        <Entypo name="star" size={24} color="red" />
                        <Entypo name="star" size={24} color="red" />
                        <Entypo name="star" size={24} color="white" />
                        <Entypo name="star" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.descriptionText}>Description</Text>
                    <TextInput numberOfLines={30} multiline={true} style={styles.descriptionTextBox} />
                </View>
                <TouchableOpacity style={styles.saveButton} onPress={() => { }}>
                    <Text style={{fontFamily:'gotham-bold',fontSize:21}}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000'
    },
    backward: {
        marginTop: 60,
        flexDirection: 'row',
    },
    inputContainer: {
        marginTop: 53,
        marginLeft:11,
    },
    rateYourExperienceText: {
        color: Colors.text,
        fontSize: 13,
        marginBottom: 13,
        fontFamily:'gotham-book'
        //marginLeft:11
    },
    descriptionText:{
        color: Colors.text,
        fontSize: 13,
        marginBottom: 7,
        fontFamily:'gotham-book'
        //marginLeft:11
    },
    descriptionTextBox: {
        width: 353,
        height: 256,
        backgroundColor: '#262626',
        borderRadius: 10,
        color: Colors.text,
        //marginHorizontal:11,
    },
    saveButton: {
        marginTop: 230,
        backgroundColor: '#ffffff',
        width: 280,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 45,
    }
})

export default FeedbackScreen;