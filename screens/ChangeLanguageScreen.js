import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

function ChangeLanguageScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{ color: Colors.text, marginTop: 5 }}>Change Language</Text>
            </View>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.chooseOptionBox} onPress={()=>{}}>
                    <Text style={styles.font}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chooseOptionBox} onPress={()=>{}}>
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
    inputContainer:{
        marginTop:50
    },
    chooseOptionBox:{
        backgroundColor: 'rgba(255, 250, 255, 0.1)',
        width:380,
        height:60,
        justifyContent:'center',
        borderRadius:10,
        marginVertical:10
    },
    font:{
        color:Colors.text,
        fontSize:15,
        marginLeft:10
        //fontFamily:'gotham-medium'
    },
})

export default ChangeLanguageScreen;