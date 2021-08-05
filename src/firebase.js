import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAHqQrdAP7KGW8voyoiPXrcMJp2fcjiTS4",
    authDomain: "bussimport-app.firebaseapp.com",
    projectId: "bussimport-app",
    storageBucket: "bussimport-app.appspot.com",
    messagingSenderId: "637204592038",
    appId: "1:637204592038:web:6e55d8b58bbc8207950b67"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app)
}