import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import ShopMap from "../shared-components/ShopMap";

const BookingScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([
    { key: "first", title: "Profile" },
    { key: "map", title: "Maps" },
    { key: "add", title: "Address" },
  ]);

  const _renderTabBar = (props) => (
    <TabBar
      {...props}
      style={{ backgroundColor: "#fafafa" }}
      tabStyle={[
        styles.tab,
        { height: 38, maxHeight: 38, minHeight: 38, padding: 0 },
      ]}
      labelStyle={styles.label}
      indicatorStyle={{ backgroundColor: "blue" }}
    />
  );

  return (
    <>
      <View style={{ flex: 2, marginTop: 150 }}>
        <TabView
          navigationState={{ index, routes }}
          renderTabBar={_renderTabBar}
          onIndexChange={setIndex}
          renderScene={({ route }) => {
            switch (route.key) {
              case "first":
                return (
                  <>
                    <View style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
                      <View style={styles.profileArea}>
                        <Text style={styles.marginBottom}>
                          <Text style={styles.textBold}>Designation :</Text>{" "}
                          UI/UX Designer
                        </Text>
                        <Text style={styles.marginBottom}>
                          <Text style={styles.textBold}>Address :</Text> Noida
                          Sector 12
                        </Text>
                        <Text style={styles.marginBottom}>
                          <Text style={styles.textBold}>City :</Text> Noida
                        </Text>
                        <Text style={styles.marginBottom}>
                          <Text style={styles.textBold}>State :</Text> Uttar
                          Pradesh
                        </Text>
                        <Text style={styles.marginBottom}>
                          <Text style={styles.textBold}>Nationality :</Text>{" "}
                          Indian
                        </Text>
                        <Text style={styles.marginBottom}>
                          <Text style={styles.textBold}>Work :</Text> AICTE
                        </Text>
                      </View>
                    </View>
                  </>
                );
              case "map":
                return (
                  <>
                    <View style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
                      <View style={[styles.profileArea, { flex: 1 }]}>
                        <ShopMap style={styles.map} />
                      </View>
                    </View>
                  </>
                );
              case "add":
                return (
                  <>
                    <View style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
                      <View style={styles.profileArea}>
                        <Text style={styles.marginBottom}>
                          <Text style={styles.textBold}>Designation :</Text>{" "}
                          UI/UX Designer
                        </Text>
                        <Text style={styles.marginBottom}>
                          <Text style={styles.textBold}>Address :</Text> Noida
                          Sector 12
                        </Text>
                        <Text style={styles.marginBottom}>
                          <Text style={styles.textBold}>City :</Text> Noida
                        </Text>
                        <Text style={styles.marginBottom}>
                          <Text style={styles.textBold}>State :</Text> Uttar
                          Pradesh
                        </Text>
                        <Text style={styles.marginBottom}>
                          <Text style={styles.textBold}>Nationality :</Text>{" "}
                          Indian
                        </Text>
                        <Text style={styles.marginBottom}>
                          <Text style={styles.textBold}>Work :</Text> AICTE
                        </Text>
                      </View>
                    </View>
                  </>
                );
              default:
                return null;
            }
          }}
        />
      </View>
    </>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  label: {
    fontWeight: "600",
    flexWrap: "wrap",
    color: "#212121",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  phone: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "700",
  },
  devideDiv: {
    height: "25%",
    position: "relative",
  },
  userName: {
    fontSize: 20,
    fontWeight: "700",
  },
  userText: {
    marginLeft: 15,
    borderLeftWidth: 3,
    borderLeftColor: "#212121",
    paddingLeft: 15,
  },
  textBold: {
    fontWeight: "700",
    marginBottom: 10,
    fontSize: 20,
  },
  slideButton: {
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
  },
  buttnArea: {
    flexDirection: "row",
    marginTop: 150,
  },
  whiteColor: {
    color: "#212121",
    fontSize: 18,
    fontWeight: "500",
  },
  profileArea: {
    marginTop: 10,
  },
  marginBottom: {
    marginBottom: 10,
    fontSize: 18,
  },
});
