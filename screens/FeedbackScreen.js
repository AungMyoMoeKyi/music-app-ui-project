import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function FeedbackScreen({ navigation }) {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.container}>
                <View style={styles.backward}>
                    <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                        <Ionicons name="chevron-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={{ color: Colors.text, marginTop: 5 }}>Feedback</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.font}>Rate Your Experience</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 40 }}>
                        <Entypo name="star" size={24} color="red" />
                        <Entypo name="star" size={24} color="red" />
                        <Entypo name="star" size={24} color="red" />
                        <Entypo name="star" size={24} color="white" />
                        <Entypo name="star" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.font}>Description</Text>
                    <TextInput numberOfLines={30} multiline={true} style={styles.descriptionTextBox} />
                </View>
                <TouchableOpacity style={styles.saveButton} onPress={() => { }}>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
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
        marginTop: 40,
        padding: 12
    },
    font: {
        color: Colors.text,
        fontSize: 15,
        marginBottom: 12
    },
    descriptionTextBox: {
        width: 350,
        height: 300,
        backgroundColor: 'rgba(255, 250, 255, 0.1)',
        borderRadius: 10,
        color: Colors.text
    },
    saveButton: {
        marginTop: 150,
        backgroundColor: '#ffffff',
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40
    }
})

export default FeedbackScreen;