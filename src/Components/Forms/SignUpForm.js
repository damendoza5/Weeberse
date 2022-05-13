import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import theme from "../../Theme";
import { AntDesign } from "@expo/vector-icons";
import { Context as AuthContext } from "../../Providers/AuthContext";
import { validate } from "email-validator";

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
			{error && <Text>{error}</Text>}
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
		position: "relative",
		marginTop: "3%",
		marginBottom: 20,
		marginRight: 25,
		width: 80,
		padding: 15,
		borderRadius: 20,
		backgroundColor: theme.colors.acento,
	},
	textInput: {
		backgroundColor: theme.colors.primary,
		color: theme.colors.white,
		height: 45,
		marginVertical: "1%",
        marginHorizontal: "6%"
	},
});

export default SignupForm;
