import {View, Text, TouchableOpacity, FlatList, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../components/Header';
import * as IconOutline from 'react-native-heroicons/outline';
import * as IconSolid from 'react-native-heroicons/solid';
import {darkMode, lightMode} from '../assets/colors';
import {headings} from '../styles';
import {dimensions} from '../constants';
import {chatdata} from '../data';
import FastImage from 'react-native-fast-image';

export default function Chat() {
  const isDarkMode = useSelector(state => state.theme.darkMode);
  const dispatch = useDispatch();

  const navigation = useNavigation();

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
        <View
          style={{
            marginHorizontal: 8,
            marginVertical: dimensions.height * 0.02,
          }}>
          <Text
            style={{
              fontSize: headings.h3,
              color: isDarkMode ? darkMode.textColor : lightMode.textColor,
              fontWeight: 'bold',
            }}>
            Name
          </Text>
        </View>
      </Header>
      <FlatList
        style={{flex: 1}}
        data={chatdata}
        inverted
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                marginVertical: dimensions.height * 0.01,
                flexDirection: item.uid == 'a' ? 'row-reverse' : 'row',
              }}>
              <FastImage
                source={{uri: item.avatar}}
                style={{
                  width: dimensions.width * 0.1,
                  height: dimensions.width * 0.1,
                  alignSelf: 'flex-end',
                  borderRadius: dimensions.width * 0.1,
                  marginHorizontal: 10,
                }}
              />
              <View
                style={[
                  {
                    flexDirection: item.uid == 'a' ? 'row-reverse' : 'row',
                    maxWidth: dimensions.width * 0.7,

                    borderRadius: 15,
                  },
                  isDarkMode
                    ? {
                        backgroundColor:
                          item.uid == 'a' ? '#7724e3' : 'rgba(74, 74, 74, 0.3)',
                      }
                    : {
                        backgroundColor:
                          item.uid == 'a' ? '#007AFF' : '#F2F2F7',
                      },
                ]}>
                <Text
                  style={[
                    {
                      fontSize: headings.h5,
                      padding: 8,
                    },
                    isDarkMode
                      ? {
                          color: 'white',
                        }
                      : {
                          color:
                            item.uid == 'a' ? 'white' : lightMode.textColor,
                        },
                  ]}>
                  {item.content}
                </Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 20,
          marginBottom: dimensions.height * 0.01,
          backgroundColor: isDarkMode
            ? darkMode.inputBackground
            : lightMode.inputBackground,
          paddingHorizontal: 8,
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{backgroundColor: '#0085FF', borderRadius: 50, padding: 7}}>
          <IconSolid.CameraIcon color={'white'} />
        </TouchableOpacity>
        <TextInput
          placeholder="Enter message"
          placeholderTextColor={
            isDarkMode
              ? darkMode.placeholderTextColor
              : lightMode.placeholderTextColor
          }
          cursorColor={isDarkMode ? darkMode.textColor : lightMode.textColor}
          style={{
            flex: 1,
            fontSize: headings.h5,
            color: isDarkMode ? darkMode.textColor : lightMode.textColor,
          }}
        />
        <TouchableOpacity>
          <IconOutline.MicrophoneIcon
            color={isDarkMode ? darkMode.textColor : lightMode.textColor}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal: 5}}>
          <IconOutline.PhotoIcon
            color={isDarkMode ? darkMode.textColor : lightMode.textColor}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <IconOutline.FaceSmileIcon
            color={isDarkMode ? darkMode.textColor : lightMode.textColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
