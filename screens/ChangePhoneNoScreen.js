import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

function ChangePhoneNoScreen({ navigation }) {

    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(true);

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.container}>
                <View style={styles.backward}>
                    <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
                        <Ionicons name="chevron-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={{ color: Colors.text, marginTop: 5 }}>Change Phone Number</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.font}>Enter your new phone number</Text>
                    <TextInput style={styles.phoneNo}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.font}>Enter your password</Text>
                    <View style={styles.inputControls}>
                        <TextInput
                            secureTextEntry={visible}  style={styles.inputTextContainer}
                        />
                        <TouchableOpacity onPress={() => {setShow(!show),setVisible(!visible)}}>
                            <Ionicons name={show===false?'ios-eye-off' : 'ios-eye'} size={24} color="white" style={{marginTop:20,marginRight:10}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.saveButton} onPress={() => { }}>
                    <Text>SAVE</Text>
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
    font: {
        color: Colors.text,
        fontSize: 15,
    },
    inputContainer: {
        marginTop: 50,
        marginHorizontal: 10,
    },
    inputControls:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#262626',
        marginTop:10,
        borderRadius:10
    },      
    inputTextContainer: {
        color: Colors.text,
        padding: 15,
        fontSize: 15,
        marginTop: 10,
        width:'90%',
        //backgroundColor:'#262626',
        borderRadius:10
    },
    phoneNo: {
        color: Colors.text,
        padding: 15,
        fontSize: 15,
        marginTop: 10,
        width:'100%',
        backgroundColor:'#262626',
        borderRadius:10
    },
    saveButton: {
        marginTop: 390,
        backgroundColor: '#ffffff',
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40
    },
})

export default ChangePhoneNoScreen;