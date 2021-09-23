import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

function AboutTableScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{ color: Colors.text, marginTop: 5,fontFamily:'gotham-bold' }}>About Table</Text>
            </View>
            <View style={styles.aboutContainer}>
                <Text style={styles.font}>Version</Text>
                <Text style={styles.font}>V1.0.1</Text>
            </View>
            <Text style={styles.font}>Rate Table</Text>
            <Text style={styles.font}>Terms of Service</Text>
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
    aboutContainer: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    font: {
        color: Colors.text,
        fontSize: 15,
        marginVertical: 17,
    },
})

export default AboutTableScreen;