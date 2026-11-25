import { collection, addDoc } from "firebase/firestore"; 
import type { newTransaction, transaction } from "./transactions/transaction.types";
import { database } from "../firebase/firebase";

// const docRef = await addDoc(collection(db, "cities"), {
//   name: "Tokyo",
//   country: "Japan"
// });

export async function addTransaction(id:string, data:newTransaction):Promise<transaction> {
    const docRef = await addDoc(collection(database, "users", id, "transactions"), {
        ...data,
    });
    return {
        id: docRef.id,
        ...data
    }
}