import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import FloatingCard from '../../components/FloatingCard';
import TextButton from '../../components/TextButton';
import { isLoggedInVar } from  '../../client'

export interface SigninScreenProps {
  navigation: any;
  route: any;
}
 
const SigninScreen: React.FC<SigninScreenProps> = ({ navigation }) => {
  return ( 
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values}) => (
          <View style={{width: '90%', justifyContent: 'center', alignItems: 'center'}}>
            <FloatingCard cardWidth={'90%'}>
              <Text style={{ fontSize: 32, marginVertical: '10%' }}>Sign-in</Text>
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
            </FloatingCard>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => {
                if(!values.email || !values.password) alert('FAIL')
                else isLoggedInVar(true);
              }}>
              <TextButton title={'Sign in'}/>
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
 
export default SigninScreen;