import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    EmployeeListItemDetail
} from "./app/screens/employee-list/employee-list-item-detail/employee-list-item-detail";
import { EmployeeList } from './app/screens/employee-list/employee-list';
import { Provider } from 'react-redux'
import { store } from './app/store/store';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const EmployeeStack = () => {
    return (
        <Stack.Navigator initialRouteName={ EmployeeList }>
            <Stack.Screen name="Home"
                          component={ EmployeeList }
                          options={ {
                              cardStyleInterpolator:
                              CardStyleInterpolators.forHorizontalIOS,
                          } }/>
            <Stack.Screen name="employee-detail" component={ EmployeeListItemDetail }
                          options={ {
                              cardStyleInterpolator:
                              CardStyleInterpolators.forHorizontalIOS,
                          } }/>
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <Provider store={ store }>
            <NavigationContainer>
                <BottomTab.Navigator
                    initialRouteName={ EmployeeList }
                    screenOptions={ { headerShown: false } }
                >
                    <BottomTab.Screen name='Home Screen' component={ EmployeeStack } options={ {
                        tabBarLabel: 'Home',
                        tabBarIcon: ( { color, size } ) => (
                            <MaterialCommunityIcons name="home" color={ color } size={ size }/>
                        ),
                    } }/>
                </BottomTab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
} );
