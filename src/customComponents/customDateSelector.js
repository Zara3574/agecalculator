import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../screens/styles';

export const CustomDateselector = ({ textleft, textright, date,onpress }) => {
    const currentDate = new Date(date);
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based in JavaScript
    const year = currentDate.getFullYear();

    return (
        <View>
            <View style={styles.rowWrapper}>
                <Text style={styles.textStyle}>{textleft}</Text>
                <Text style={styles.textStyle}>{textright}</Text>
            </View>
            <View style={styles.borderedWrapper}>
                <Text style={styles.innerText}>{day < 10 ? `0${day}` : day}</Text>
                <Text style={styles.innerText}>{month < 10 ? `0${month}` : month}</Text>
                <Text style={styles.innerText}>{year}</Text>
                <TouchableOpacity onPress={onpress}>
                    <Icon name="calendar" size={25} color="black" />
                </TouchableOpacity>

            </View>
        </View>
    );
}
