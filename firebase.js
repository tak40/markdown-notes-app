/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCr1qrwq8gSwLb5gSCbDrSMDbMw4mRc_9g',
    authDomain: 'react-notes-1629c.firebaseapp.com',
    projectId: 'react-notes-1629c',
    storageBucket: 'react-notes-1629c.appspot.com',
    messagingSenderId: '821489397754',
    appId: '1:821489397754:web:abd8319276dc63b1ca3e43',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const notesCollection = collection(db, 'notes')