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
                        <Ionicons name="chevron-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={{ color: Colors.text, marginTop: 5 }}>Change Password</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.font}>Enter your old password</Text>
                    <View style={styles.inputControls}>
                        <TextInput
                            secureTextEntry={visible}  style={styles.inputTextContainer}
                        />
                        <TouchableOpacity onPress={() => {setShow(!show),setVisible(!visible)}}>
                            <Ionicons name={show===false?'ios-eye-off' : 'ios-eye'} size={24} color="white" style={{marginTop:20,marginRight:10}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.font}>Enter new password</Text>
                    <View style={styles.inputControls}>
                        <TextInput
                            secureTextEntry={visible1}  style={styles.inputTextContainer}
                        />
                        <TouchableOpacity onPress={() => {setShow1(!show1),setVisible1(!visible1)}}>
                            <Ionicons name={show1===false?'ios-eye-off' : 'ios-eye'} size={24} color="white" style={{marginTop:20,marginRight:10}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.font}>Enter confirm password</Text>
                    <View style={styles.inputControls}>
                        <TextInput
                            secureTextEntry={visible2}  style={styles.inputTextContainer}
                        />
                        <TouchableOpacity onPress={() => {setShow2(!show2),setVisible2(!visible2)}}>
                            <Ionicons name={show2===false?'ios-eye-off' : 'ios-eye'} size={24} color="white" style={{marginTop:20,marginRight:10}}/>
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
        marginTop: 40,
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
        backgroundColor:'#262626',
        borderRadius:10
    },
    saveButton: {
        marginTop: 280,
        backgroundColor: '#ffffff',
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40
    },
})

export default ChangePasswordScreen;