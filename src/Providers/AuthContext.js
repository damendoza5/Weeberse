import createDataContext from "./createDataContext";
import { firebase } from "../Firebase";

const authReducer = (state, action) => {
	switch (action.type) {
		case "signup":
			return {
				...state,
				user: action.payload.user,
				loggedIn: action.payload.loggedIn,
			};
		case "errorMessage":
			return { ...state, errorMessage: action.payload };
		case "signin":
			return {
				...state,
				user: action.payload.user,
				loggedIn: action.payload.loggedIn,
			};
		case "persistLogin":
			return {
				...state,
				user: action.payload.user,
				loggedIn: action.payload.loggedIn,
				loading: action.payload.loading,
			};
		case "signout":
			return {
				...state,
				user: action.payload.user,
				loggedIn: action.payload.loggedIn,
			};
		default:
			return state;
	}
};

const signup = (dispatch) => (username, email, password) => {
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((response) => {
			const uid = response.user.uid;

			const data = {
				id: uid,
				email,
				username,
			};

			const usersRef = firebase.firestore().collection("users");

			usersRef
				.doc(uid)
				.set(data)
				.then(() => {
					dispatch({
						type: "signup",
						payload: { user: data, loggedIn: true },
					});
				})
				.catch((error) => {
					dispatch({ type: "errorMessage", payload: error.message });
				});
		})
		.catch((error) => {
			dispatch({ type: "errorMessage", payload: error.message });
		});
};

const signin = (dispatch) => (email, password) => {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((response) => {
			const uid = response.user.uid;

			const usersRef = firebase.firestore().collection("users");

			usersRef
				.doc(uid)
				.get()
				.then((firestoreDocument) => {
					if (!firestoreDocument.exists) {
						dispatch({
							type: "errorMessage",
							payload: "User does not exist on Weeberse!",
						});
					} else {
						dispatch({
							type: "signin",
							payload: { user: firestoreDocument.data(), loggedIn: true },
						});
						dispatch({ type: "errorMessage", payload: null });
					}
				});
		})
		.catch((error) => {
			dispatch({ type: "errorMessage", payload: error.message });
		});
};

const persistLogin = (dispatch) => () => {
	const usersRef = firebase.firestore().collection("users");

	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			usersRef
				.doc(user.uid)
				.get()
				.then((response) => {
					dispatch({
						type: "persistLogin",
						payload: { user: response.data(), loggedIn: true, loading: false },
					});
				})
				.catch((error) => {
					dispatch({ type: "errorMessage", payload: error.message });
				});
		} else {
			dispatch({
				type: "persistLogin",
				payload: { user: {}, loggedIn: false },
			});
		}
	});
};

const signout = (dispatch) => () => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			dispatch({ type: "signout", payload: { user: {}, loggedIn: false } });
		})
		.catch((error) => {
			dispatch({ type: "errorMessage", payload: error.message });
		});
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{
		signup,
		signin,
		persistLogin,
		signout,
	},
	{
		user: {},
		errorMessage: null,
		registered: false,
		loggedIn: false,
		loading: true,
	}
);
