import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ProgressBar, RadioButton } from 'react-native-paper';
import { newUserVar } from '../../client';
import FloatingCard from '../../components/FloatingCard';
import TextButton from '../../components/TextButton';

export interface SignupScreenProps {
  navigation: any;
  route: any;
}

const Genders = [
  {name: 'Female', id: '0'}, {name: 'Male', id: '1'}, {name: 'Other', id: '2'}
]

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const [checked, setChecked] = useState<string>('FEMALE');
  const [show, setShow] = useState(false);
  const [datePickerTouched, setDatePickerTouched] = useState(false);
  const [date, setDate] = useState<Date>(new Date());


  const onChange = (event: Event, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  }

  return ( 
    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        onSubmit={values => {
          return;
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values}) => (
          <View style={{width: '90%', justifyContent: 'center', alignItems: 'center'}}>
            <FloatingCard cardWidth={'90%'}>
              <Text style={styles.header}>Sign-up</Text>
              <TextInput
                placeholder="First name"
                style={styles.inputField}
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
              />
              <TextInput 
                placeholder="Last name"
                style={styles.inputField}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
              />
              <TextInput 
                placeholder="Email"
                style={styles.inputField}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <TextInput 
                placeholder="Password"
                secureTextEntry={true}
                style={styles.inputField}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              
              <View style={{justifyContent: 'flex-start', width: '80%'}}>
                {/* <Text style={styles.text}>Date of birth</Text> */}
                <TouchableOpacity onPress={() => {
                  setShow(true);
                  setDatePickerTouched(true);
                }}>
                  {!datePickerTouched && <Text style={[styles.datePicker, {color: '#8e8e8e'}]}>
                    Date of birth
                  </Text>}
                  {datePickerTouched && <Text style={styles.datePicker}>
                    {('0' + date.getDate()).slice(-2)}/{('0' + (date.getMonth()+1)).slice(-2)}/{date.getFullYear()}
                  </Text>}
                </TouchableOpacity>
                {show && (<DateTimePicker
                  value={date}
                  mode={'date'}
                  display='default'
                  onChange={onChange}
                />)}
              </View>
              <View style={{width: '90%', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10}}>
                <RadioButton.Group onValueChange={checked => setChecked(checked)} value={checked}>
                  <RadioButton.Item
                    style={{height: 48}}
                    color={'#99879D'}
                    label={Genders[0].name}
                    value={Genders[0].name.toUpperCase()}
                    status={checked === Genders[0].name ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(Genders[0].name)}/>
                  <RadioButton.Item
                    style={{height: 48}}
                    color={'#99879D'}
                    label={Genders[1].name}
                    value={Genders[1].name.toUpperCase()}
                    status={checked === Genders[1].name ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(Genders[1].name)}/>
                  <RadioButton.Item
                    style={{height: 48}}
                    color={'#99879D'}
                    label={Genders[2].name}
                    value={Genders[2].name.toUpperCase()}
                    status={checked === Genders[2].name ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(Genders[2].name)}/>
                </RadioButton.Group>
              </View>
            </FloatingCard>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => {
                newUserVar({firstName: values.firstName, lastName: values.lastName, email: values.email, password: values.password, gender: checked, dob: date});
                navigation.navigate('PersonalInfoScreen', {firstName: values.firstName});
              }}>
              <TextButton title={'CREATE PROFILE'} filled={true}/>
            </TouchableOpacity>
            <ProgressBar progress={0.02} color={'#99879D'} style={styles.progressBar}/>
          </View>
        )}
      </Formik>
    </View>
   );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32, 
    marginVertical: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: '70%',
    height: 55,
    marginTop: 25,
  },
  wholeForm: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#99879D',
    borderRadius: 15,
    width: '90%',
  },
  inputField: {
    backgroundColor: '#99879D21',
    height: 48,
    width: '80%',
    padding: '5%',
    marginBottom: 10,
    borderRadius: 24,
  },
  datePicker: {
    backgroundColor: '#99879D21',
    alignItems: 'center',
    height: 48,
    padding: 14,
    borderRadius: 24,
    fontSize: 14,
    color: '#655669',
  },
  progressBar: {
    height: 7, 
    width: Dimensions.get('window').width, 
    marginTop: 50
  }
})
 
export default SignupScreen;