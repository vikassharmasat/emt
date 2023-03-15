import { styles } from "../employee-list.style";
import { ScrollView, TouchableOpacity } from "react-native";
import { Avatar, ListItem } from "@rneui/themed";
import React from "react";

export const EmployeeListItem = ( { item,navigation:{navigate} } ) => {


    return (
        <ScrollView style={ styles.item }>
            <TouchableOpacity onPress={ () => {
                navigate( 'employee-detail', {
                    itemId: item.login.uuid,
                    otherParam: 'anything you want here',
                } );
            } }>
                <ListItem style={ { borderLeftWidth: 3, borderLeftColor: Math.random() < 0.5 ? 'red' : 'green' } }>
                    <Avatar
                        rounded
                        source={ { uri: item.picture.thumbnail } }
                    />
                    <ListItem.Content>
                        <ListItem.Title style={ { color: 'black', fontWeight: 'bold' } }>
                            { item.name.title } { item.name.first } { item.name.last }
                        </ListItem.Title>
                        <ListItem.Subtitle style={ { color: 'black' } }>
                            Mobile: { item.phone } Email: { item.email }
                        </ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron color="black"/>
                </ListItem>
            </TouchableOpacity>
        </ScrollView>
    )
}
