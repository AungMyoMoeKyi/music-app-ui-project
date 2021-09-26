import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Colors from '../constants/colors';

function MyProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image source={require('../assets/backward.png')} style={{ marginLeft: 12.18, width: 9.63, height: 15.42 }} />
                </TouchableOpacity>
                <Text style={{ color: Colors.text, fontFamily: 'gotham-bold', fontSize: 13, marginLeft: 26.19 }}>My Profile</Text>
            </View>
            <View style={styles.profileImageContainer}>
                {/* <FontAwesome5 name="user-circle" size={80} color="white" /> */}
                <Image style={{ width: 90.74, height: 65.85 }} source={require('../assets/pp.png')} />
            </View>
            <View style={styles.boxContainer}>
                <Text style={styles.textContainer}>User Name</Text>
            </View>
            <View style={styles.boxContainer}>
                <Text style={styles.textContainer}>09/01/2020</Text>
            </View>
            <View style={styles.boxContainer}>
                <Text style={styles.textContainer}>Yangon</Text>
            </View>
            <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditMyProfile')}>
                <Text style={{ fontFamily: 'gotham-bold' }}>EDIT</Text>
            </TouchableOpacity>
            <View style={styles.changePhoneNoLayer}>
                <Text style={styles.font}>Change Phone Number</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ChangePhoneNo')}>
                    <Image source={require('../assets/forward.png')} style={{ marginRight: 13.17, width: 9.61, height: 15.37 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.changePasswordLayer}>
                <Text style={styles.font}>Change Password</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                    <Image source={require('../assets/forward.png')} style={{ marginRight: 13.17, width: 9.61, height: 15.37 }} />
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
        width: 131.49,
        height: 131.49,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 122,
        marginTop: 28.91
    },
    profileImage: {
        width: 57,
        height: 12,
    },
    boxContainer: {
        width: 285,
        height: 43,
        backgroundColor: '#262626',
        marginTop: 35,
        marginHorizontal: 45
    },
    textContainer: {
        color: Colors.text,
        padding: 15,
        fontSize: 13,
        fontFamily: 'gotham-medium'
    },
    editButton: {
        marginTop: 35,
        backgroundColor: '#D4D4D4',
        width: 96,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 140
    },
    font: {
        color: Colors.text,
        fontSize: 12,
        fontFamily: 'gotham-light'
    },
    changePhoneNoLayer: {
        marginTop: 143,
        marginLeft: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    changePasswordLayer: {
        marginTop: 29.45,
        marginLeft: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default MyProfileScreen;