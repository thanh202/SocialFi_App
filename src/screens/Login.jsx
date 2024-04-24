import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {getContainerScreen, globalStyles, headings} from '../styles';
import {images} from '../assets/images';
import {darkMode, lightMode} from '../assets/colors';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

export default function Login() {
  const navigation = useNavigation();

  const isDarkMode = useSelector(state => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkMode
          ? darkMode.background
          : lightMode.background,
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={
          isDarkMode ? darkMode.background : lightMode.background
        }
      />
      <View style={[styles.centerContainer]}>
        <Image source={images.logo} />
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <TouchableOpacity
          style={[
            styles.buttonConnectWallet,
            {
              borderColor: isDarkMode
                ? darkMode.borderColor
                : lightMode.borderColor,
            },
          ]}
          onPress={() => {
            navigation.replace('home');
          }}>
          <Text
            style={[
              styles.textButton,
              {color: isDarkMode ? darkMode.textColor : lightMode.textColor},
            ]}>
            Connect to wallet
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonConnectWallet: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  textButton: {
    fontSize: headings.h5,
  },
});
