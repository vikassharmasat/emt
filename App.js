import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {EmployeeListItemDetail} from "./app/screens/employee-list/employee-list-item-detail/employee-list-item-detail";
import { EmployeeList } from './app/screens/employee-list/employee-list';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={ EmployeeList } options={ {
                    tabBarLabel: 'Home',
                    tabBarIcon: ( { color, size } ) => (
                        <MaterialCommunityIcons name="home" color={ color } size={ size }/>
                    ),
                } }/>
                <Tab.Screen name="employee-detail" component={EmployeeListItemDetail} />
            </Tab.Navigator>
        </NavigationContainer>
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
