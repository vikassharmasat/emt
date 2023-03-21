import { StyleSheet,StatusBar } from "react-native";

export const styles = StyleSheet.create({
    item: {
        padding: 1,
        marginVertical: 3,
        marginHorizontal:15,
    },
    title: {
        fontSize: 32,
    },
    name:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"700"
    },
    image:{
        width:348,
        height:150,
        marginLeft:"auto",
        marginRight:"auto",
        borderRadius:15,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,
        resizeMode: "cover"
    },
    bottomSeen:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    email:{
        fontSize:16, 
        textAlign:"center",
        marginBottom:20,
    },
    boxPadding:{
        padding:15,
    },
    cardBody:{
        borderRadius:20,
        backgroundColor:"#fff",        
        marginBottom:20,
    },
});
