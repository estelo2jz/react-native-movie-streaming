import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';

import { COLORS, FONTS, SIZES } from '../constants';

const Profiles = ({ profiles }) => {
  <View>
    <Text>Profiles</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.black
  }
})

export default Profiles;