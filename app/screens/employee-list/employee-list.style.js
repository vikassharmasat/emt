import { StyleSheet,StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 1,
        marginVertical: 3,
        marginHorizontal: 18,
    },
    title: {
        fontSize: 32,
    },
});
