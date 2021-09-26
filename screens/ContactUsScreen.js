import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Colors from '../constants/colors';

function ContactUsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Image source={require('../assets/backward.png')} style={{ marginLeft: 12.18, width: 9.63, height: 15.42 }} />
                </TouchableOpacity>
                <Text style={{ color: Colors.text, fontFamily: 'gotham-bold', fontSize: 13, marginLeft: 26.19 }}>Contact Us</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.font}>Call us</Text>
                <TouchableOpacity style={styles.contactContainer} onPress={() => { }}>
                    <Image style={{width:15.44,height:25.73,marginLeft:21.42,marginTop:7.83,marginBottom:8.45}} source={require('../assets/phone.png')}/>
                    <Text style={styles.phNo}>+95-2-4334-355</Text>
                </TouchableOpacity>

                <Text style={styles.font}>Mail us</Text>
                <TouchableOpacity style={styles.contactContainer} onPress={() => { }}>
                    <Image style={{width:25.73,height:15.44,marginLeft:16.16,marginTop:13.21,marginBottom:17.4}} source={require('../assets/mail.png')}/>
                    <Text style={styles.mail}>contactus@table.com</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        marginLeft:11
    },
    font: {
        color: Colors.text,
        fontSize: 13,
        fontFamily:'gotham-book'
    },
    contactContainer: {
        backgroundColor: '#262626',
        width: 353,
        height: 42,
        borderRadius: 10,
        marginTop: 7,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //padding: 10,
    },
    phNo: {
        color: Colors.text,
        fontSize: 13,
        marginRight: 185,
        marginVertical:14,
        marginLeft:17.15,
        fontFamily:'gotham-book'
    },
    mail: {
        color: Colors.text,
        fontSize: 13,
        marginRight: 165,
        marginLeft: 20.27,
        marginTop:13.21,
        marginBottom:14.79,
        fontFamily:'gotham-book'
    }
})

export default ContactUsScreen;