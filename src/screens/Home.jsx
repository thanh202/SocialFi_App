import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Text,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as IconOutline from 'react-native-heroicons/outline';
import {darkMode, lightMode} from '../assets/colors';
import {images} from '../assets/images';
import {dimensions} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {avatarUrl, data} from '../data';
import {headings} from '../styles';

export default function Home() {
  const isDarkMode = useSelector(state => state.theme.darkMode);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: isDarkMode
          ? darkMode.background
          : lightMode.background,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={
            isDarkMode ? darkMode.background : lightMode.background
          }
        />
        {/* header */}
        <View style={{paddingHorizontal: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: dimensions.height * 0.02,
            }}>
            <Image source={images.logo} style={styles.logo} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('profile');
              }}>
              <Image
                source={{
                  uri: avatarUrl,
                }}
                style={[
                  {
                    width: dimensions.width * 0.12,
                    height: dimensions.width * 0.12,
                    borderRadius: dimensions.width * 0.12,
                  },
                ]}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: isDarkMode
                ? darkMode.borderColor
                : lightMode.borderColor,
              borderRadius: 15,
              marginBottom: dimensions.height * 0.03,
              marginHorizontal: dimensions.width * 0.01,
              backgroundColor: isDarkMode
                ? darkMode.inputBackground
                : lightMode.inputBackground,
              paddingHorizontal: 10,
              alignItems: 'center',
            }}>
            <IconOutline.MagnifyingGlassIcon
              color={isDarkMode ? darkMode.textColor : lightMode.textColor}
            />
            <Text
              style={{
                color: isDarkMode
                  ? darkMode.placeholderTextColor
                  : lightMode.placeholderTextColor,
                padding: 10,
                fontSize: headings.h6,
              }}>
              Search ...
            </Text>
          </View>

          {/* horizontal flat */}
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => {
              return (
                <View key={index} style={{marginLeft: dimensions.width * 0.03}}>
                  <Image
                    source={{uri: item.avatar}}
                    style={{
                      width: dimensions.width * 0.16,
                      height: dimensions.width * 0.16,
                      borderRadius: dimensions.width * 0.1,
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
        <Text
          style={{
            fontSize: headings.h3,
            color: isDarkMode ? darkMode.textColor : lightMode.textColor,
            fontWeight: 'bold',
            marginHorizontal: dimensions.width * 0.04,
            marginVertical: dimensions.height * 0.02,
          }}>
          Messages
        </Text>

        <FlatList
          style={{marginHorizontal: dimensions.width * 0.03}}
          data={data}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('chat');
                }}
                key={index}
                style={{
                  flexDirection: 'row',
                  margin: dimensions.width * 0.02,
                }}>
                <Image
                  source={{uri: item.avatar}}
                  style={{
                    width: dimensions.width * 0.12,
                    height: dimensions.width * 0.12,
                    borderRadius: dimensions.width * 0.12,
                  }}
                />
                <View
                  style={{justifyContent: 'center', flex: 1, marginLeft: 10}}>
                  <Text
                    style={{
                      fontSize: headings.h5,
                      color: isDarkMode
                        ? darkMode.textColor
                        : lightMode.textColor,
                      fontWeight: '700',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: headings.h6,
                      color: isDarkMode
                        ? darkMode.textColor
                        : lightMode.textColor,
                      fontWeight: item.isView ? '500' : 'normal',
                    }}>
                    {item.lasterMessage} - time
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: dimensions.width * 0.18,
    height: dimensions.width * 0.18,
    resizeMode: 'cover',
  },
});
