import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import AnimeDetails from "../AnimeDetails";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }} >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="AnimeDetails" component={AnimeDetails} options={{presentation: 'modal'}}/>
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;