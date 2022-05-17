import logo from './logo.svg';
import './App.css';

//Firebase SDK
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

//Firebase hooks
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXd7523HIVZ9hxKx9JgCKcc8jIfjeZntg",
  authDomain: "firechat-632f3.firebaseapp.com",
  projectId: "firechat-632f3",
  storageBucket: "firechat-632f3.appspot.com",
  messagingSenderId: "746864000934",
  appId: "1:746864000934:web:1f137824fddaf6df875967",
  measurementId: "G-ED709XQXL3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
