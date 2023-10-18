import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyCVkHpO13J3DKH7QoSPRh-_0Mz5Pgvj9ew",
	authDomain: "e-library-a3059.firebaseapp.com",
	projectId: "e-library-a3059",
	storageBucket: "e-library-a3059.appspot.com",
	messagingSenderId: "545021386227",
	appId: "1:545021386227:web:c10480a910646dfb84c686"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
