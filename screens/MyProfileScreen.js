import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function MyProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{ color: Colors.text, marginTop: 5 }}>My Profile</Text>
            </View>
            <View style={styles.profileImageContainer}>
                <FontAwesome5 name="user-circle" size={80} color="white" />
            </View>
            <View style={styles.boxContainer}>
                <Text style={styles.textContainer}>User Name</Text>
            </View>
            <View style={styles.boxContainer}>
                <Text style={styles.textContainer}>09/01/2020</Text>
            </View>
            <View style={styles.boxContainer}>
                <Text style={styles.textContainer}>States/Regions</Text>
            </View>
            <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditMyProfile')}>
                <Text>EDIT</Text>
            </TouchableOpacity>
            <View style={styles.changePhoneNoLayer}>
                <Text style={styles.font}>Change Phone Number</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ChangePhoneNo')}>
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.changePasswordLayer}>
                <Text style={styles.font}>Change Password</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
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
        marginLeft: 30
    },
    textContainer: {
        color: Colors.text,
        padding: 15,
        fontSize: 15
    },
    editButton: {
        marginTop: 50,
        backgroundColor: '#ffffff',
        width: 120,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '34%'
    },
    font:{
        color:Colors.text,
        fontSize:15,
        //fontFamily:'gotham-medium'
    },
    changePhoneNoLayer:{
        marginTop:60,
        marginLeft:15,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    changePasswordLayer:{
        marginTop:35,
        marginLeft:15,
        flexDirection:'row',
        justifyContent:'space-between',
    }
});

export default MyProfileScreen;