import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from "react-native";
import { styles } from "./employee-list.style";
import { ajax } from "../../../util/axios/axios";
import {EmployeeListItem} from "./employee-list-item/employee-list-item";


export const EmployeeList = () => {

    const [ empList, setEmpList ] = useState( [] );

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


    return (
        <SafeAreaView style={ styles.container }>
            <FlatList
                data={ empList }
                renderItem={ EmployeeListItem }
                keyExtractor={ item => item.login.uuid }
            />
        </SafeAreaView>
    );
}

