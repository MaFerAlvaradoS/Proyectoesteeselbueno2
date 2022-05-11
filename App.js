import React from 'react';
import {NativeBaseProvider} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';
import Menu from './Menu';
import DocSerInf from './DocSerInf';
import 'react-native-gesture-handler';
import MedicalApppoint from './MedicalApppoint';
import Schedule from './Schedule';
import Catalogue from './Catalogue';
import Prescriptions from './Prescriptions';
import MedRec from './MedRec';
import Settings from './Settings';
import Contact from './Contact';
import Profile from './Profile';


const Stack = createNativeStackNavigator();

export default function App(){
return (



<NavigationContainer>
    <NativeBaseProvider>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login}/>      
          <Stack.Screen name='Menu' component={Menu}/>  
          <Stack.Screen name='MedicalApppoint' component={MedicalApppoint}/>  
          <Stack.Screen name='Schedule' component={Schedule}/> 
          <Stack.Screen name='Catalogue' component={Catalogue}/> 
          <Stack.Screen name='DocSerInf' component={DocSerInf}/> 
          <Stack.Screen name='Prescriptions' component={Prescriptions}/> 
          <Stack.Screen name='MedRec' component={MedRec}/> 
          <Stack.Screen name='Settings' component={Settings}/> 
          <Stack.Screen name='Contact' component={Contact}/>
          <Stack.Screen name='Profile' component={Profile}/>


        </Stack.Navigator>
    </NativeBaseProvider>
</NavigationContainer>



);

}

//           <Stack.Screen name='Catalogo' component={Catalogo}/> 
