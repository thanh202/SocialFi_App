import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

interface SectionProps {
  children?: React.ReactNode;
  styleContainer?: ViewStyle | undefined;
}

const Section: React.FC<SectionProps> = ({children, styleContainer}) => {
  return (
    <View style={[{marginHorizontal: 10}, styleContainer]}>{children}</View>
  );
};

const styles = StyleSheet.create({});

export default Section;
