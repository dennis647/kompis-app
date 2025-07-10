import { auth } from "./firebaseConfig.ts";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const signUp = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};
