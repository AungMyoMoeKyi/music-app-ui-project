import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

function ChangePasswordScreen({ navigation }) {

    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(true);

    const [show1, setShow1] = useState(false);
    const [visible1, setVisible1] = useState(true);

    const [show2, setShow2] = useState(false);
    const [visible2, setVisible2] = useState(true);

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
                    <Text style={{ color: Colors.text, fontFamily: 'gotham-bold', fontSize: 13, marginLeft: 25.19,marginBottom:53 }}>Change Password</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.font}>Enter your old password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            secureTextEntry={visible} style={styles.password}
                        />
                        <TouchableOpacity onPress={() => { setShow(!show), setVisible(!visible) }}>
                            <Ionicons name={show === false ? 'ios-eye-off' : 'ios-eye'} size={18} color="white" style={{ marginVertical: 13, marginRight: 18.21}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.font}>Enter new password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            secureTextEntry={visible1} style={styles.password}
                        />
                        <TouchableOpacity onPress={() => { setShow1(!show1), setVisible1(!visible1) }}>
                            <Ionicons name={show1 === false ? 'ios-eye-off' : 'ios-eye'} size={18} color="white" style={{ marginVertical: 13, marginRight: 18.21 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.font}>Enter confirm password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            secureTextEntry={visible2} style={styles.password}
                        />
                        <TouchableOpacity onPress={() => { setShow2(!show2), setVisible2(!visible2) }}>
                            <Ionicons name={show2 === false ? 'ios-eye-off' : 'ios-eye'} size={18} color="white" style={{ marginVertical: 13, marginRight: 18.21 }} />
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
        marginHorizontal: 11,
        marginBottom:35
    },
    passwordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#262626',
        marginTop: 7,
        borderRadius: 10,
        width:353,
        height:42,
    },
    password: {
        color: Colors.text,
        padding: 15,
        fontSize: 13,
        //marginTop: 10,
        //backgroundColor: '#262626',
        borderRadius: 10,
        width:320,
        height:44,
    },
    saveButton: {
        marginTop: 297,
        backgroundColor: '#ffffff',
        width: 285,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 45
    },
})

export default ChangePasswordScreen;