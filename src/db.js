import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey:"",
    authDomain:"webfashion-b0fc5.firebaseapp.com",
    projectId:"webfashion-b0fc5"
});

export default firebase.firestore();