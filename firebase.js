const firebaseConfig = {
  apiKey: "AIzaSyBmcSaNrXfAnmN8B9QNNoM03g2jxKXQ8rg",
  authDomain: "cs-care-app1.firebaseapp.com",
  projectId: "cs-care-app1",
  storageBucket: "cs-care-app1.appspot.com",
  messagingSenderId: "108171468298",
  appId: "1:108171468298:web:2f1d5bbea6bc28b5eb89f3"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
