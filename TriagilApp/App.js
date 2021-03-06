import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './src/reducers/store';

import LoginContainer from './src/containers/LoginContainer';
import NurseHomeContainer from './src/containers/NurseHomeContainer';
import PatientHomeContainer from './src/containers/PatientHomeContainer';
import PatientChangeNameContainer from './src/containers/PatientChangeNameContainer';
import PatientChangeEmailContainer from './src/containers/PatientChangeEmailContainer';
import PatientChangePasswordContainer from './src/containers/PatientChangePasswordContainer';
import PatientDeleteAccountContainer from './src/containers/PatientDeleteAccountContainer';
import NurseChangePasswordContainer from './src/containers/NurseChangePasswordContainer';
import HospitalLineContainer from './src/containers/HospitalLineContainer';
import NursePatientInfoContainer from './src/containers/NursePatientInfoContainer';
import NurseTriageContainer from './src/containers/NurseTriagePatientContainer';
import HeadacheTriageContainer from './src/containers/HeadacheTriageContainer';
import ConvulsionTriageContainer from './src/containers/ConvulsionTriageContainer';
import DiarrheaTriageContainer from './src/containers/DiarrheaTriageContainer';
import SoreThroatTriageContainer from './src/containers/SoreThroatTraigeContainer';
import FaintingTriageContainer from './src/containers/FaintingTriageContainer';

import SignInContainer from './src/containers/SignInContainer';
import SignInScreen from './src/Screens/SignInScreen';
import TriageClassificationScreen from './src/Screens/Nurse/Triage/TriageClassificationScreen';

import Background from './src/components/Background';


const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
    
      <Background>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" headerMode="none">
            <Stack.Screen name="Login" component={LoginContainer} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="PatientHomeScreen" component={PatientHomeContainer} />
            <Stack.Screen name="NurseHomeScreen" component={NurseHomeContainer} />
            <Stack.Screen name="PatientChangeName" component={PatientChangeNameContainer} />
            <Stack.Screen name="PatientChangeEmail" component={PatientChangeEmailContainer} />
            <Stack.Screen name="PatientChangePassword" component={PatientChangePasswordContainer} />
            <Stack.Screen name="PatientDeleteAccount" component={PatientDeleteAccountContainer} />
            <Stack.Screen name="NurseChangePassword" component={NurseChangePasswordContainer} />
            <Stack.Screen name="HospitalLine" component={HospitalLineContainer} />
            <Stack.Screen name="SpecificPatient" component={NursePatientInfoContainer} />
            <Stack.Screen name="TriagePatient" component={NurseTriageContainer} />
            <Stack.Screen name="HeadacheTriage" component={HeadacheTriageContainer} />
            <Stack.Screen name="SoreThroatTriage" component={SoreThroatTriageContainer} />
            <Stack.Screen name="DiarrheaTriage" component={DiarrheaTriageContainer} />
            <Stack.Screen name="FaintingTriage" component={FaintingTriageContainer} />
            <Stack.Screen name="ConvulsionTriage" component={ConvulsionTriageContainer} />
            <Stack.Screen name="TriageClassification" component={TriageClassificationScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      </Background>

    </Provider>
  ); 
}

export default App;