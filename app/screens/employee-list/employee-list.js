import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from "react-native";
import { styles } from "./employee-list.style";
import { ajax } from "../../../util/axios/axios";
import {EmployeeListItem} from "./employee-list-item/employee-list-item";
import { useNavigation } from "@react-navigation/native";


export const EmployeeList = () => {

    const [ empList, setEmpList ] = useState( [] );
    const navigation = useNavigation();

    useEffect( () => {
        const usersList = async () => {
            const url = 'https://randomuser.me/api/?results=100';
            const output = await ajax( 'get', url, {} );
            if ( !output ) {
                setEmpList( [] );
            } else {
                setEmpList( output.results );
            }
        };
        usersList();
    }, [] );

    const RenderItem = ({ item }) => {
        return (
            <EmployeeListItem item={item} navigation={navigation}></EmployeeListItem>
        )
    }

    return (
        <SafeAreaView style={ styles.container }>
            <FlatList
                data={ empList }
                renderItem={ RenderItem }
                keyExtractor={ item => item.login.uuid }
            />
        </SafeAreaView>
    );
}

