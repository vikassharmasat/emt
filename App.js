import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {EmployeeListItemDetail} from "./app/screens/employee-list/employee-list-item-detail/employee-list-item-detail";
import { EmployeeList } from './app/screens/employee-list/employee-list';

const BottomTab = createBottomTabNavigator();
const Tab = createNativeStackNavigator();

const EmployeeStack = () => {
    return (
        <Tab.Navigator initialRouteName={EmployeeList} >
            <Tab.Screen name="Home" component={EmployeeList} />
            <Tab.Screen name="employee-detail"  component={EmployeeListItemDetail} />
        </Tab.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator initialRouteName={EmployeeList} screenOptions={{headerShown:false}}>
                <BottomTab.Screen name='Home Screen' component={ EmployeeStack } options={ {
                    tabBarLabel: 'Home',
                    tabBarIcon: ( { color, size } ) => (
                        <MaterialCommunityIcons name="home" color={ color } size={ size }/>
                    ),
                } }/>
            </BottomTab.Navigator>
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
