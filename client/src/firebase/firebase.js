import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiqtFlF4lipJ86g1KndNZTl9wsHr5nhVs",
  authDomain: "gaffer-jersey-db.firebaseapp.com",
  databaseURL: "https://gaffer-jersey-db.firebaseio.com",
  projectId: "gaffer-jersey-db",
  storageBucket: "gaffer-jersey-db.appspot.com",
  messagingSenderId: "939360056001",
  appId: "1:939360056001:web:aa817fc36988ed6f5cda40",
  measurementId: "G-B8B7T8CLDQ"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();

//for adding to firestore
export const addUserToFirestore = async (userAuth, additionalData) => {
  // return is the user have signed out, user is null
  if (!userAuth) return
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get();
  // check if the user is already in the firestore or not
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      alert(error.message)
    }
  }
  return userRef
}
// For Google sign in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});



export {firestore, auth, provider };