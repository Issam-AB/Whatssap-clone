import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB4HGuweh-vm6sSxl3Qm5t3tFuenx-vKuY",
    authDomain: "whatss-app-clone.firebaseapp.com",
    databaseURL: "https://whatss-app-clone.firebaseio.com",
    projectId: "whatss-app-clone",
    storageBucket: "whatss-app-clone.appspot.com",
    messagingSenderId: "828750622776",
    appId: "1:828750622776:web:805668cd180588c6e736cd",
    measurementId: "G-3YB7VGXD07"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db; 