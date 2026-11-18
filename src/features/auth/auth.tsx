import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase";


const googleProvider = new GoogleAuthProvider()

export const loginGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
}