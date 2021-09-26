import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/colors';

function ChangeLanguageScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Image source={require('../assets/backward.png')} style={{ marginLeft: 12.18, width: 9.63, height: 15.42 }} />
                </TouchableOpacity>
                <Text style={{ color: Colors.text, fontFamily: 'gotham-bold', fontSize: 13, marginLeft: 26.19 }}>Change Language</Text>
            </View>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.chooseOptionBox} onPress={() => { }}>
                    <Text style={styles.font}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chooseOptionBox} onPress={() => { }}>
                    <Text style={styles.font}>မြန်မာ</Text>
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
    },
    chooseOptionBox: {
        backgroundColor: 'rgba(255, 250, 255, 0.1)',
        width: 353,
        height: 42,
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 18,
        marginHorizontal: 11,
    },
    font: {
        color: Colors.text,
        fontSize: 13,
        marginLeft: 15,
        marginVertical:14,
        fontFamily:'gotham-medium'
    },
})

export default ChangeLanguageScreen;