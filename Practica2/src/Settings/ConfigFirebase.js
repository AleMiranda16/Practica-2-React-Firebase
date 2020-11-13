import firebase from 'firebase/app';
import 'firebase/database';

const config={
    apiKey: "AIzaSyCtgwfcJ5dhGMBxx9fujETdBHiuN1zM6Sc",
    authDomain: "practica2reactfirebase.firebaseapp.com",
    databaseURL: "https://practica2reactfirebase.firebaseio.com",
    projectId: "practica2reactfirebase",
    storageBucket: "practica2reactfirebase.appspot.com",
    messagingSenderId: "806928644819",
    appId: "1:806928644819:web:8d97ed8714fff8c75c7226",
    measurementId: "G-KZ33PSSK68"

}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()

export default fb;