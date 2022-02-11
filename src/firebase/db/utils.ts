import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const addDocument = async (collectionName: string, data: object) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Doc written with ID", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
