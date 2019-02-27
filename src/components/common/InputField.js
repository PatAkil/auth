import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { gray } from 'ansi-colors';

const InputField = ({ label, value, onChangeText, autoCorrect, placeholder }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <View>

      <TextInput
        placeholder={placeholder}
        autoCorrect={autoCorrect}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}

        />
      </View>
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: .5,

  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export { InputField };
