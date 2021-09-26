import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/colors';

function SettingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => { navigation.navigate('Menu') }}>
                    <Image source={require('../assets/backward.png')} style={{ marginLeft: 12.18, width: 9.63, height: 15.42 }} />
                </TouchableOpacity>
                <Text style={{ color: Colors.text, fontSize: 13, fontFamily: 'gotham-bold', marginLeft: 26.19 }}>Setting</Text>
            </View>
            <View style={styles.changeLanguageLayer}>
                <Text style={styles.font}>Change Language</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('ChangeLanguage') }}>
                    <Image source={require('../assets/forward.png')} style={{ marginRight: 13.17, width: 9.61, height: 15.37 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.contactUsLayer}>
                <Text style={styles.font}>Contact Us</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('ContactUs') }}>
                    <Image source={require('../assets/forward.png')} style={{ marginRight: 13.17, width: 9.61, height: 15.37 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.feedbackLayer}>
                <Text style={styles.font}>Feedback</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Feedback') }}>
                    <Image source={require('../assets/forward.png')} style={{ marginRight: 13.17, width: 9.61, height: 15.37 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.privacyInfoLayer}>
                <Text style={styles.font}>Privacy Info</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('PrivacyPolicy') }}>
                    <Image source={require('../assets/forward.png')} style={{ marginRight: 13.17, width: 9.61, height: 15.37 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.aboutTableLayer}>
                <Text style={styles.font}>About Table</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('AboutTable') }}>
                    <Image source={require('../assets/forward.png')} style={{ marginRight: 13.17, width: 9.61, height: 15.37 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

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
    font: {
        color: Colors.text,
        fontSize: 12,
        fontFamily: 'gotham-light',
    },
    changeLanguageLayer: {
        marginTop: 53,
        marginLeft: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contactUsLayer: {
        marginTop: 30,
        marginLeft: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    feedbackLayer: {
        marginTop: 28,
        marginLeft: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    privacyInfoLayer: {
        marginTop: 29.96,
        marginLeft: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    aboutTableLayer: {
        marginTop: 28.18,
        marginLeft: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default SettingScreen;