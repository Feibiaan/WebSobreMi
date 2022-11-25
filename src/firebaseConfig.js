import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDjoMI3W192saimx1mPK8ONG1i7A9vYdtk",
	authDomain: "curriculum-2022.firebaseapp.com",
	projectId: "curriculum-2022",
	storageBucket: "curriculum-2022.appspot.com",
	messagingSenderId: "293965188673",
	appId: "1:293965188673:web:8c65970063cee041b180c0",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
