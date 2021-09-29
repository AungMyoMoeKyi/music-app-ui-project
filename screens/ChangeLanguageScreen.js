import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/colors';
import { AntDesign } from '@expo/vector-icons';

function ChangeLanguageScreen({ navigation }) {
    const [englishShow, setEnglishShow] = useState(true);
    const [mynShow, setMynShow] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Image source={require('../assets/backward.png')} style={{ marginLeft: 12.18, width: 9.63, height: 15.42 }} />
                </TouchableOpacity>
                <Text style={{ color: Colors.text, fontFamily: 'gotham-bold', fontSize: 13, marginLeft: 26.19 }}>Change Language</Text>
            </View>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.chooseOptionBox} onPress={() => { setEnglishShow(!englishShow),setMynShow(!mynShow) }}>
                    <Text style={styles.font}>English</Text>
                    <AntDesign name={englishShow===true ? "check" : ""} size={11,11} color="white" style={{marginTop:16,marginRight:15}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chooseOptionBox} onPress={() => {setMynShow(!mynShow),setEnglishShow(!englishShow)}}>
                    <Text style={styles.font}>မြန်မာ</Text>
                    <AntDesign name={mynShow===true ? "check" : ""} size={11,11} color="white" style={{marginTop:16,marginRight:15}}/>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginBottom: 18,
        marginHorizontal: 11,
    },
    font: {
        color: Colors.text,
        fontSize: 13,
        marginLeft: 15,
        marginVertical: 14,
        fontFamily: 'gotham-medium'
    },
})

export default ChangeLanguageScreen;