import * as firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCFOK_XZP4Sp1gImyNNGsL9UwquJpx06E0",
    authDomain: "soruwitter.firebaseapp.com",
    databaseURL: "https://soruwitter.firebaseio.com",
    projectId: "soruwitter",
    storageBucket: "soruwitter.appspot.com",
    messagingSenderId: "1006035873755",
    appId: "1:1006035873755:web:0156f05b25361c62a741fe"
  };

  export default firebase.initializeApp(firebaseConfig);