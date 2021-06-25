import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { COLORS, SIZES } from '../constants';

const ProgressBar = ({ containerStyle, barStyle, barPercentage }) => {
  return (
    <View style={{ ...containerStyle, marginBottom: 40 }}>
      <View 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: "100%",
          marginTop: SIZES.base,
          backgroundColor: COLORS.gray,
          ...barStyle
        }}
      ></View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: barPercentage,
          marginTop: SIZES.base,
          backgroundColor: COLORS.primary,
          ...barStyle,
        }}
      ></View>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ProgressBar

