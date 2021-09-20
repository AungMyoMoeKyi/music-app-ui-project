import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function ContactUsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{ color: Colors.text, marginTop: 5 }}>Contact Us</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.font}>Call us</Text>
                <TouchableOpacity style={styles.contactContainer} onPress={() => { }}>
                    <MaterialCommunityIcons name="cellphone-iphone" size={24} color="white" style={{marginLeft:10}}/>
                    <Text style={styles.phNo}>+95-2-4334-355</Text>
                </TouchableOpacity>

                <Text style={styles.font}>Mail us</Text>
                <TouchableOpacity style={styles.contactContainer} onPress={() => { }}>
                    <Feather name="mail" size={24} color="white" style={{marginLeft:10}}/>
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
        marginTop: 50,
    },
    font: {
        color: Colors.text,
        fontSize: 15,
    },
    contactContainer:{
        backgroundColor: 'rgba(255, 250, 255, 0.1)',
        width:380,
        height:60,
        borderRadius:10,
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:17,
        marginBottom:30
    },
    phNo:{
        color: Colors.text,
        fontSize: 15,
        marginRight:200,
        marginTop:4
    },
    mail:{
        color: Colors.text,
        fontSize: 15,
        marginRight:165,
        marginTop:4
    }
})

export default ContactUsScreen;