import app from 'firebase/app';
import 'firebase/auth';

//Prod
//<script src="https://www.gstatic.com/firebasejs/5.9.0/firebase.js"></script>
// Initialize Firebase
var prodConfig = {
    apiKey: "AIzaSyD0GA68BNwFQfoxJEpqKMm_QTC-nEHrMFg",
    authDomain: "online-store-prod-bf17b.firebaseapp.com",
    databaseURL: "https://online-store-prod-bf17b.firebaseio.com",
    projectId: "online-store-prod-bf17b",
    storageBucket: "online-store-prod-bf17b.appspot.com",
    messagingSenderId: "88670805365"
};
//firebase.initializeApp(config);

//Dev
//<script src="https://www.gstatic.com/firebasejs/5.9.0/firebase.js"></script>
// Initialize Firebase
var devConfig = {
    apiKey: "AIzaSyCMlQTDZGkWCwZOP_1lbBwDk9IC579ZCqU",
    authDomain: "online-store-ae640.firebaseapp.com",
    databaseURL: "https://online-store-ae640.firebaseio.com",
    projectId: "online-store-ae640",
    storageBucket: "online-store-ae640.appspot.com",
    messagingSenderId: "33828136039"
};
//firebase.initializeApp(config);

const config =
    process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;