import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { CustomDateselector } from '../customComponents/customDateSelector';
import { CustomCalculator } from '../customComponents/customCalculator';
import { ExtrasItem } from '../customComponents/extrasItem';
import DateTimePicker from '@react-native-community/datetimepicker';

const Home = () => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [birthday, setBirthday] = useState(new Date('2000-01-01'));
  const [show, setShow] = useState(false);
  const [dateField, setDateField] = useState('');
  const [ageDetails, setAgeDetails] = useState({
    years: '0',
    months: '0',
    days: '0',
    weeks: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  });
  const [completeAge, setCompleteAge] = useState({
    years: '0',
    months: '0',
    days: '0'
  });
  const [remainingTime, setRemainingTime] = useState({
    months: '0',
    days: '0'
  });

  const showMode = (field) => {
    setDateField(field);
    setShow(true);
  };
  const handletermsandcondition = () => {
    Linking.openURL('https://drive.google.com/file/d/1kYMAsb0m8mM8DT0Y-YdX6889dQeAn_JO/view');
  };
  const handleprivacypolicy = () => {
    Linking.openURL('https://drive.google.com/file/d/1kYMAsb0m8mM8DT0Y-YdX6889dQeAn_JO/view');
  };


  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate !== undefined) {
      if (dateField === 'today') {
        setSelectedDate(selectedDate);
        calculateAge(selectedDate, birthday);
      } else if (dateField === 'birthday') {
        setBirthday(selectedDate);
        calculateAge(currentDate, selectedDate);
      }
    }
  };

  const calculateAge = (currentDate, birthday) => {
    // Calculate age in years, months, and days
    let ageYears = currentDate.getFullYear() - birthday.getFullYear();
    let ageMonths = currentDate.getMonth() - birthday.getMonth();
    let ageDays = currentDate.getDate() - birthday.getDate();

    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }

    setCompleteAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays
    });

    // Calculate the next birthday
    const nextBirthdayYear = (currentDate.getMonth() > birthday.getMonth() || (currentDate.getMonth() === birthday.getMonth() && currentDate.getDate() > birthday.getDate()))
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear();

    const nextBirthday = new Date(nextBirthdayYear, birthday.getMonth(), birthday.getDate());

    let remainingMonths = nextBirthday.getMonth() - currentDate.getMonth();
    let remainingDays = nextBirthday.getDate() - currentDate.getDate();

    if (remainingDays < 0) {
      remainingMonths -= 1;
      remainingDays += new Date(nextBirthday.getFullYear(), nextBirthday.getMonth(), 0).getDate();
    }

    if (remainingMonths < 0) {
      remainingMonths += 12;
    }

    setRemainingTime({
      months: remainingMonths,
      days: remainingDays
    });

    const diffTime = Math.abs(currentDate - birthday);
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    const diffSeconds = Math.floor(diffTime / 1000);

    setAgeDetails({
      years: ageYears,
      months: ageYears * 12 + ageMonths,
      weeks: diffWeeks,
      days: Math.floor(diffTime / (1000 * 60 * 60 * 24)),
      hours: diffHours,
      minutes: diffMinutes,
      seconds: diffSeconds
    });
  };

  return (
    <View style={styles.container}>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dateField === 'today' ? selectedDate : birthday}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
          neutralButton={{ label: 'Today', textColor: 'grey' }}
          maximumDate={new Date()}
          style={styles.datePicker}
        />
      )}

      <CustomDateselector
        textleft={"Today Date"}
        textright={selectedDate.toLocaleDateString('en-US', { weekday: 'long' })}
        date={selectedDate}
        onpress={() => showMode('today')}
      />
      <CustomDateselector
        textleft="Your Birthday"
        textright={birthday.toLocaleDateString('en-US', { weekday: 'long' })}
        date={birthday}
        onpress={() => showMode('birthday')}
      />
      <CustomCalculator text={`Age`} col={3} years={completeAge.years} months={completeAge.months} days={completeAge.days}/>
      <CustomCalculator text={`Next Birthday:`} col={2} months={remainingTime.months} days={remainingTime.days}/>
      <View style={styles.rowWrapper}>
        <Text style={styles.textStyle}>Extra</Text>
      </View>
      <View style={styles.extrasWrapper}>
        <ExtrasItem label="Total Years" value={ageDetails.years} />
        <ExtrasItem label="Total Months" value={ageDetails.months} />
        <ExtrasItem label="Total Weeks" value={ageDetails.weeks} />
        <ExtrasItem label="Total Days" value={ageDetails.days} />
        <ExtrasItem label="Total Hours" value={ageDetails.hours} />
        <ExtrasItem label="Total Minutes" value={ageDetails.minutes} />
        <ExtrasItem label="Total Seconds" value={ageDetails.seconds} />
      </View>
    </View>
  );
};

export default Home;
