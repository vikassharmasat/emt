import { View, Image, Text ,TouchableOpacity,ScrollView} from "react-native";
import { Tab,  TabView } from '@rneui/themed';
import { styles } from "./employee-list-item-detail.style";
import Slideshow from '../../../shared-components/image-slider'
import BookingScreen from "../../../shared-components/BookingScreen";


export const EmployeeListItemDetail = () => {
    return (
        <>
                 
           <View style={styles.container}>
      
                <View style={styles.devideDiv}>
                    {/* <Image
                        style={{width:80,height:80,borderRadius:100, padding:2, backgroundColor:"#ccc"}}
                        resizeMode="cover"
                        source={{ uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4" }}
                    /> */}
                    <Slideshow/>
                    {/* <View style={styles.userText}>
                    <Text style={styles.userName}>Pranshu Chittora</Text>
                    <Text style={styles.phone}> +91 - 9015174477</Text>
                    </View> */}
                </View>
                <BookingScreen/>
            {/* <View style={styles.buttnArea}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.slideButton}><Text style={styles.whiteColor}>Profile</Text></TouchableOpacity>
                <TouchableOpacity style={styles.slideButton}><Text style={styles.whiteColor}>Address</Text></TouchableOpacity>      
                <TouchableOpacity style={styles.slideButton}><Text style={styles.whiteColor}>Maps</Text></TouchableOpacity>
                <TouchableOpacity style={styles.slideButton}><Text style={styles.whiteColor}>Maps</Text></TouchableOpacity>
              </ScrollView>
            </View>           
            <View style={styles.cardDiv}>                
                <View style={styles.profileArea}>
                    <Text style={styles.marginBottom}><Text style={styles.textBold}>Designation :</Text> UI/UX Designer</Text>
                    <Text style={styles.marginBottom}><Text style={styles.textBold}>Address :</Text> Noida Sector 12</Text>
                    <Text style={styles.marginBottom}><Text style={styles.textBold}>City :</Text> Noida</Text>
                    <Text style={styles.marginBottom}><Text style={styles.textBold}>State :</Text> Uttar Pradesh</Text>
                    <Text style={styles.marginBottom}><Text style={styles.textBold}>Nationality :</Text> Indian</Text>
                    <Text style={styles.marginBottom}><Text style={styles.textBold}>Work  :</Text> AICTE</Text>
                </View>
            </View> */}
            </View>
        </>
    )
}
