import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import MyProfileScreen from './screens/MyProfileScreen';
import SettingScreen from './screens/SettingScreen';
import EditMyProfileScreen from './screens/EditMyProfileScreen';
import ChangePhoneNoScreen from './screens/ChangePhoneNoScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import ChangeLanguageScreen from './screens/ChangeLanguageScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import AboutTableScreen from './screens/AboutTableScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import AlbumSongsScreen from './screens/AlbumSongsScreen';
import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "gotham-bold": require("./assets/fonts/Gotham-Bold.otf"),
    "gotham-light": require("./assets/fonts/Gotham-Light.otf"),
    "gotham-medium": require("./assets/fonts/GothamMedium.ttf"),
  });
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MyProfile" component={MyProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="EditMyProfile" component={EditMyProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ChangePhoneNo" component={ChangePhoneNoScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ChangeLanguage" component={ChangeLanguageScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ContactUs" component={ContactUsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AboutTable" component={AboutTableScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Feedback" component={FeedbackScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AlbumSongs" component={AlbumSongsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1 
  },
});
