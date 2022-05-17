import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import defaultStyles from '../config/styles';
import colors from '../config/colors';

function TextLink({title, style, onPress}) {
    return (
      <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
          <Text style={[defaultStyles.text, style,]}>{title}</Text>
      </TouchableHighlight>
    );
}


export default TextLink;