import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Image, Modal, Pressable, Alert } from 'react-native';
import Colors from '../constants/colors';
import { Feather } from '@expo/vector-icons';

function EditMyProfileScreen({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.container}>
                <View style={styles.backward}>
                    <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
                        <Image source={require('../assets/backward.png')} style={{ marginLeft: 12.18, width: 9.63, height: 15.42 }} />
                    </TouchableOpacity>
                    <Text style={{ color: Colors.text, fontFamily: 'gotham-bold', fontSize: 13, marginLeft: 26.19 }}>My Profile</Text>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.backgroundOpacityStyle}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitleText}>Edit Profile Photo</Text>
                            <TouchableOpacity onPress={()=>{}}>
                                <Text style={styles.modalText}>Gallery</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{}}>
                                <Text style={styles.modalText}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{}}>
                                <Text style={styles.modalText}>Remove Photo</Text>
                            </TouchableOpacity>
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Feather name="x" size={30} color="white" style={styles.cancel}/>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <View style={styles.profileImageContainer}>
                    <Image style={styles.profileImage} source={require('../assets/pp.png')} />
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        {/* <Ionicons name="ios-camera" size={30} color="white" style={{ marginLeft: 120 }} /> */}
                        <Image style={{ width: 22.25, height: 16, marginLeft: 105.42, marginTop: 17 }} source={require('../assets/camera.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.boxContainer}>
                    <TextInput placeholder="User Name" placeholderTextColor={Colors.text} style={styles.inputTextContainer} />
                </View>
                <View style={styles.boxContainer}>
                    <TextInput placeholder="09/01/2020" placeholderTextColor={Colors.text} style={styles.inputTextContainer} />
                    <TouchableOpacity onPress={() => { }}>
                        <Image style={{ width: 14, height: 15, marginTop: 14, marginRight: 11 }} source={require('../assets/calendar.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.boxContainer}>
                    <TextInput placeholder="Yangon" placeholderTextColor={Colors.text} style={styles.inputTextContainer} />
                </View>
                <TouchableOpacity style={styles.saveButton} onPress={() => { }}>
                    <Text style={{ fontFamily: 'gotham-bold', fontSize: 21 }}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        //opacity:0.9
    },
    backgroundOpacityStyle:{
        opacity:0.9,
        backgroundColor: '#000000',
        width: '100%',
        height: '100%',
    },
    backward: {
        marginTop: 60,
        flexDirection: 'row',
    },
    profileImageContainer: {
        width: 131.49,
        height: 131.49,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 120,
        marginTop: 40
    },
    profileImage: {
        width: 90.74,
        height: 65.85,
        marginTop: 32.42,
        marginHorizontal: 20
    },
    boxContainer: {
        // width: 285,
        // height: 43,
        flex:1,
        maxHeight:43,
        backgroundColor: '#262626',
        marginTop: 30,
        marginHorizontal: 45,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputTextContainer: {
        color: Colors.text,
        padding: 15,
        fontSize: 13,
        fontFamily: 'gotham-medium'
    },
    saveButton: {
        marginTop: 230,
        backgroundColor: '#ffffff',
        // width: 300,
        // height: 50,
        flex:1,
        maxHeight:50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40
    },
    modalView: {
        marginTop: 250,
        //backgroundColor: "red",
        borderRadius: 20,
        padding: 35,
        alignItems: "center"
      },
      modalTitleText: {
        marginBottom: 21,
        textAlign: "center",
        fontFamily:'gotham-bold',
        fontSize:15,
        color:Colors.text
      },
      modalText:{
        marginBottom: 21,
        textAlign: "center",
        fontFamily:'gotham-light',
        fontSize:15,
        color:Colors.text
      },
      cancel:{
          marginTop:44
      }
})

export default EditMyProfileScreen;