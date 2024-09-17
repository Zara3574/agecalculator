import { StyleSheet } from "react-native";
import {  verticalScale, moderateScale } from 'react-native-size-matters';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: moderateScale(11),
  },
  textStyle: {
    color: 'black',
    fontSize: 20,
    fontFamily:'Mali-Bold'
  },
  borderedWrapper: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(10),
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(18),
    alignItems: 'center',
    padding:3,

  },
  innerText: {
    color: 'black',
    fontSize: 22,
    fontFamily:'LibreBaskerville-Bold',
    paddingHorizontal: moderateScale(5),
    padding:10
  },
  ageView: {
    flexDirection: 'row',
    borderWidth: 1,
    marginHorizontal: moderateScale(10),
    borderRadius: 10,
    justifyContent: 'space-around',
  },
  ageColumn: {
    alignItems: 'center',
  },
  extrasWrapper: {
    marginHorizontal: moderateScale(10),
    padding: moderateScale(5),
    borderWidth: 1,
    borderRadius: 10,
  },
  extrasRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  extrasLtext: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Mali-Medium'
  },
 
 
});
