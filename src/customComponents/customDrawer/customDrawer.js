import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { moderateScale } from 'react-native-size-matters'
import { styles } from '../../screens/styles'
const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#246F8D', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('../../assets/Splash.png')}
                    style={{
                        width: '50%', height: moderateScale(150)
                    }} />
            </View>
            <DrawerContentScrollView {...props} contentContainerStyle={{}} >
                <DrawerItemList {...props} ></DrawerItemList>
            </DrawerContentScrollView>
            <View style={{ padding: 20 }}>
                <Text style={{
                    paddingLeft: 10, fontFamily: 'LibreBaskerville-Bold',
                    fontSize: 17, color: 'black'
                }}>Version 1.1.0</Text>
            </View>
        </View>


    )
}
export default CustomDrawer

