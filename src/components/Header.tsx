import {View, Text, ViewStyle} from 'react-native';
import React from 'react';

interface HeaderProps {
  children?: React.ReactNode;
  styleContainer?: ViewStyle | undefined;
}

export const Header: React.FC<HeaderProps> = ({children, styleContainer}) => {
  return (
    <View
      style={[
        {flexDirection: 'row', padding: 8, alignItems: 'center'},
        styleContainer,
      ]}>
      {children}
    </View>
  );
};
