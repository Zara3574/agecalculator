import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from '../screens/styles';
export const CustomCalculator = (props) => {
  return (
    <View>
      <View style={styles.rowWrapper}>
        <Text style={styles.textStyle}>{props.text}</Text>
      </View>
      <View style={styles.ageView}>
        {props.col == 3 ? (
          <View style={styles.ageColumn}>
            <Text style={styles.textStyle}>Years</Text>
            <Text style={styles.innerText}>{props.years}</Text>
          </View>) : null}
        <View style={styles.ageColumn}>
          <Text style={styles.textStyle}>Months</Text>
          <Text style={styles.innerText}>{props.months}</Text>
        </View>
        <View style={styles.ageColumn}>
          <Text style={styles.textStyle}>Days</Text>
          <Text style={styles.innerText}>{props.days}</Text>
        </View>
      </View>
    </View>
  )
}