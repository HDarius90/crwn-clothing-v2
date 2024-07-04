import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBHMFfpNiV0rDKI6bR9gADPh8ExtaJ3L-8',
  authDomain: 'crwn-clothing-b21b2.firebaseapp.com',
  projectId: 'crwn-clothing-b21b2',
  storageBucket: 'crwn-clothing-b21b2.appspot.com',
  messagingSenderId: '44466098935',
  appId: '1:44466098935:web:bc909ac76c27452c72b9f2',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
