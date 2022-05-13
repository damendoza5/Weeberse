import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import getEnvVars from "../../environment";

const {
	apiKey,
	authDomain,
	projectId,
	storageBucket,
	messagingSenderId,
	appId,
} = getEnvVars();

//Pasar los valores de las keys a Firebase

const firebaseConfig = {
	apiKey,
	authDomain,
	projectId,
	storageBucket,
	messagingSenderId,
	appId,
};

// Iniciar la conexion a firebase si no se ha realizado previamente

//if (!firebase.app.length)
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };
