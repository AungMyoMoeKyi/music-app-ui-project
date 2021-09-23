import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function EditMyProfileScreen({ navigation }) {
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
                    <Text style={{ color: Colors.text, marginTop: 5,fontFamily:'gotham-bold'}}>My Profile</Text>
                </View>
                <View style={styles.profileImageContainer}>
                    <FontAwesome5 name="user-circle" size={80} color="white" style={{ padding: 20 }} />
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons name="ios-camera" size={30} color="white" style={{ marginLeft: 120 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.boxContainer}>
                    <TextInput placeholder="User Name" placeholderTextColor={Colors.text} style={styles.inputTextContainer} />
                </View>
                <View style={styles.boxContainer}>
                    <TextInput placeholder="09/01/2020" placeholderTextColor={Colors.text} style={styles.inputTextContainer} />
                    <TouchableOpacity onPress={() => { }}>
                        <Feather name="calendar" size={24} color="white" style={{ marginRight: 10, marginTop: 10 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.boxContainer}>
                    <TextInput placeholder="States/Regions" placeholderTextColor={Colors.text} style={styles.inputTextContainer} />
                </View>
                <TouchableOpacity style={styles.saveButton} onPress={() => { }}>
                    <Text style={{fontFamily:'gotham-bold'}}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
    },
    backward: {
        marginTop: 60,
        flexDirection: 'row',
    },
    profileImageContainer: {
        width: 150,
        height: 150,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 120,
        marginTop: 40
    },
    profileImage: {
        width: 57,
        height: 12,
    },
    boxContainer: {
        width: 326,
        height: 48,
        backgroundColor: '#262626',
        marginTop: 30,
        marginLeft: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputTextContainer: {
        color: Colors.text,
        padding: 15,
        fontSize: 15
    },
    saveButton: {
        marginTop: 230,
        backgroundColor: '#ffffff',
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40
    },
})

export default EditMyProfileScreen;