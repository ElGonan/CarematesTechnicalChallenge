import { firestore } from './firebase';
import { addDoc,collection,doc,deleteDoc,getDocs, updateDoc } from 'firebase/firestore';

const ref = collection(firestore, 'tasks');

export default class Tasks {
    static async addTask(task) {
        try {
            await addDoc(ref, task);
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    }

    static async deleteTask(id) {
        try {
            await deleteDoc(doc(ref, id));
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
    }

    static async getTasks() {
        const snapshot = await getDocs(ref);
        const tasks = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        return tasks;
    }

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