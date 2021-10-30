import { useEffect, useState } from "react";
import firebaseAuthentication from "../firebase/firebase.config";
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, signOut } from "firebase/auth";

firebaseAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser();
            }
        });
    }, [auth])

    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser();
        }).catch((error) => {
            setError(error.message)
        });
    }

    return {
        user,
        loginWithGoogle,
        logOut,
        error
    }

}
export default useFirebase;