import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from '../screens/styles';
export const ExtrasItem = ({ label, value }) => {
    return (
        <View style={styles.extrasRow}>
            <Text style={styles.extrasLtext}>{label}</Text>
            <Text style={styles.extrasLtext}>{value}</Text>
        </View>
    );
};