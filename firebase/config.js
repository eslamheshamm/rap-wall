import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: "AIzaSyBhEYn4cyQ-UfykL6uRGl-UsNfcXR7xmlQ",
		authDomain: "rap-wall.firebaseapp.com",
		projectId: "rap-wall",
		storageBucket: "rap-wall.appspot.com",
		messagingSenderId: "63501863301",
		appId: "1:63501863301:web:5d7f10dd6d7bb68f4e9cec",
		measurementId: "G-3351V9SG29",
	});
} else {
	firebase.app(); // if already initialized, use that one
}
// const app = firebase.initializeApp({

// });
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
