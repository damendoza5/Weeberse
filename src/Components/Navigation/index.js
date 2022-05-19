import React, { useContext, useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Context as AuthContext } from "../../Providers/AuthContext";

import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
import AppIndex from "../Screens/AppIndex";
import SignSelect from "../Screens/SignSelect";

const Stack = createStackNavigator();

function Navigation() {
	const { state, persistLogin } = useContext(AuthContext);

	useEffect(() => {
		persistLogin();
	}, []);

	return (
		<NavigationContainer>
			<>
				{state.loggedIn ? (
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						<Stack.Screen name="AppIndex" component={AppIndex} />
					</Stack.Navigator>
				) : (
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						<Stack.Screen name="SignSelect" component={SignSelect} />
						<Stack.Screen name="SignIn" component={SignIn} options={{presentation: 'modal'}}/>
						<Stack.Screen name="SignUp" component={SignUp} options={{presentation: 'modal'}}/>
					</Stack.Navigator>
				)}
			</>
		</NavigationContainer>
	);
}

export default Navigation;
