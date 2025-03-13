import { db } from "@/firebase/init";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore'


//Add data to Firestore
const addData = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

//Get data from Firestore
const getData = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error getting documents:", error);
    }
}

//Delete data from Firestore
const deleteData = async (collectionName, id) => {
    try {
        await deleteDoc(doc(db, collectionName, id));
        console.log("Document deleted with ID: ", id);
    } catch (error) {
        console.error("Error deleting document:", error);
    }

};

export const updateData = async (collectionName, id, newData) => {
    try {
        const docRef = doc(db, collectionName, id);
        await updateDoc(docRef, newData);
        console.log("Document updated successfully!");
    } catch (error) {
        console.error("Error updating document:", error);
    }
};

export { addData, getData, deleteData, updateData };  //export the functions