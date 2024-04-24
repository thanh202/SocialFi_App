import {
  View,
  Pressable,
  StyleSheet,
  Animated,
  Easing,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../redux/action/ThemeAction';
import {darkMode, lightMode} from '../assets/colors';
import {Header} from '../components/Header';
import * as IconOutline from 'react-native-heroicons/outline';
import {dimensions} from '../constants';
import {headings} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {avatarUrl} from '../data';
import Section from '../components/Section';

export default function Profile() {
  const [animation] = useState(new Animated.Value(0));

  const isDarkMode = useSelector(state => state.theme.darkMode);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isDarkMode ? 1 : 0,
      duration: 300,
      easing: isDarkMode ? Easing.out(Easing.ease) : Easing.in(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [isDarkMode]);

  const toggleSwitch = () => {
    dispatch(toggleTheme());
  };

  const innerStyle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 25],
        }),
      },
    ],
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode
          ? darkMode.background
          : lightMode.background,
      }}>
      <Header styleContainer={{paddingVertical: 0}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <IconOutline.ChevronLeftIcon
            color={isDarkMode ? darkMode.textColor : lightMode.textColor}
            size={30}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: headings.h3,
            color: isDarkMode ? darkMode.textColor : lightMode.textColor,
            fontWeight: 'bold',
            marginHorizontal: 8,
            marginVertical: dimensions.height * 0.02,
          }}>
          Setting
        </Text>
      </Header>

      <Section styleContainer={{alignItems: 'center'}}>
        <Image
          source={{
            uri: avatarUrl,
          }}
          style={[
            {
              width: dimensions.width * 0.25,
              height: dimensions.width * 0.25,
              borderRadius: dimensions.width * 0.25,
            },
          ]}
        />
        <Text
          style={{
            fontSize: headings.h3,
            fontWeight: '600',
            color: isDarkMode ? darkMode.textColor : lightMode.textColor,
            marginTop: dimensions.height * 0.01,
          }}>
          Vanh
        </Text>
      </Section>

      <Section
        styleContainer={{
          marginVertical: dimensions.height * 0.02,
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: isDarkMode
              ? darkMode.borderColor
              : lightMode.borderColor,
            borderRadius: 10,
            alignItems: 'center',
            paddingHorizontal: 8,
          }}>
          {isDarkMode ? (
            <IconOutline.MoonIcon
              color={isDarkMode ? darkMode.textColor : lightMode.textColor}
            />
          ) : (
            <IconOutline.SunIcon
              color={isDarkMode ? darkMode.textColor : lightMode.textColor}
            />
          )}
          <Text
            style={{
              flex: 1,
              fontSize: headings.h5,
              color: isDarkMode ? darkMode.textColor : lightMode.textColor,
              fontWeight: '400',
              marginHorizontal: 8,
              marginVertical: dimensions.height * 0.02,
            }}>
            Change {isDarkMode ? 'light' : 'dark'} mode
          </Text>
          <Pressable
            onPress={toggleSwitch}
            style={[
              styles.outter,
              isDarkMode
                ? {backgroundColor: '#04cc3a'}
                : {backgroundColor: 'gray'},
            ]}>
            <Animated.View style={[styles.inner, innerStyle]} />
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            console.log('Press');
          }}
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: isDarkMode
              ? darkMode.borderColor
              : lightMode.borderColor,
            borderRadius: 10,
            marginTop: dimensions.height * 0.01,
            alignItems: 'center',
            paddingHorizontal: 8,
          }}>
          <IconOutline.UserCircleIcon
            color={isDarkMode ? darkMode.textColor : lightMode.textColor}
          />
          <Text
            style={{
              flex: 1,
              fontSize: headings.h5,
              color: isDarkMode ? darkMode.textColor : lightMode.textColor,
              fontWeight: '400',
              marginHorizontal: 8,
              marginVertical: dimensions.height * 0.02,
            }}>
            Change account
          </Text>
        </Pressable>
      </Section>
      <Section styleContainer={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'login'}],
            });
          }}
          style={{
            borderRadius: 8,
            padding: 10,
            backgroundColor: isDarkMode ? darkMode.error : lightMode.error,
          }}>
          <Text style={{fontSize: headings.h4, color: 'white'}}>Logout</Text>
        </TouchableOpacity>
      </Section>
    </View>
  );
}

const styles = StyleSheet.create({
  outter: {
    width: 55,
    borderRadius: 30,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inner: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
});
