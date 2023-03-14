import { styles } from "../employee-list.style";
import { ScrollView, TouchableOpacity } from "react-native";
import { Avatar, ListItem } from "@rneui/themed";
import React from "react";
import { EmployeeListItemDetail } from "../employee-list-item-detail/employee-list-item-detail";

export const EmployeeListItem = ( { item, navigation,...props } ) => {

    return (
        <ScrollView style={ styles.item }>
            <TouchableOpacity onPress={ () => {
                navigation.navigate( 'employee-detail', {
                    itemId: 86,
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
