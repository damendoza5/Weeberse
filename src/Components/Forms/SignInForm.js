import React, { useState, useContext } from "react";
import { StyleSheet, View} from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import theme from "../../Theme";
import Toast from "react-native-toast-message";
import { AntDesign } from "@expo/vector-icons";
import { Context as AuthContext } from "../../Providers/AuthContext";

function SignInForm() {
	const { state, signin, googleSignin } = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [error, setError] = useState(false);
	
	const showToast = ({errores}) => {
		Toast.show({
		  type: 'error',
		  text1: 'Error trying to Sign In...',
		  text2: {errores}
		});
	}

	function handleVerify(input) {
		if (input === "email") {
			if (!email) setEmailError(true);
			else setEmailError(false);
		} else if (input === "password") {
			if (!password) setPasswordError(true);
			else setPasswordError(false);
		} else if (input === "signin") {
			if (email && password && !emailError && !passwordError) {
				signin(email, password);
			}
		} else if (input === "googleSignin") {
			googleSignin();
		}
	}

	return (
		<View>
			{error}
			{state.errorMessage}
			
			<TextInput
				mode="flat"
				label="Email"
				value={email}
				textContentType="emailAddress"
				onChangeText={setEmail}
				autoCapitalize="none"
				style={styles.textInput}
				onBlur={() => handleVerify("email")}
				activeUnderlineColor={theme.colors.white}
				theme={{colors: {text: theme.colors.white}}}
			/>
			
			<TextInput
				mode="flat"
				label="Password"
				value={password}
				onChangeText={setPassword}
				autoCapitalize="none"
				textContentType="password"
				style={styles.textInput}
				secureTextEntry
				onBlur={() => handleVerify("password")}
				activeUnderlineColor={theme.colors.white}
				theme={{colors: {text: theme.colors.white}}}
			/>
            
			<Button
				mode="contained"
				style={styles.button}
				onPress={() => handleVerify("signin")}
			>
				<AntDesign
					name="right"
					size={24}
					color={theme.colors.white}
				/>
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		alignSelf: "flex-end",
		marginTop: "65%",
		width: 80,
		padding: 15,
		borderRadius: 20,
		backgroundColor: theme.colors.acento,
	},
	textInput: {
		backgroundColor: theme.colors.primary,
		color: theme.colors.white,
		height: 55,
		marginVertical: "4%",
	},
});

export default SignInForm;
