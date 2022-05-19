import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import theme from "../../Theme";
import Toast from 'react-native-toast-message';
import { Context as AuthContext } from "../../Providers/AuthContext";
import { validate } from "email-validator";

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

function SignupForm() {
	const { state, signup } = useContext(AuthContext);
	const [Username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [UsernameError, setUsernameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [confirmPasswordError, setConfirmPasswordError] = useState(false);
	const [error, setError] = useState(false);

	const showToast = ({errores}) => {
		Toast.show({
		  type: 'error',
		  text1: 'Error trying to Sign Up...',
		  text2: {errores}
		});
	}

	function handleVerify(input) {
		if (input === "Username") {
			if (!Username) setUsernameError(true);
			else setUsernameError(false);
		} else if (input === "email") {
			if (!email) setEmailError(true);
			else if (!validate(email)) setEmailError(true);
			else setEmailError(false);
		} else if (input === "password") {
			if (!password) setPasswordError(true);
			else if (password.length < 8) setPasswordError(true);
			else setPasswordError(false);
		} else if (input === "confirmPassword") {
			if (!confirmPassword) setConfirmPasswordError(true);
			else if (password !== confirmPassword) setConfirmPasswordError(true);
			else setConfirmPasswordError(false);
		} else if (input === "signup") {
			if (
				Username &&
				email &&
				password &&
				confirmPassword &&
				!UsernameError &&
				!emailError &&
				!passwordError &&
				!confirmPasswordError
			) {
				try {
					signup(Username, email, password);
				} catch (error) {
					console.log(error);
				}
			} else setError("All fields are required!");
		}
	}

	return (
		<View>
			{error && showToast(error) && console.log(error)}
			{state.errorMessage !== null && <Text>{state.errorMessage}</Text>}
			<TextInput
				mode="flat"
				label="Username"
				value={Username}
				autoCapitalize="words"
				onChangeText={setUsername}
				textContentType="username"
				style={styles.textInput}
				onBlur={() => handleVerify("Username")}
				activeUnderlineColor={theme.colors.white}
				theme={{colors: {text: theme.colors.white}}}
			/>
			
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
			
			<TextInput
				mode="flat"
				label="Confirm password"
				value={confirmPassword}
				onChangeText={setConfirmPassword}
				autoCapitalize="none"
				style={styles.textInput}
				textContentType="password"
				secureTextEntry
				onBlur={() => handleVerify("confirmPassword")}
				activeUnderlineColor={theme.colors.white}
				theme={{colors: {text: theme.colors.white}}}
			/>
            
			<Button
				mode="contained"
				style={styles.button}
				onPress={() => handleVerify("signup")}
			>
				<Text style={styles.text}>Sign Up</Text>
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		alignSelf: "center",
		marginTop: "15%",
		width: deviceWidth * 0.6,
		padding: 15,
		borderRadius: 20,
		backgroundColor: theme.colors.acento,
	},
	text: {
		color: theme.colors.white,
		fontSize: 16,
		fontWeight: 'bold'
	},
	textInput: {
		backgroundColor: theme.colors.primary,
		color: theme.colors.white,
		height: 55,
		marginVertical: "4%",
	},
});

export default SignupForm;
