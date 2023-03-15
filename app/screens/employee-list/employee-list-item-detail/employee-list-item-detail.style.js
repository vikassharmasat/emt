import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  phone: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "700",
  },
  devideDiv:{
    justifyContent:"flex-start", 
    flexDirection:"row", 
    alignItems:"center"
  },
  cardDiv: {
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
    marginBottom:15,
    paddingVertical:20,
    paddingHorizontal:15,

  },
  userName: {
    fontSize: 20,
    fontWeight: "700",
  },
  userText: {
    marginLeft: 15,
    borderLeftWidth:3,
    borderLeftColor:"#212121",
    paddingLeft:15,
  },
  textBold:{
    fontWeight:"700",
    marginBottom:10,
    fontSize:20
  },
  slideButton:{
    backgroundColor:"#fff",
    paddingVertical:30,
    paddingHorizontal:30,
    borderRadius:20,
    marginRight:15,
    marginBottom:20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
  },
  buttnArea:{
    flexDirection:"row",
  },
  whiteColor:{
    color:"#212121",
    fontSize:18,
    fontWeight:"500",
  },
  profileArea:{
    marginTop:10,
  },
  marginBottom:{
    marginBottom:10,
    fontSize:18,
  },
});
