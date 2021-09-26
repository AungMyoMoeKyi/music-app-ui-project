import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function MenuScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/backward.png')} style={{ marginLeft: 12.18, width: 9.63, height: 15.42 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.profileInfoContainer}>
                <View style={styles.profileImage}>
                    <TouchableOpacity onPress={() => { }}>
                        {/* <FontAwesome5 name="user-circle" size={80} color="white" /> */}
                        <Image style={{ width: 59, height: 59 }} source={require('../assets/userProfile.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={{ color: Colors.text, fontSize: 14 }}>Name      :   User Name</Text>
                    <Text style={{ color: Colors.text, fontSize: 14, paddingTop: 8 }}>Table ID   :   01343434343</Text>
                </View>
            </View>
            <View>
                <View style={styles.myProfileLayer}>
                    <Text style={styles.font}>My Profile</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
                        <Image source={require('../assets/forward.png')} style={{ marginRight: 13.17, width: 9.61, height: 15.37 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.paymentLayer}>
                    <Text style={styles.font}>Payment</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../assets/forward.png')} style={{ marginRight: 13.17, width: 9.61, height: 15.37 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.themeLayer}>
                    <Text style={styles.font}>Theme Change</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={require('../assets/forward.png')} style={{ marginRight: 13.17, width: 9.61, height: 15.37 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.settingLayer}>
                    <Text style={styles.font}>Setting</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                        <Image source={require('../assets/forward.png')} style={{ marginRight: 13.17, width: 9.61, height: 15.37 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.logout} onPress={() => { }}>
                <Text style={{ fontFamily: 'gotham-bold', color: Colors.text, fontSize: 13 }}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000'
    },
    backward: {
        marginTop: 60,
    },
    profileInfoContainer: {
        width: 246,
        height: 59,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 65,
        marginTop: 27,
    },
    profileImage: {

    },
    infoContainer: {
        width: 168,
        height: 40,
        marginTop: 8,
        marginBottom: 11,
        marginLeft: 19,
    },
    myProfileLayer: {
        marginTop: 68,
        marginLeft: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    paymentLayer: {
        marginLeft: 11,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    themeLayer: {
        marginLeft: 11,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    settingLayer: {
        marginLeft: 11,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    font: {
        color: Colors.text,
        fontSize: 12,
        fontFamily: 'gotham-light'
    },
    logout: {
        backgroundColor: '#E50914',
        width: 219,
        height: 38,
        marginTop: 350,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 78,
        borderRadius: 20
    }
})

export default MenuScreen;