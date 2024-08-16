import { firestore } from './firebase';
import { addDoc,collection,doc,deleteDoc,getDocs, updateDoc } from 'firebase/firestore';

// Create a reference to the tasks collection
const ref = collection(firestore, 'tasks');

// This class will contain the functions to interact with the tasks collection
export default class Tasks {

    // This function will add a task to the tasks collection
    static async addTask(task) {
        try {
            await addDoc(ref, task);
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    }

    // This function will delete a task from the tasks collection
    static async deleteTask(id) {
        try {
            await deleteDoc(doc(ref, id));
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
    }

    // This function will get all the tasks from the tasks collection
    static async getTasks() {
        const snapshot = await getDocs(ref);
        const tasks = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        return tasks;
    }

    // This function will mark a task as done
    static async doneTask(id) {
        try {
            await updateDoc(doc(ref, id), {
                done: true
            });
    }
    catch (error) {
        console.error('Error updating document: ', error);
    }
    }
}