import firebase, { initializeApp } from 'firebase/app';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';

import firebaseConfig from './firebaseConfig';
//Initialize Firebase App

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
/** integrating google analytics **/

export const getTutorials = async () => {
  const querySnapshot = await getDocs(collection(db, 'tutorials'));
  const tuts = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    tuts.push(doc.data());
  });
  return tuts;
};
