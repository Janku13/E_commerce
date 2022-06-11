import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCEEhX9im7A-gQyH21LHSHo-4v3L_v8K2E",
  authDomain: "crwndb-4bb6b.firebaseapp.com",
  projectId: "crwndb-4bb6b",
  storageBucket: "crwndb-4bb6b.appspot.com",
  messagingSenderId: "255095349311",
  appId: "1:255095349311:web:df52829e785edab73dd88a",
  measurementId: "G-QRHYQ315FJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user.email);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const createUserProfileDocument = async (userAuth, moreInfo) => {
  if (!userAuth) return;
  // console.log("the firestore: ", firestore.doc("users/128fd"));
  const userRef = firestore.doc(`users/123450s`);
  const snapShot = await userRef.get();
  // const collection = firestore.collection("users");
  // const collectionSnapShot = await collection.get();
  // console.log(
  //   "my user: ",
  //   collectionSnapShot.docs.map((user) => user.data())
  // );

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...moreInfo,
      });
    } catch (error) {
      console.log("error creating user");
    }
  }
  return userRef;
};

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(obj.title);
    console.log(newDocRef);
    batch.set(newDocRef, obj);
  });
  await batch.commit();
};

export const convertCollectionsSnapShotToMap = (collection) => {
  const transformCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title),
      id: doc.id,
      title,
      items,
    };
  });
  console.log(transformCollection);
};

export default firebase;
