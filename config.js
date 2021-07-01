import firebase from 'firebase'


  // Initialize Firebase
  
  firebase.initializeApp( {
    apiKey: "AIzaSyCxpAXIghZY5Wg05nWAnrhrSpSDF7RDt90",
    authDomain: "furnitureapp-d8b15.firebaseapp.com",
    projectId: "furnitureapp-d8b15",
    storageBucket: "furnitureapp-d8b15.appspot.com",
    messagingSenderId: "305960855768",
    appId: "1:305960855768:web:84f5b424765539d8fc8fad"
  });

  const Firebase = firebase

  const googleConfig = {
    iosClientId : '897389787521-bg719m4g0kh3e49pnh3pmp396akpf2u2.apps.googleusercontent.com' ,
    androidClientId : '897389787521-mgkp1hatsmkpga09ms3faigh77o0h32l.apps.googleusercontent.com' ,
    scopes : ['profile' , 'email']
}

  export {Firebase , googleConfig}