import {View, ViewStyle, DimensionValue} from 'react-native';
import React from 'react';

interface CircleProps {
  size: number;
  color: string;
  style?: ViewStyle | undefined;
  position?: 'absolute' | 'relative' | undefined;
  top?: DimensionValue | undefined;
  left?: DimensionValue | undefined;
  right?: DimensionValue | undefined;
  bottom?: DimensionValue | undefined;
  zIndex?: number | undefined;
}

const Circle: React.FC<Required<CircleProps>> = ({
  size,
  color,
  style,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
}) => {
  return (
    <View
      style={[
        style,
        {
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: size / 2,
          position: position,
          top: top,
          left: left,
          right: right,
          bottom: bottom,
          zIndex: zIndex,
        },
        style,
      ]}
    />
  );
};

export default Circle;
