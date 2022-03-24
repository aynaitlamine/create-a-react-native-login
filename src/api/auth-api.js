import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from '../core/config'

const auth = getAuth(app);

export async function signUpUser({ name, email, password }) {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(user, { displayName: name })
        return { user }
    } catch (error) {
        return {
            error: error.message,
        }
    }
}


export function logoutUser() {
    auth.signOut()
}

export async function loginUser({ email, password }) {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        return { user }
    } catch (error) {
        return {
            error: error.message,
        }
    }
}
