import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            nav()
        }, 3000);
    }, [])
    const nav = () => {
        navigation.navigate('Drawer')
    }
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Splash.png')} style={styles.ImgStyle} />
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor:'#246F8D',
            justifyContent: 'center',
            alignItems: 'center'
        },
        ImgStyle:
        {
            height: 200,
            width: '45%'
        }
    }
)

export default Splash