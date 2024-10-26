import { initializeApp, getApps } from 'firebase/app';  
import { getFirestore } from 'firebase/firestore';      
import { getStorage } from 'firebase/storage';         
import firebaseConfig from './config';

class Firebase {
    constructor() {
        if (!getApps().length) {
            this.app = initializeApp(firebaseConfig);
        } else {
            this.app = getApps()[0];  
        }
        
        this.db = getFirestore(this.app); 
        this.storage = getStorage(this.app); 
    }
}

const firebase = new Firebase();
export default firebase;
