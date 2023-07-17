import { TextInput, View, StyleProp, Text, ColorValue } from "react-native";
import React from "react";

import style from './InputFields.style'

interface IInputFieldsProps {
  value: string;
  placeholder?: string;
  title?: string;
  styleProps?: StyleProp<any>
  placeholderColor?: ColorValue;
  onFocus?: () => void;
  onChangeValue: (value: string) => void;
}

function InputFields(props: IInputFieldsProps) {
  const {
    value,
    placeholder,
    title,
    styleProps,
    placeholderColor,
    onFocus,
    onChangeValue
  } = props;

  return (
    <View style={styleProps?.container}>
      {title && <Text style={[style.title, styleProps?.title]}>{title}</Text> }

      <TextInput
        value={value}
        placeholder={placeholder}
        style={[style.input, styleProps?.inputs]}
        placeholderTextColor={placeholderColor || style.input.color}
        onFocus={onFocus}
        onChangeText={onChangeValue}
      />
    </View>
  );
}

export default InputFields;
