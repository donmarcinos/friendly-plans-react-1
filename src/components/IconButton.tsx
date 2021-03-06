import React, { SFC } from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { IconProps } from 'react-native-elements';

import { dimensions, palette, typography } from 'styles';
import { Icon } from './Icon';
import { StyledText } from './StyledText';

interface Props extends IconProps {
  label?: string;
  iconButtonStyle?: StyleProp<ViewStyle>;
}

export const IconButton: SFC<Props> = ({ onPress, containerStyle, label, disabled, iconButtonStyle, ...props }) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.container, containerStyle, iconButtonStyle]}>
      <Icon {...props} disabledStyle={styles.iconDisabled} />
      {!!label && <StyledText style={styles.label}>{label}</StyledText>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  label: {
    ...typography.caption,
    textAlign: 'center',
    color: palette.primaryVariant,
    marginLeft: dimensions.spacingTiny,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconDisabled: {
    backgroundColor: 'transparent',
  },
});

IconButton.displayName = 'IconButton';
