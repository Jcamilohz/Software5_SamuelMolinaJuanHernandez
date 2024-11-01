import app from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import firebaseConfig from './config';

class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig)
        } else {
            this.app = getApps()[0];
        }
        this.db = app.firestore();
        this.storage = app.storage();
    }
}

const firebase = new Firebase();
export default firebase;
