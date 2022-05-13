import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import theme from "../../Theme";
import { getAuth } from "firebase/auth";

import HomeStackScreen from "../Screens/routes/HomeStack";

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  const auth = getAuth();
  const userInfo = auth.currentUser;
  const uid = userInfo.uid;

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} uid={uid}/>}
      initialRouteName="Home"
      screenOptions={{drawerStyle: {backgroundColor: theme.colors.background}}}
      useLegacyImplementation={true}
      
    >
      <Drawer.Screen name="Home" component={HomeStackScreen} options={{headerShown:false}}/>
    </Drawer.Navigator>
  );
};

export default DrawerMenu;