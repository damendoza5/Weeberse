import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../Settings";
import UserProfile from "../UserProfile";

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }} >
      <SettingsStack.Screen name="Home" component={Settings} />
      <SettingsStack.Screen name="UserProfile" component={UserProfile} options={{presentation: 'modal'}}/>
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;