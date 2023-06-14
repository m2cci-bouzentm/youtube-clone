import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCARBUIM3v--cgI-9f2rDyJYS3x7OrQqo4',
  authDomain: 'ytb-clone-3b463.firebaseapp.com',
  projectId: 'ytb-clone-3b463',
  storageBucket: 'ytb-clone-3b463.appspot.com',
  messagingSenderId: '872666209886',
  appId: '1:872666209886:web:09f6ba9a18fd9e1f225ecf',
};

const app = initializeApp(firebaseConfig);
// youtube API key: AIzaSyD2wcS9IPUkC6wkC3GtPvBfesIGwrQkIi0
// Client ID 537550941145-vo16vql5bn2gic104o1ejab5t7rcbdga.apps.googleusercontent.com
// Client secret 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

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const auth = getAuth(app);


export { auth, provider };
