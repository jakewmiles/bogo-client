import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Formik } from 'formik';
import TextButton from '../../components/TextButton';

export interface SignupScreenProps {
  navigation: any;
  route: any;
}

 
const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  return ( 
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values}) => (
          <View style={{width: '90%', justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.card}>
              <Text style={{ fontSize: 32, marginVertical: '10%' }}>Sign-up</Text>
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
                style={styles.inputField}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => {
                // alert(values.password);
                navigation.navigate('BirthDateScreen', {firstName: values.firstName});
              }}>
              <TextButton title={'Create Profile'}/>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
   );
}

const styles = StyleSheet.create({
  button: {
    width: '70%',
    height: 55,
    marginTop: '25%',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 6,
    elevation: 6,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#99879D',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
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
    width: '85%',
    padding: '5%',
    marginBottom: '8%'
  }
})
 
export default SignupScreen;