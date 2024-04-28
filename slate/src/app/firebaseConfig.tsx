import 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase config object
    apiKey: "AIzaSyCqLm8mrSNTU2IriZHQJU5AAzgbY84CybY",
    authDomain: "slate-29353.firebaseapp.com",
    projectId: "slate-29353",
    storageBucket: "slate-29353.appspot.com",
    messagingSenderId: "647135175578",
    appId: "1:647135175578:web:2a3ce1f5c4b6c8c8499023",
    measurementId: "G-68ZLJYS2L8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

// Export Firestore instance
export { firestore };