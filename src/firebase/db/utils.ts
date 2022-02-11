import { collection, addDoc, getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const addDocument = async (
  collectionName: string,
  data: object,
  docID?: string
) => {
  try {
    if (docID) {
      await setDoc(doc(db, collectionName, docID), data);
      console.log("Doc written with ID", docID);
    } else {
      const docRef = await addDoc(collection(db, collectionName), data);
      console.log("Doc written with ID", docRef.id);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
