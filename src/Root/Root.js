import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/splash';
import LoginPage from '../screens/login';
import OtpPage from '../screens/otp';
import Loading from '../screens/loading';
import DrawerNavigator from '../navigation/DrawerNavigator';
import TabNavigator from '../navigation/BottomTabNavigator';


const Stack = createStackNavigator();

const Root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Splash" component={SplashScreen}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                <Stack.Screen name="Login" component={LoginPage}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                  <Stack.Screen name="OTPScreen" component={OtpPage}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                <Stack.Screen name="LoadingScreen" component={Loading}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                 <Stack.Screen name="Drawer" component={DrawerNavigator}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                
                <Stack.Screen name="BottomTab" component={TabNavigator}
                    options={() => ({
                        headerShown: false,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default Root;