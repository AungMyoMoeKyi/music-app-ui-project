import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

function SettingScreen({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.backward}>
                <TouchableOpacity onPress={() => {navigation.navigate('Menu')}}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{ color: Colors.text, marginTop:4,marginLeft:140,fontSize:20,fontWeight:'bold'}}>Setting</Text>
            </View>
            <View style={styles.changeLanguageLayer}>
                <Text style={styles.font}>Change Phone Number</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.contactUsLayer}>
                <Text style={styles.font}>Contact Us</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.feedbackLayer}>
                <Text style={styles.font}>Feedback</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.privacyInfoLayer}>
                <Text style={styles.font}>Privacy Info</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.aboutTableLayer}>
                <Text style={styles.font}>About Table</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
    },
    backward: {
        marginTop: 60,
        flexDirection: 'row',
    },
    font:{
        color:Colors.text,
        fontSize:15,
        //fontFamily:'gotham-medium'
    },
    changeLanguageLayer:{
        marginTop:55,
        marginLeft:15,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    contactUsLayer:{
        marginTop:30,
        marginLeft:15,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    feedbackLayer:{
        marginTop:30,
        marginLeft:15,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    privacyInfoLayer:{
        marginTop:30,
        marginLeft:15,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    aboutTableLayer:{
        marginTop:30,
        marginLeft:15,
        flexDirection:'row',
        justifyContent:'space-between',
    }
})

export default SettingScreen;