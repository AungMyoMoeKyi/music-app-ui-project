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
                        <Image source={require('../assets/backward.png')} style={{ marginLeft: 12.18, width: 9.63, height: 15.42 }} />
                    </TouchableOpacity>
                    <Text style={{ color: Colors.text, fontFamily: 'gotham-bold', marginLeft: 26.19, fontSize: 13,marginBottom:53 }}>Change Phone Number</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.font}>Enter your new phone number</Text>
                    <TextInput style={styles.phoneNo} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.font}>Enter your password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            secureTextEntry={visible} style={styles.password}
                        />
                        <TouchableOpacity onPress={() => { setShow(!show), setVisible(!visible) }}>
                            <Ionicons name={show === false ? 'ios-eye-off' : 'ios-eye'} size={18} color="white" style={{ marginVertical: 13, marginRight: 18.21 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.saveButton} onPress={() => { }}>
                    <Text style={{ fontFamily: 'gotham-bold', fontSize: 21 }}>SAVE</Text>
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
        fontSize: 13,
        fontFamily:'gotham-light'
    },
    inputContainer: {
        marginBottom: 35,
        marginHorizontal: 11,
    },
    passwordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#262626',
        borderRadius: 10,
        marginTop:7,
        width: 353,
        height:42,
    },
    password: {
        color: Colors.text,
        padding: 15,
        fontSize: 13,
        //backgroundColor:'#262626',
        borderRadius: 10,
        //marginTop: 7,
        width: 320,
        height:44,
    },
    phoneNo: {
        color: Colors.text,
        padding: 15,
        fontSize: 13,
        marginTop: 7,
        width: 353,
        height:42,
        backgroundColor: '#262626',
        borderRadius: 10,
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