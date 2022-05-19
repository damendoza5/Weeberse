import React, { useContext, useEffect, useState } from "react";
import theme from "../../Theme";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Title, Caption, Drawer, Avatar, Text } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Context as AuthProvider } from "../../Providers/AuthContext";
import { Entypo } from "@expo/vector-icons";
import * as Font from "expo-font";
import { db } from "../../Firebase";

const DrawerContent = ({ props, navigation, uid }) => {
  const { signout, state } = useContext(AuthProvider);
  const [user, setUser] = useState('');
  const [font, setFont] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Poppins: require("../../../assets/Poppins-ExtraLight.ttf"),
    });
    setFont(true);
  };

  if (state.loggedIn === true) {
    const getUserById = async (uid) => {
      const dbRef = db.collection("users").doc(uid);
      const doc = await dbRef.get();
      const user = doc.data();
      setUser({ ...user, id: doc.id });
    };

    useEffect(() => {
      loadFonts();
      getUserById(uid)
    }, []);
  }else{
    useEffect(() => {
      loadFonts();
    }, []);
  }

  if (font === true) {
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <TouchableOpacity onPress={() => navigation.navigate("SettingsStackScreen")}>
                  <Avatar.Image
                    source={require("../../../assets/icon.png")}
                    size={50}
                    style={{ backgroundColor: theme.colors.background }}
                  ></Avatar.Image>
                </TouchableOpacity>
                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                  <Caption style={styles.caption}>Welcome,</Caption>
                  <Title style={styles.title}>{user.username}</Title>
                </View>
              </View>
              <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                  icon={() => (
                    <Entypo
                      name="home"
                      size={24}
                      color={theme.colors.white}
                    />
                  )}
                  label={() => (
                    <Text style={{ color: theme.colors.white }}>Home</Text>
                  )}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                />
              </Drawer.Section>
            </View>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={() => (
              <Entypo
                name="log-out"
                size={24}
                color={theme.colors.gray}
              />
            )}
            label={() => (
              <Text style={{ color: theme.colors.gray }}>Sign Out</Text>
            )}
            onPress={signout}
            style={styles.option}
          />
        </Drawer.Section>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: theme.colors.white,
    fontFamily: "Poppins",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: theme.colors.white,
    fontFamily: "Poppins",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
  },
});

export default DrawerContent;
